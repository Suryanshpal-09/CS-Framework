/**
 * app.js - behaviour only. All content (subjects, plan, tools, projects) lives in data.js.
 *
 * Contents
 *   1. Settings and small helpers
 *   2. Saved state (which subjects are ticked)
 *   3. Subject card (HTML builders)
 *   4. Study schedule (hours -> weeks)
 *   5. Views: year tree, "Best plan", study order, tools and projects
 *   6. Theme (Light / Dark / Ocean)
 *   7. Mobile menu
 *   8. Nav effects (shadow on scroll, current-section highlight)
 *   9. Events and start-up
 */
"use strict";

/* 1. SETTINGS AND HELPERS ------------------------------------------------ */

const STORAGE_KEYS = { done: "csrm", theme: "csth" };

// Share of each study day: 4.5 h on the current phase, 1.5 h on the always-on track
// (the other 2 h go to the phase project and Anki review, so they are not scheduled).
const DAY_LENGTH_HOURS = 8;
const PHASE_HOURS_PER_DAY = 4.5;
const ALWAYS_ON_HOURS_PER_DAY = 1.5;

const FILTERS = [
  { id: "all", label: "All" },
  { id: "gaps", label: "Gaps", coverage: 0 },
  { id: "partial", label: "Partly covered", coverage: 1 },
  { id: "covered", label: "Already covered", coverage: 2 },
  { id: "plan", label: "Best plan" },
];

// Order matters: this is the order the groups appear inside a card.
const RESOURCE_GROUPS = [
  { type: "notes", heading: "📝 Notes and blogs (read first)" },
  { type: "video", heading: "▶ Videos (English)" },
  { type: "hindi", heading: "▶ Hindi / Hinglish" },
  { type: "test", heading: "✅ Test yourself" },
];

const THEMES = [
  {
    id: "light",
    label: "Light",
    logo: "img/logo-light.svg",
    icon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4" />
    </svg>`,
  },
  {
    id: "dark",
    label: "Dark",
    logo: "img/logo-dark.svg",
    icon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M21 12.8A9 9 0 1 1 11.2 3a7 7 0 0 0 9.8 9.8z" />
    </svg>`,
  },
  {
    id: "ocean",
    label: "Ocean",
    logo: "img/logo-ocean.svg",
    icon: `<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M2 9c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3 2.5 3 5 3M2 16c2.5 0 2.5-3 5-3s2.5 3 5 3 2.5-3 5-3 2.5 3 5 3" />
    </svg>`,
  },
];

const qs = (selector) => document.querySelector(selector);
const qsa = (selector) => document.querySelectorAll(selector);

