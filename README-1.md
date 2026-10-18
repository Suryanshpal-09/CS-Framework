# The Complete CS Degree Roadmap

A self-paced computer science degree roadmap: study order, "Best plan" view, tools, projects and
free resources for 36 subjects. Plain HTML, CSS and JavaScript. No build step, no dependencies.

## Run it

Open `index.html` in a browser. To publish on GitHub Pages, push this folder to a repository and
turn on Pages for the main branch (root folder).

## Files

| File             | What it holds                                                                |
| ---------------- | ---------------------------------------------------------------------------- |
| `index.html`     | Page structure only. Sections are filled in by `app.js`.                     |
| `img/`           | The three theme logos (`logo-light.png`, `logo-dark.png`, `logo-ocean.png`). |
| `css/styles.css` | All styling. Colours and fonts are variables in section 1 (themes).          |
| `js/data.js`     | All content: subjects, resources, study plan, tools, projects.               |
| `js/app.js`      | Behaviour: rendering, filters, "Best plan", schedule, ticking, theme button. |

## Common edits

**Fix or add a resource link.** Open `js/data.js`, find the subject by its `title`, and edit its
`resources` list. A resource looks like this:

```js
{ type: "notes", label: "Name shown on the page", url: "https://example.com" }
```

`type` is one of `"notes"`, `"video"`, `"hindi"`, `"test"`. For a YouTube search link use
`youtubeSearch("search words")` instead of a quoted URL. Leave `url` empty (`""`) for an exercise
that has no link.

**Add a subject.** Copy an existing subject object inside `YEARS` (in the `theory` or `systems`
list), give it a new unique `title`, then add an item to a phase in `STUDY_PLAN` with
`subject: "<that title>"`, its `hours`, `whatItIs`, `startHere` and `tools`.

**Change the plan.** Reorder or edit items in `STUDY_PLAN`. Phases run one after another; a phase
with `runsAlongside: true` runs in parallel (the "Always on" track).

**Change colours.** Edit the variables at the top of `css/styles.css`. The three coverage colours
are `--gap`, `--partial` and `--covered`.

**Add a theme.** Add a block like `:root[data-theme="mytheme"] { ... }` to `css/styles.css`
(copy the Ocean block), then add an entry to `THEMES` in `js/app.js`.

**Replace the logo.** Overwrite the three files in `img/` with your own, keeping the names. The nav
swaps them automatically: `logo-light.png` for the Light theme, `logo-dark.png` for Dark and
`logo-ocean.png` for Ocean. Transparent PNGs about 150 px tall work well. To change which logo a
theme uses, edit the `logo` field of that theme in `THEMES` (`js/app.js`).

**Change the Beyond Sigma buttons.** The "BS - Syllabus" and "BS - Roadmap" buttons are in the nav
in `index.html` (search for `source-link`). Change the `href` to point somewhere else. Their logos
are each site's favicon, loaded through Google's favicon service; if a logo fails to load, a plain
arrow is shown instead.

**Nav on phones.** Below 900 px wide the page links and buttons fold into the menu button. The
breakpoint is in the "Responsive rules" section of `css/styles.css`.

**After you edit a file, bump the version.** `index.html` loads the files as `styles.css?v=5`,
`data.js?v=5` and `app.js?v=5`. Change the number (for example to `?v=6`) when you publish a change,
so visitors' browsers fetch the new file instead of an old cached copy.

## Your progress

Ticks and the chosen theme are saved in the browser (`localStorage`), per device and browser.