/** Escapes text before it goes into innerHTML. */
function escapeHtml(text) {
  return String(text)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** All subjects from every year, in one flat list. */
const ALL_SUBJECTS = YEARS.flatMap((year) => [...year.theory, ...year.systems]);

/** Look a subject up by its title (STUDY_PLAN items refer to subjects this way). */
const SUBJECT_BY_TITLE = Object.fromEntries(ALL_SUBJECTS.map((s) => [s.title, s]));

/* 2. SAVED STATE --------------------------------------------------------- */

const state = {
  done: loadJson(STORAGE_KEYS.done, {}), // { "Subject title": true }
  filter: "all", // one of FILTERS[].id
};

/** Reads JSON from localStorage. Storage can be blocked, so failures fall back quietly. */
function loadJson(key, fallback) {
  try {
    return JSON.parse(localStorage.getItem(key)) || fallback;
  } catch (error) {
    return fallback;
  }
}

function saveDone() {
  try {
    localStorage.setItem(STORAGE_KEYS.done, JSON.stringify(state.done));
  } catch (error) {
    /* ignore: progress just will not persist */
  }
}

function renderProgress() {
  const doneCount = ALL_SUBJECTS.filter((s) => state.done[s.title]).length;
  qs("#progress-fill").style.width = (100 * doneCount) / ALL_SUBJECTS.length + "%";
  qs("#progress-text").textContent = `${doneCount} of ${ALL_SUBJECTS.length} subjects done`;
}

/* 3. SUBJECT CARD -------------------------------------------------------- */

/** "Learning path", resource groups and the "move on when" checkpoint. */
function renderDetail(subject) {
  const steps = subject.learningPath.map((step) => `<li>${escapeHtml(step)}</li>`).join("");

  const groups = RESOURCE_GROUPS.map(({ type, heading }) => {
    const items = subject.resources.filter((r) => r.type === type);
    if (!items.length) return "";
    const links = items
      .map((r) =>
        // Some entries are exercises without a link (for example "write tests for every endpoint").
        r.url
          ? `<li><a href="${escapeHtml(r.url)}" target="_blank" rel="noopener">${escapeHtml(r.label)}</a></li>`
          : `<li>${escapeHtml(r.label)}</li>`,
      )
      .join("");
    return `<strong class="detail__heading">${heading}</strong><ul>${links}</ul>`;
  }).join("");

  return `
    <div class="detail">
      <strong class="detail__heading">Learning path</strong>
      <ol>${steps}</ol>
      ${groups}
      <p class="callout">${escapeHtml(subject.doneWhen)}</p>
    </div>`;
}

/**
 * One subject card.
 *   id       optional element id (used by "Best plan" so links can jump to the card)
 *   infoHtml optional panel shown above the hidden body (used by "Best plan")
 */
function renderSubjectCard(subject, { id = "", infoHtml = "" } = {}) {
  const isDone = Boolean(state.done[subject.title]);
  const topics = subject.topics
    .map((t) => `<span class="topic-chip">${escapeHtml(t)}</span>`)
    .join("");

  return `
    <div class="subject coverage-${subject.coverage}${isDone ? " is-done" : ""}"
         ${id ? `id="${id}"` : ""} data-title="${escapeHtml(subject.title)}">
      <div class="subject-head">
        <input type="checkbox" ${isDone ? "checked" : ""} aria-label="Mark ${escapeHtml(subject.title)} as done" />
        <span class="subject-title">${escapeHtml(subject.title)}</span>
      </div>
      ${infoHtml}
      <div class="subject-body">
        ${topics}
        <em class="coverage-note">${COVERAGE_LABELS[subject.coverage]}</em>
        ${renderDetail(subject)}
      </div>
    </div>`;
}

/* 4. STUDY SCHEDULE ------------------------------------------------------ */

/** Reads the two number boxes in the study-order section. */
function readSettings() {
  return {
    hoursPerWeek: Number(qs("#hours-input").value) || 48,
    depth: Number(qs("#depth-input").value) || 1,
  };
}

const planItemId = (phaseIndex, itemIndex) => `plan-${phaseIndex}-${itemIndex}`;

/**
 * Works out, for every item in STUDY_PLAN, its hours and the weeks it runs.
 * Returns an object like { "plan-0-1": { startWeek: 1, endWeek: 3, hours: 135 }, ... }
 *
 * Normal phases run one after another at (hoursPerWeek * 4.5 / 8) hours of study a week.
 * The "always on" phase runs alongside them at (hoursPerWeek * 1.5 / 8) hours a week.
 */
function buildSchedule() {
  const { hoursPerWeek, depth } = readSettings();
  const schedule = {};
  let phaseHoursSoFar = 0;
  let alwaysOnHoursSoFar = 0;

  STUDY_PLAN.forEach((phase, phaseIndex) => {
    const perDay = phase.runsAlongside ? ALWAYS_ON_HOURS_PER_DAY : PHASE_HOURS_PER_DAY;
    const hoursPerStudyWeek = (hoursPerWeek * perDay) / DAY_LENGTH_HOURS;

    phase.items.forEach((item, itemIndex) => {
      const hours = item.hours * depth;
      const before = phase.runsAlongside ? alwaysOnHoursSoFar : phaseHoursSoFar;

      schedule[planItemId(phaseIndex, itemIndex)] = {
        startWeek: Math.floor(before / hoursPerStudyWeek) + 1,
        endWeek: Math.ceil((before + hours) / hoursPerStudyWeek),
        hours,
      };

      if (phase.runsAlongside) alwaysOnHoursSoFar += hours;
      else phaseHoursSoFar += hours;
    });
  });

  return schedule;
}

/* 5. VIEWS --------------------------------------------------------------- */

/** Sticky-top buttons: All / Gaps / Partly / Covered / Best plan. */
function renderFilters() {
  qs("#filters").innerHTML = FILTERS.map(
    (f) =>
      `<button type="button" data-filter="${f.id}" class="${f.id === state.filter ? "is-active" : ""}">${f.label}</button>`,
  ).join("");
}

function setFilter(filterId) {
  state.filter = filterId;
  qsa("#filters button").forEach((b) =>
    b.classList.toggle("is-active", b.dataset.filter === filterId),
  );
  renderRoadmap();
}

/** Draws whichever view is active into #roadmap. */
function renderRoadmap() {
  if (state.filter === "plan") renderPlanView();
  else renderYearTree();
  renderProgress();
}

/* ---- Year tree (the default view) ---- */

function renderYearTree() {
  const activeFilter = FILTERS.find((f) => f.id === state.filter);
  const matches = (subject) =>
    activeFilter.coverage === undefined || subject.coverage === activeFilter.coverage;

  qs("#roadmap").innerHTML = YEARS.map((year) => {
    const theory = year.theory
      .filter(matches)
      .map((s) => renderSubjectCard(s))
      .join("");
    const systems = year.systems
      .filter(matches)
      .map((s) => renderSubjectCard(s))
      .join("");
    if (!theory && !systems) return ""; // nothing in this year matches the filter

    return `
      <section>
        <div class="phase-hub">${escapeHtml(year.label)}<small>${escapeHtml(year.subtitle)}</small></div>
        <div class="tracks">
          <div class="track--theory"><p class="track-label">Theory, math and intelligence</p>${theory}</div>
          <div class="tracks__spine"></div>
          <div class="track--systems"><p class="track-label">Systems, build and ship</p>${systems}</div>
        </div>
      </section>`;
  }).join("");
}

/* ---- "Best plan" view ---- */

/** The info panel above a plan card: what it is, where to start, tools, when. */
function renderPlanInfo(item, schedule, previousItem) {
  const hours = Math.round(schedule.hours);
  const after = previousItem ? `, after ${escapeHtml(previousItem.name)}` : "";
  return `
    <div class="plan-info">
      <p><b>What it is:</b> ${escapeHtml(item.whatItIs)}</p>
      <p><b>Start here:</b> ${escapeHtml(item.startHere)}</p>
      <p><b>Tools:</b> ${escapeHtml(item.tools)}</p>
      <p><b>When:</b> weeks ${schedule.startWeek} to ${schedule.endWeek} (${hours} h)${after}</p>
    </div>`;
}

function renderPlanView() {
  const schedule = buildSchedule();
  const weekBox = qs("#week-input"); // keep the week number if the view is redrawn
  const week = weekBox ? Number(weekBox.value) || 1 : 1;

  const phases = STUDY_PLAN.map((phase, phaseIndex) => {
    const cards = phase.items
      .map((item, itemIndex) => {
        const id = planItemId(phaseIndex, itemIndex);
        const infoHtml = renderPlanInfo(item, schedule[id], phase.items[itemIndex - 1]);
        return renderSubjectCard(SUBJECT_BY_TITLE[item.subject], { id, infoHtml });
      })
      .join("");

    return `
      <section>
        <div class="phase-hub">${escapeHtml(phase.title)}<small>${escapeHtml(phase.subtitle)}</small></div>
        <div class="plan-track">${cards}</div>
      </section>`;
  }).join("");

  qs("#roadmap").innerHTML = `
    <div class="week-panel">
      <label>I am in week <input class="number-input" id="week-input" type="number" min="1" max="300" value="${week}" /></label>
      <p class="do-now" id="do-now"></p>
      <small>Tap a card for its full learning path, resources and tests. Subjects inside a phase go in order; the Always on subjects run alongside the current phase.</small>
    </div>
    ${phases}`;

  qs("#week-input").addEventListener("input", () => renderDoNow(schedule));
  renderDoNow(schedule);
}

/** "Do now: ..." list for the chosen week. */
function renderDoNow(schedule) {
  const week = Number(qs("#week-input").value) || 1;

  const links = Object.entries(schedule)
    .filter(([, s]) => s.startWeek <= week && week <= s.endWeek)
    .map(([id]) => {
      const [, phaseIndex, itemIndex] = id.split("-");
      const name = STUDY_PLAN[phaseIndex].items[itemIndex].name;
      return `<a href="#${id}" data-jump="${id}">${escapeHtml(name)}</a>`;
    });

  qs("#do-now").innerHTML = "<b>Do now:</b> " + (links.join(", ") || "nothing scheduled this week");
}

/* ---- Study order section (top of the page) ---- */

function renderStudyOrder() {
  const { hoursPerWeek, depth } = readSettings();
  const schedule = buildSchedule();
  let totalHours = 0;

  const cards = STUDY_PLAN.map((phase, phaseIndex) => {
    const phaseHours = Math.round(phase.items.reduce((sum, item) => sum + item.hours, 0) * depth);
    totalHours += phaseHours;

    const lastIndex = phase.items.length - 1;
    const firstWeek = schedule[planItemId(phaseIndex, 0)].startWeek;
    const lastWeek = schedule[planItemId(phaseIndex, lastIndex)].endWeek;

    const items = phase.items
      .map((item, itemIndex) => {
        const id = planItemId(phaseIndex, itemIndex);
        const hours = Math.round(item.hours * depth);
        return `<li><a href="#${id}" data-jump="${id}">${escapeHtml(item.name)}</a>
                <i class="phase-card__hours">${hours} h, from week ${schedule[id].startWeek}</i></li>`;
      })
      .join("");

    return `
      <div class="phase-card">
        <strong class="phase-card__title">${escapeHtml(phase.title)}</strong>
        <span class="phase-card__subtitle">${escapeHtml(phase.subtitle)}</span>
        <em class="phase-card__time">${phaseHours} h, weeks ${firstWeek} to ${lastWeek}</em>
        <ol>${items}</ol>
      </div>`;
  }).join("");

  const totalWeeks = Math.max(...Object.values(schedule).map((s) => s.endWeek));
  qs("#phase-list").innerHTML =
    cards +
    `<p class="callout">Total ${totalHours} h of study. Following the daily rhythm above, the whole plan takes about
     ${totalWeeks} weeks (${(totalWeeks / 52).toFixed(1)} years) at ${hoursPerWeek} h a week.
     Tap any subject to jump to it in Best plan.</p>`;
}

/** The three numbers under the buttons: subjects, phases, and total weeks at your pace. */
function renderStats() {
  const { hoursPerWeek } = readSettings();
  const totalWeeks = Math.max(...Object.values(buildSchedule()).map((s) => s.endWeek));
  const phaseCount = STUDY_PLAN.filter((phase) => !phase.runsAlongside).length;

  const stats = [
    [ALL_SUBJECTS.length, "subjects"],
    [phaseCount, "phases"],
    ["~" + totalWeeks, `weeks at ${hoursPerWeek} h a week`],
  ];
  qs("#stats").innerHTML = stats
    .map(
      ([number, label]) =>
        `<div class="stat"><strong>${number}</strong><span>${label}</span></div>`,
    )
    .join("");
}

/** Refreshes everything that depends on the hours / depth boxes. */
function onSettingsChanged() {
  renderStats();
  renderStudyOrder();
  if (state.filter === "plan") renderPlanView();
}

/* ---- Tools and projects ---- */

function renderGroupList(containerSelector, groups, cardClass) {
  qs(containerSelector).innerHTML = groups
    .map(
      (group) => `
      <div class="phase-card ${cardClass}">
        <strong class="phase-card__title">${escapeHtml(group.phase)}</strong>
        <ul>${group.items.map((item) => `<li>${escapeHtml(item)}</li>`).join("")}</ul>
      </div>`,
    )
    .join("");
}

/** Jumps to a card in "Best plan" and opens it. Used by every in-page plan link. */
function jumpToPlanCard(id) {
  if (state.filter !== "plan") setFilter("plan");
  const card = document.getElementById(id);
  if (!card) return;
  card.classList.add("is-open");
  card.scrollIntoView({ behavior: "smooth", block: "start" });
}

/* 6. THEME --------------------------------------------------------------- */

/** The active theme id. With no saved choice, follows the device (light or dark). */
function currentThemeId() {
  const chosen = document.documentElement.dataset.theme;
  if (chosen) return chosen;
  return matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

/** Redraws both theme buttons (top-right and the one in the sticky nav). */
function renderThemeButtons() {
  const index = Math.max(
    0,
    THEMES.findIndex((t) => t.id === currentThemeId()),
  );
  const current = THEMES[index];
  const next = THEMES[(index + 1) % THEMES.length];

  const dots = THEMES.map((t, i) => `<i${i === index ? ' class="is-current"' : ""}></i>`).join("");
  const title = `Theme: ${current.label}. Click for ${next.label}`;

  qs("#brand-logo").setAttribute("src", current.logo); // each theme has its own logo file

  qsa(".theme-button").forEach((button) => {
    button.innerHTML = `${current.icon}<span>${current.label}</span><span class="theme-dots">${dots}</span>`;
    button.title = title;
    button.setAttribute("aria-label", title);
  });
}

function cycleTheme() {
  const index = Math.max(
    0,
    THEMES.findIndex((t) => t.id === currentThemeId()),
  );
  const next = THEMES[(index + 1) % THEMES.length].id;
  document.documentElement.dataset.theme = next;
  try {
    localStorage.setItem(STORAGE_KEYS.theme, next);
  } catch (error) {
    /* ignore: the choice just will not persist */
  }
  renderThemeButtons();
}

function restoreSavedTheme() {
  try {
    const saved = localStorage.getItem(STORAGE_KEYS.theme);
    if (THEMES.some((t) => t.id === saved)) document.documentElement.dataset.theme = saved;
  } catch (error) {
    /* storage blocked: keep the device default */
  }
}

/* 7. MOBILE MENU -------------------------------------------------------- */

/** Opens or closes the dropdown menu (only visible on phones and tablets). */
function setMenuOpen(open) {
  const button = qs("#menu-button");
  qs("#site-nav").classList.toggle("is-open", open);
  button.setAttribute("aria-expanded", String(open));
  button.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

/* 8. NAV EFFECTS ------------------------------------------------------- */

/** Adds a soft shadow to the nav once the page has scrolled. */
function watchScroll() {
  const update = () => qs("#site-nav").classList.toggle("is-scrolled", window.scrollY > 8);
  window.addEventListener("scroll", update, { passive: true });
  update();
}

/** Highlights the nav link of the section you are currently reading. */
function watchSections() {
  const links = new Map(
    [...qsa(".site-nav__links a")].map((a) => [a.getAttribute("href").slice(1), a]),
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries
        .filter((entry) => entry.isIntersecting)
        .forEach((entry) => {
          links.forEach((link) => {
            link.classList.remove("is-current");
            link.removeAttribute("aria-current");
          });
          const link = links.get(entry.target.id);
          link.classList.add("is-current");
          link.setAttribute("aria-current", "true");
        });
    },
    { rootMargin: "-40% 0px -55% 0px" }, // a thin band around the middle of the screen
  );
  links.forEach((link, id) => observer.observe(document.getElementById(id)));
}

/* 9. EVENTS AND START-UP ------------------------------------------------- */

function bindEvents() {
  // Filter buttons: switch view, then bring the tree into view (it sits below the header).
  qs("#filters").addEventListener("click", (event) => {
    const button = event.target.closest("button");
    if (!button) return;
    setFilter(button.dataset.filter);
    qs("#roadmap").scrollIntoView({ behavior: "smooth" });
  });

  // Cards: ticking the checkbox marks done; clicking anywhere else opens or closes the card.
  qs("#roadmap").addEventListener("click", (event) => {
    const card = event.target.closest(".subject");
    if (!card || event.target.closest(".detail")) return;

    if (event.target.type === "checkbox") {
      state.done[card.dataset.title] = event.target.checked;
      card.classList.toggle("is-done", event.target.checked);
      saveDone();
      renderProgress();
    } else {
      card.classList.toggle("is-open");
    }
  });

  // Any link with data-jump goes to that card in "Best plan".
  document.addEventListener("click", (event) => {
    const link = event.target.closest("a[data-jump]");
    if (!link) return;
    event.preventDefault();
    jumpToPlanCard(link.dataset.jump);
  });

  qs("#hours-input").addEventListener("input", onSettingsChanged);
  qs("#depth-input").addEventListener("input", onSettingsChanged);
  qsa(".theme-button").forEach((button) => button.addEventListener("click", cycleTheme));

  // If a source-link logo cannot load (offline, blocked), show a plain arrow instead.
  qsa(".source-link img").forEach((img) => {
    const markBroken = () => img.closest(".source-link").classList.add("is-broken");
    img.addEventListener("error", markBroken);
    if (img.complete && img.naturalWidth === 0) markBroken(); // already failed before this ran
  });

  // Mobile menu: the button opens it; choosing a link, clicking outside or pressing Escape closes it.
  qs("#menu-button").addEventListener("click", () => {
    setMenuOpen(!qs("#site-nav").classList.contains("is-open"));
  });
  qs("#site-menu").addEventListener("click", (event) => {
    if (event.target.closest("a")) setMenuOpen(false);
  });
  document.addEventListener("click", (event) => {
    if (!event.target.closest("#site-nav")) setMenuOpen(false);
  });
  document.addEventListener("keydown", (event) => {
    if (event.key !== "Escape") return;
    setMenuOpen(false);
    qs("#menu-button").focus();
  });
}

function init() {
  restoreSavedTheme();
  renderThemeButtons();
  renderFilters();
  renderRoadmap();
  renderStats();
  renderStudyOrder();
  renderGroupList("#tool-list", TOOLS, "tool-card");
  renderGroupList("#project-list", PROJECTS, "project-card");
  bindEvents();
  watchScroll();
  watchSections();
}

init();
