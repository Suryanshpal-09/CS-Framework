# CS Framework — Chapter-wise Video Tutorial Map

**Purpose:** a video-first curation map for updating the tutorial resources in the CS Framework site. The chapter names and subtopic sequence follow the current `js/data.js` `learningPath` and `topics` fields (36 subjects). This is a research draft for review before publishing.

## How to read this map

- **Direct video / playlist** means the link goes to an identified video or playlist. **Course site with videos** means the official university/course page contains lecture videos. **YouTube search** is a tightly scoped query, used where a clearly matching single video or stable playlist was not verified; it is intentionally not presented as a verified video.
- The selected English academic courses are preferred for depth in mathematical and systems subjects. Sheryians, CodeWithHarry, NotYourCollege, Chai aur Code, CampusX, Kunal Kushwaha and similar channels are included where their teaching is a good fit, especially for practical web and Hindi/Hinglish learning.
- For every subpart, use the linked video/playlist in the chapter’s listed sequence. Several subparts intentionally share a playlist when that playlist teaches them as consecutive lessons.
- **Editorial QA required before publishing:** open each search link, choose the best matching result, confirm language, quality, syllabus fit and whether the video is still available. Search results can change. These links are a researched shortlist, not a claim that every video has been watched end-to-end.

## Research anchors verified during this pass

- [Current roadmap source](https://raw.githubusercontent.com/Suryanshpal-09/CS-Framework/main/js/data.js) — Topics, learningPath steps and current resource structure were derived from this data file.
- [MIT Missing Semester video playlist](https://www.youtube.com/playlist?list=PLyzOVJj3bHQuloKGG59rS43e29ro7I57J) — Officially linked from MIT Missing Semester 2020; covers shell, tools, Git, debugging and related developer skills.
- [Harvard Stat 110 playlist](https://www.youtube.com/playlist?list=PL2SOU6wwxB0uwwH80KTQ6ht66KWxbzTIo) — Linked from Harvard Stat 110; probability lecture sequence.
- [MIT 6.006 video lecture catalog](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-videos/) — Lecture catalogue covering data structures, graphs, shortest paths, dynamic programming and complexity.
- [MIT 6.046J video lecture catalog](https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/resources/lecture-videos/) — Lecture catalogue covering amortized analysis, randomization, greedy algorithms, network flow, linear programming and complexity.
- [Harvard CS50x 2026 sections playlist](https://www.youtube.com/playlist?list=PLhQjrBD2T3839iqxqUdw7NWOCboh00vsV) — Current CS50x page links the sections playlist; useful for C, arrays, algorithms, memory, data structures, Python and SQL.
- [freeCodeCamp C pointers full course](https://www.youtube.com/watch?v=zuegQmMdy8M) — Verified course includes pointer arithmetic, arrays, stack/heap, malloc/free and memory leaks.
- [CodeWithHarry Python beginner course](https://www.youtube.com/watch?v=gfDE2a7MKjA) — Verified Hindi long-form course covering Python basics, functions, data structures, files and OOP.
- [Sheryians Cyber School networking tutorial](https://www.youtube.com/watch?v=FNj8jMTOfnA) — Verified long-form course covers OSI/TCP-IP, IP addressing, ARP, routing, TCP/UDP, congestion control, DNS-related networking and TLS.
- [Sheryians ReactJS full course](https://www.youtube.com/watch?v=3LRZRSIh_KE) — Verified long-form course covers React fundamentals, hooks, state, API calls, routing and projects.
- [Not Your College — Before You Learn Coding, Learn THIS](https://www.youtube.com/watch?v=FETxgyyu904) — Verified 2h10 overview with computer, hardware/software, OS, terminal/CLI, number systems, programming fundamentals and problem-solving chapters.
- [Not Your College — What Smart Students Do Before College Starts](https://www.youtube.com/watch?v=biOUjg6Sa0E) — Verified roadmap video with first-90-days plan, web basics, projects, Git/GitHub, deployment, API/backend and authentication overview.
- [Sheryians Coding School — Web Development Course, Frontend Level 1](https://www.youtube.com/watch?v=9cmy6AK3IBA) — Verified beginner frontend video with HTML, CSS, positioning, Flexbox and project work.
- [Sheryians Coding School — Modern Web Development Project 2](https://www.youtube.com/watch?v=pv60QrlO4yM) — Verified practical HTML/CSS/JavaScript project with animations and frontend implementation.
- [TechWorld with Nana Docker course](https://www.youtube.com/watch?v=3c-iBn73dDE) — Verified long-form Docker course with containers, Compose, Dockerfiles, deployment and volumes.
- [TechWorld with Nana GitHub Actions tutorial](https://www.youtube.com/watch?v=R8_veQiYBjI) — Verified course covers GitHub Actions and a CI/CD pipeline demo.
- [Stanford CS229 regression and gradient descent lecture](https://www.youtube.com/watch?v=4b4MUYve_U8) — Verified lecture includes linear regression, supervised learning and gradient descent.
- [Andrej Karpathy micrograd](https://www.youtube.com/watch?v=VMj-3S1tku0) — Neural networks and backpropagation from scratch.
- [Andrej Karpathy build GPT](https://www.youtube.com/watch?v=kCc8FmEb1nY) — Hands-on transformer/GPT implementation from scratch.

## Chapter-wise map

### Start here

#### Chapter 1. Programming Fundamentals (C and Python)

1. **Python variables, types, control flow and functions.** [CodeWithHarry — Python Tutorial for Beginners in Hindi (full course)](https://www.youtube.com/watch?v=gfDE2a7MKjA)  
   _Resource type: Direct video · Hindi_
2. **Python data structures, modules, files and virtual environments.** [CodeWithHarry — Python course (use chapter timestamps); then search virtual environments](https://www.youtube.com/watch?v=gfDE2a7MKjA)  
   _Resource type: Direct video · Hindi_
3. **Build small command-line tools, file organiser and scraper.** [Corey Schafer / freeCodeCamp — beginner Python projects](https://www.youtube.com/results?search_query=Corey+Schafer+Python+projects+beginner+file+organizer+web+scraper+tutorial)  
   _Resource type: YouTube search · English_
4. **C compiling, types, pointers, arrays and strings.** [Harvard CS50x — C, arrays and memory lectures](https://www.youtube.com/results?search_query=Harvard+CS50x+2026+C+arrays+memory+lecture+David+Malan)  
   _Resource type: YouTube search · English_
5. **C structs, malloc/free and file I/O.** [freeCodeCamp — Pointers in C/C++ Full Course](https://www.youtube.com/watch?v=zuegQmMdy8M)  
   _Resource type: Direct video · English_
6. **Makefiles and debugging with gdb.** [MIT Missing Semester — Debugging and Profiling; focused gdb demos](https://www.youtube.com/playlist?list=PLyzOVJj3bHQuloKGG59rS43e29ro7I57J)  
   _Resource type: Direct playlist · English_

#### Chapter 2. Tools and How the Internet Works

1. **Linux shell: navigation, pipes, grep and permissions.** [MIT Missing Semester — Course Overview + The Shell / Shell Tools and Scripting (NYC has a 15-minute CLI introduction as an optional warm-up)](https://www.youtube.com/playlist?list=PLyzOVJj3bHQuloKGG59rS43e29ro7I57J)  
   _Resource type: Direct playlist · English; optional Hindi/Hinglish preview: [Not Your College CLI segment](https://www.youtube.com/watch?v=FETxgyyu904&t=4066s)_
2. **Git: commits, branches, merges, rebase and pull requests.** [freeCodeCamp — Git and GitHub for Beginners; use MIT Version Control for deeper details](https://www.youtube.com/results?search_query=freeCodeCamp+Git+and+GitHub+for+Beginners+crash+course+branching+merging+pull+requests)  
   _Resource type: YouTube search · English_
3. **Resolve merge conflicts and collaborate safely.** [freeCodeCamp — Git & GitHub: Merge Conflicts](https://www.youtube.com/watch?v=sfT0WrChMrM)  
   _Resource type: Direct video · English_
4. **Editor/terminal workflow, documentation and man pages.** [MIT Missing Semester — shell, command-line environment, editors and debugging](https://www.youtube.com/playlist?list=PLyzOVJj3bHQuloKGG59rS43e29ro7I57J)  
   _Resource type: Direct playlist · English_
5. **Client-server model; what happens after entering a URL.** [Sheryians Cyber School — Complete Networking Tutorial 2026 (covers TCP/IP, DNS, TLS, packets and Wireshark)](https://www.youtube.com/watch?v=FNj8jMTOfnA)  
   _Resource type: Direct video · Hinglish/English mix_
6. **DNS, TCP, HTTP/HTTPS and TLS request journey.** [Focused animation/lecture explaining a browser request end-to-end](https://www.youtube.com/results?search_query=what+happens+when+you+type+a+URL+DNS+TCP+TLS+HTTP+HTTPS+explained+computer+networking)  
   _Resource type: YouTube search · English_
7. **AI as a coding partner: prompting, reviewing diffs, tests and verification.** [Practical workflow demos for Claude Code / GitHub Copilot; choose a recent official or experienced-developer walkthrough](https://www.youtube.com/results?search_query=Claude+Code+GitHub+Copilot+AI+coding+assistant+workflow+plan+implement+test+review+debugging+best+practices)  
   _Resource type: YouTube search · English_

### Year 1

#### Chapter 3. Calculus I and II

1. **Functions, limits and continuity.** [3Blue1Brown — Essence of Calculus for intuition; MIT 18.01 for worked lectures](https://www.youtube.com/results?search_query=3Blue1Brown+Essence+of+Calculus+limits+continuity)  
   _Resource type: YouTube search · English_
2. **Derivatives and product, quotient and chain rules.** [MIT OCW 18.01 Single Variable Calculus — lecture videos](https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/)  
   _Resource type: Course site with videos · English_
3. **Applications: optimization, related rates, curve sketching and L’Hôpital.** [Professor Leonard — Calculus I full lectures](https://www.youtube.com/results?search_query=Professor+Leonard+Calculus+1+optimization+related+rates+curve+sketching+full+lecture)  
   _Resource type: YouTube search · English_
4. **Integrals, Fundamental Theorem, substitution and integration by parts.** [MIT OCW 18.01/18.02 calculus lectures](https://www.youtube.com/results?search_query=MIT+OpenCourseWare+single+variable+calculus+integrals+substitution+integration+by+parts+lecture)  
   _Resource type: YouTube search · English_
5. **Sequences, series, Taylor series and convergence.** [Professor Leonard / MIT calculus lecture sequence](https://www.youtube.com/results?search_query=Professor+Leonard+calculus+2+sequences+series+Taylor+series+convergence+lecture)  
   _Resource type: YouTube search · English_

#### Chapter 4. Discrete Mathematics

1. **Logic, propositions, truth tables and proof methods.** [Dr. Trefor Bazett — Discrete Math full course playlist](https://www.youtube.com/playlist?list=PLHXZ9OQGMqxersk8fUxiUMSIx0DBqsKZS)  
   _Resource type: Direct playlist · English_
2. **Sets, functions and relations.** [Dr. Trefor Bazett — Discrete Math full course playlist](https://www.youtube.com/playlist?list=PLHXZ9OQGMqxersk8fUxiUMSIx0DBqsKZS)  
   _Resource type: Direct playlist · English_
3. **Direct proof, contradiction, contrapositive and induction.** [Dr. Trefor Bazett — proof and induction lessons](https://www.youtube.com/results?search_query=Trefor+Bazett+discrete+math+proof+by+induction+contradiction+contrapositive)  
   _Resource type: YouTube search · English_
4. **Permutations, combinations, pigeonhole and inclusion-exclusion.** [Dr. Trefor Bazett — counting and combinatorics lessons](https://www.youtube.com/results?search_query=Trefor+Bazett+discrete+mathematics+counting+permutations+combinations+pigeonhole+inclusion+exclusion)  
   _Resource type: YouTube search · English_
5. **Number theory and modular arithmetic.** [MIT Mathematics for Computer Science — modular arithmetic / number theory lecture videos](https://www.youtube.com/results?search_query=MIT+Mathematics+for+Computer+Science+modular+arithmetic+number+theory+lecture)  
   _Resource type: YouTube search · English_
6. **Graph theory, trees, recurrences and discrete probability.** [Dr. Trefor Bazett — graph theory and recurrences lessons](https://www.youtube.com/playlist?list=PLHXZ9OQGMqxersk8fUxiUMSIx0DBqsKZS)  
   _Resource type: Direct playlist · English_

#### Chapter 5. Linear Algebra

1. **Vectors, linear combinations and dot products.** [3Blue1Brown — Essence of Linear Algebra](https://www.youtube.com/playlist?list=PLZHQObOWTQDMsr9K-rj53DwVRMYO3t5Yr)  
   _Resource type: Direct playlist · English_
2. **Matrices as transformations; solving Ax=b by elimination.** [3Blue1Brown intuition, then Gilbert Strang — MIT 18.06 lecture series](https://www.youtube.com/results?search_query=Gilbert+Strang+MIT+18.06+linear+algebra+matrices+transformations+Ax%3Db+lecture)  
   _Resource type: YouTube search · English_
3. **Vector spaces, rank and null space.** [Gilbert Strang — MIT 18.06 Linear Algebra](https://www.youtube.com/results?search_query=MIT+OCW+Gilbert+Strang+linear+algebra+vector+spaces+rank+null+space+lecture)  
   _Resource type: YouTube search · English_
4. **Orthogonality, projections and least squares.** [Gilbert Strang — MIT 18.06 lecture videos](https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/)  
   _Resource type: Course site with videos · English_
5. **Eigenvalues, eigenvectors and diagonalization.** [3Blue1Brown / MIT 18.06 eigenvector lectures](https://www.youtube.com/results?search_query=3Blue1Brown+eigenvectors+eigenvalues+Gilbert+Strang+MIT+lecture)  
   _Resource type: YouTube search · English_
6. **SVD and PCA introduction for ML.** [StatQuest — PCA and SVD; MIT 18.06 for mathematical depth](https://www.youtube.com/results?search_query=StatQuest+PCA+singular+value+decomposition+explained)  
   _Resource type: YouTube search · English_

#### Chapter 6. Data Structures and Algorithms I

1. **Big-O and operation counting.** [Harvard CS50 — algorithms and asymptotic notation; MIT 6.006](https://www.youtube.com/results?search_query=Harvard+CS50+Big+O+notation+algorithms+lecture)  
   _Resource type: YouTube search · English_
2. **Arrays, strings and hashing (maps/sets).** [MIT 6.006 — data structures and hashing lecture videos](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-videos/)  
   _Resource type: Course site with videos · English_
3. **Linked lists, stacks and queues.** [Abdul Bari — data structures explained visually](https://www.youtube.com/results?search_query=Abdul+Bari+linked+list+stack+queue+data+structures)  
   _Resource type: YouTube search · English_
4. **Recursion and basic backtracking.** [freeCodeCamp / Abdul Bari — recursion and backtracking walkthroughs](https://www.youtube.com/results?search_query=Abdul+Bari+recursion+backtracking+data+structures+algorithms)  
   _Resource type: YouTube search · English_
5. **Trees, binary search trees and heaps.** [MIT 6.006 — binary trees, AVL trees and heaps](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-videos/)  
   _Resource type: Course site with videos · English_
6. **Sorting, searching, merge sort, quicksort and binary search.** [MIT 6.006 / Abdul Bari — sorting and searching lectures](https://www.youtube.com/results?search_query=MIT+6.006+sorting+binary+search+merge+sort+quicksort+lecture+Abdul+Bari)  
   _Resource type: YouTube search · English_

#### Chapter 7. Digital Logic

1. **Binary, hexadecimal, two’s complement and Boolean algebra.** [Neso Academy — Digital Electronics; Ben Eater for intuition](https://www.youtube.com/results?search_query=Neso+Academy+digital+electronics+number+systems+2s+complement+Boolean+algebra)  
   _Resource type: YouTube search · English_
2. **Logic gates, truth tables and Karnaugh maps.** [Neso Academy — Boolean simplification and K-maps](https://www.youtube.com/results?search_query=Neso+Academy+logic+gates+truth+tables+Karnaugh+map+K+map)  
   _Resource type: YouTube search · English_
3. **Combinational blocks: adders, multiplexers, decoders and ALU.** [Nand2Tetris hardware / Ben Eater 8-bit computer series](https://www.youtube.com/results?search_query=Ben+Eater+logic+gates+adder+ALU+build+computer)  
   _Resource type: YouTube search · English_
4. **Sequential logic: latches, flip-flops, registers and counters.** [Ben Eater — 8-bit computer from logic gates](https://www.youtube.com/results?search_query=Ben+Eater+flip+flops+registers+counters+8+bit+computer)  
   _Resource type: YouTube search · English_
5. **Finite-state machines.** [Neso Academy — finite state machines and sequential circuits](https://www.youtube.com/results?search_query=Neso+Academy+finite+state+machines+digital+logic)  
   _Resource type: YouTube search · English_
6. **Build from NAND gates toward an ALU.** [Nand2Tetris — From NAND to Tetris, Part I project walkthroughs](https://www.youtube.com/results?search_query=Nand2Tetris+project+1+NAND+gates+ALU+hardware+simulator+lecture)  
   _Resource type: YouTube search · English_

#### Chapter 8. Object-Oriented Programming

1. **Classes, objects and encapsulation.** [Corey Schafer — Python OOP tutorial series](https://www.youtube.com/results?search_query=Corey+Schafer+Python+OOP+classes+instances+encapsulation+playlist)  
   _Resource type: YouTube search · English_
2. **Inheritance versus composition.** [Corey Schafer — inheritance; search for composition vs inheritance](https://www.youtube.com/results?search_query=Corey+Schafer+Python+OOP+inheritance+composition)  
   _Resource type: YouTube search · English_
3. **Polymorphism, interfaces and abstraction.** [CodeWithHarry — Python OOP / inheritance course sections](https://www.youtube.com/results?search_query=CodeWithHarry+Python+OOP+polymorphism+abstraction+inheritance+Hindi)  
   _Resource type: YouTube search · Hindi_
4. **SOLID principles.** [ArjanCodes — SOLID principles and clean Python design](https://www.youtube.com/results?search_query=ArjanCodes+SOLID+principles+software+design)  
   _Resource type: YouTube search · English_
5. **Factory, Observer and Strategy patterns.** [Christopher Okhravi — design patterns explained with examples](https://www.youtube.com/results?search_query=Christopher+Okhravi+Factory+Observer+Strategy+design+patterns)  
   _Resource type: YouTube search · English_
6. **Refactor a small project into clean classes.** [Corey Schafer — build a project using OOP principles](https://www.youtube.com/results?search_query=Corey+Schafer+Python+OOP+project+refactor+classes)  
   _Resource type: YouTube search · English_

### Year 2

#### Chapter 9. Algorithm Design and Analysis

1. **Divide and conquer, recurrences and Master Theorem.** [MIT 6.006 algorithms lectures; MIT 6.046J for deeper treatment](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-videos/)  
   _Resource type: Course site with videos · English_
2. **Greedy algorithms and exchange arguments.** [MIT 6.046J — greedy algorithms / minimum spanning tree](https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/resources/lecture-videos/)  
   _Resource type: Course site with videos · English_
3. **Dynamic programming: state design and recurrence.** [MIT 6.006 — Dynamic Programming lectures](https://www.youtube.com/results?search_query=MIT+6.006+dynamic+programming+lecture+SRTBOT)  
   _Resource type: YouTube search · English_
4. **Graph algorithms: BFS, DFS, shortest paths and MST.** [MIT 6.006 — graph search and shortest path lecture videos](https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/resources/lecture-videos/)  
   _Resource type: Course site with videos · English_
5. **Network flow and matching.** [MIT 6.046J — max flow/min cut and matching lectures](https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/resources/lecture-videos/)  
   _Resource type: Course site with videos · English_
6. **Amortized analysis.** [MIT 6.046J — Amortized Analysis lecture](https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/resources/lecture-videos/)  
   _Resource type: Course site with videos · English_
7. **NP-completeness and reductions.** [MIT 6.046J — P, NP, NP-completeness and reductions](https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/resources/lecture-videos/)  
   _Resource type: Course site with videos · English_

#### Chapter 10. Probability and Statistics

1. **Counting, probability rules, conditional probability and Bayes.** [Harvard Stat 110 — official probability playlist, lectures 1–5](https://www.youtube.com/playlist?list=PL2SOU6wwxB0uwwH80KTQ6ht66KWxbzTIo)  
   _Resource type: Direct playlist · English_
2. **Random variables, expectation and variance.** [Harvard Stat 110 — lectures on random variables and expectation](https://www.youtube.com/playlist?list=PL2SOU6wwxB0uwwH80KTQ6ht66KWxbzTIo)  
   _Resource type: Direct playlist · English_
3. **Binomial, Poisson and normal distributions.** [Harvard Stat 110 + StatQuest explainers for intuition](https://www.youtube.com/results?search_query=StatQuest+binomial+Poisson+normal+distributions+explained)  
   _Resource type: YouTube search · English_
4. **Law of large numbers and central limit theorem.** [Harvard Stat 110 — LLN and CLT lectures](https://www.youtube.com/playlist?list=PL2SOU6wwxB0uwwH80KTQ6ht66KWxbzTIo)  
   _Resource type: Direct playlist · English_
5. **Estimation, confidence intervals and hypothesis testing.** [StatQuest — p-values, confidence intervals and hypothesis testing](https://www.youtube.com/results?search_query=StatQuest+confidence+intervals+hypothesis+testing+p+value)  
   _Resource type: YouTube search · English_
6. **Regression and correlation versus causation.** [StatQuest — linear regression and statistical relationships](https://www.youtube.com/results?search_query=StatQuest+linear+regression+correlation+causation+explained)  
   _Resource type: YouTube search · English_

#### Chapter 11. Theory of Computation

1. **DFA, NFA and regular expressions.** [MIT 18.404 Theory of Computation / Neso Academy automata lessons](https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/)  
   _Resource type: Course site with videos · English_
2. **Pumping lemma.** [MIT 18.404 — regular languages and pumping lemma](https://www.youtube.com/results?search_query=MIT+18.404+pumping+lemma+regular+languages+lecture)  
   _Resource type: YouTube search · English_
3. **Context-free grammars and pushdown automata.** [MIT 18.404 / Neso Academy — CFG and PDA lectures](https://www.youtube.com/results?search_query=Neso+Academy+context+free+grammar+pushdown+automata+theory+of+computation)  
   _Resource type: YouTube search · English_
4. **Turing machines.** [MIT 18.404 — Turing machine lectures](https://ocw.mit.edu/courses/18-404j-theory-of-computation-fall-2020/)  
   _Resource type: Course site with videos · English_
5. **Decidability and the halting problem.** [MIT 18.404 — decidability and halting problem](https://www.youtube.com/results?search_query=MIT+18.404+decidability+halting+problem+lecture)  
   _Resource type: YouTube search · English_
6. **P, NP and reductions.** [MIT 18.404 / MIT 6.046J complexity lectures](https://www.youtube.com/results?search_query=MIT+theory+of+computation+P+NP+reductions+lecture)  
   _Resource type: YouTube search · English_

#### Chapter 12. Computer Organization and Assembly

1. **Number representation and ISA concepts.** [UC Berkeley CS61C — Great Ideas in Computer Architecture](https://www.youtube.com/results?search_query=UC+Berkeley+CS61C+number+representation+instruction+set+architecture+lecture)  
   _Resource type: YouTube search · English_
2. **RISC-V assembly: arithmetic, memory and branches.** [Berkeley CS61C — RISC-V assembly lectures](https://www.youtube.com/results?search_query=Berkeley+CS61C+RISC-V+assembly+lecture+arithmetic+branches)  
   _Resource type: YouTube search · English_
3. **Functions and stack in assembly.** [Berkeley CS61C — procedures, stack and calling convention](https://www.youtube.com/results?search_query=CS61C+RISC-V+function+stack+calling+convention+lecture)  
   _Resource type: YouTube search · English_
4. **From C to assembly: inspect compiler output.** [Compiler Explorer / Computer Systems lectures with C-to-assembly examples](https://www.youtube.com/results?search_query=CMU+15-213+C+to+assembly+compiler+output+lecture)  
   _Resource type: YouTube search · English_
5. **Single-cycle CPU datapath and control.** [Nand2Tetris / Berkeley CS61C CPU datapath lecture](https://www.youtube.com/results?search_query=Berkeley+CS61C+single+cycle+CPU+datapath+control+lecture)  
   _Resource type: YouTube search · English_
6. **Pipelining and hazards.** [Berkeley CS61C — pipelining, stalls and hazards](https://www.youtube.com/results?search_query=Berkeley+CS61C+pipelining+hazards+lecture)  
   _Resource type: YouTube search · English_
7. **Caches and memory hierarchy.** [CMU 15-213 — cache memories / Berkeley CS61C memory hierarchy](https://www.youtube.com/results?search_query=CMU+15-213+cache+memories+lecture)  
   _Resource type: YouTube search · English_
8. **Virtual memory, interrupts and I/O; compare ISAs.** [Berkeley CS61C / CMU 15-213 — virtual memory and I/O](https://www.youtube.com/results?search_query=CS61C+virtual+memory+interrupts+IO+RISC-V+ARM+x86+lecture)  
   _Resource type: YouTube search · English_

#### Chapter 13. Operating Systems

1. **Processes, system calls and context switches.** [MIT 6.S081 Operating System Engineering — lectures](https://www.youtube.com/results?search_query=MIT+6.S081+operating+system+engineering+processes+system+calls+lecture)  
   _Resource type: YouTube search · English_
2. **Scheduling: FIFO, SJF, round robin and MLFQ.** [OSTEP — CPU scheduling lecture series](https://www.youtube.com/results?search_query=OSTEP+CPU+scheduling+FIFO+SJF+round+robin+MLFQ+lecture+Remzi)  
   _Resource type: YouTube search · English_
3. **Address spaces, paging, TLBs and swapping.** [OSTEP / MIT 6.S081 — virtual memory lectures](https://www.youtube.com/results?search_query=MIT+6.S081+virtual+memory+paging+TLB+lecture)  
   _Resource type: YouTube search · English_
4. **Threads, locks, condition variables and deadlock.** [OSTEP — concurrency and synchronization lectures](https://www.youtube.com/results?search_query=OSTEP+concurrency+locks+condition+variables+deadlock+lecture)  
   _Resource type: YouTube search · English_
5. **Disks, SSDs, I/O, file systems and journaling.** [OSTEP — persistence and file-system lectures](https://www.youtube.com/results?search_query=OSTEP+file+systems+journaling+SSD+disk+lecture)  
   _Resource type: YouTube search · English_
6. **Linux as a case study.** [MIT 6.S081 / Linux kernel internals introductions](https://www.youtube.com/results?search_query=Linux+kernel+internals+processes+memory+filesystem+beginner+lecture)  
   _Resource type: YouTube search · English_
7. **Hands-on xv6 labs.** [MIT 6.S081 — xv6 lab walkthroughs and lecture sequence](https://pdos.csail.mit.edu/6.S081/)  
   _Resource type: Course site with lectures · English_

#### Chapter 14. Database Systems

1. **Relational model and ER design.** [CMU 15-445 — Intro to Database Systems lectures](https://www.youtube.com/results?search_query=CMU+15-445+database+systems+relational+model+data+modeling+lecture)  
   _Resource type: YouTube search · English_
2. **SQL: SELECT, JOIN, GROUP BY and window functions.** [freeCodeCamp — SQL/PostgreSQL full course](https://www.youtube.com/results?search_query=freeCodeCamp+SQL+full+course+JOIN+GROUP+BY+window+functions+PostgreSQL)  
   _Resource type: YouTube search · English_
3. **Normalization and schema design.** [CMU 15-445 — schema design and normalization](https://www.youtube.com/results?search_query=CMU+database+systems+normalization+schema+design+lecture)  
   _Resource type: YouTube search · English_
4. **Indexes and reading EXPLAIN query plans.** [CMU 15-445 — indexes, B-trees and query processing](https://www.youtube.com/results?search_query=CMU+15-445+B+tree+indexes+query+plan+EXPLAIN+lecture)  
   _Resource type: YouTube search · English_
5. **Transactions, ACID and isolation levels.** [CMU 15-445 — transaction processing and concurrency control](https://www.youtube.com/results?search_query=CMU+15-445+transactions+ACID+isolation+levels+lecture)  
   _Resource type: YouTube search · English_
6. **Storage engines and query execution.** [CMU 15-445 — query execution and storage engines](https://www.youtube.com/results?search_query=CMU+15-445+query+execution+storage+engines+lecture+Andy+Pavlo)  
   _Resource type: YouTube search · English_

#### Chapter 15. Systems Programming

1. **Unix process model: fork, exec and wait.** [Jacob Sorber — Unix systems programming in C](https://www.youtube.com/results?search_query=Jacob+Sorber+fork+exec+wait+Unix+systems+programming+C)  
   _Resource type: YouTube search · English_
2. **File descriptors, pipes and redirection.** [MIT Missing Semester shell tools; Jacob Sorber Unix pipes](https://www.youtube.com/results?search_query=Jacob+Sorber+file+descriptors+pipes+redirection+C+systems+programming)  
   _Resource type: YouTube search · English_
3. **Signals and error handling.** [Jacob Sorber — Unix signals and error handling](https://www.youtube.com/results?search_query=Jacob+Sorber+Unix+signals+C+programming+tutorial)  
   _Resource type: YouTube search · English_
4. **Sockets basics.** [Beej / Jacob Sorber — socket programming in C](https://www.youtube.com/results?search_query=Jacob+Sorber+socket+programming+in+C+client+server)  
   _Resource type: YouTube search · English_
5. **How malloc works and finding memory leaks.** [CMU 15-213 — malloc lab; Jacob Sorber memory allocation](https://www.youtube.com/results?search_query=CMU+15-213+malloc+memory+allocator+Valgrind+lecture)  
   _Resource type: YouTube search · English_
6. **Make and build systems.** [MIT Missing Semester — Build systems and dependency management](https://www.youtube.com/playlist?list=PLyzOVJj3bHQuloKGG59rS43e29ro7I57J)  
   _Resource type: Direct playlist · English_
7. **Debugging with gdb and Valgrind.** [Jacob Sorber / Missing Semester — gdb and debugging workflows](https://www.youtube.com/results?search_query=Jacob+Sorber+gdb+debugger+Valgrind+C+tutorial)  
   _Resource type: YouTube search · English_

### Year 3

#### Chapter 16. Compiler Design

1. **Scanning and lexing.** [Stanford CS143 Compiler Design lectures / Crafting Interpreters](https://www.youtube.com/results?search_query=Stanford+CS143+compiler+design+lexical+analysis+lexer+lecture)  
   _Resource type: YouTube search · English_
2. **Parsing, grammars and recursive descent.** [Crafting Interpreters — parsing / recursive-descent tutorial](https://www.youtube.com/results?search_query=Crafting+Interpreters+recursive+descent+parsing+lecture)  
   _Resource type: YouTube search · English_
3. **Syntax trees and a tree-walk interpreter.** [Crafting Interpreters — tree-walk interpreter walkthroughs](https://www.youtube.com/results?search_query=Crafting+Interpreters+AST+tree+walk+interpreter+tutorial)  
   _Resource type: YouTube search · English_
4. **Variables, scope, functions and closures.** [Crafting Interpreters — resolving and interpreting functions](https://www.youtube.com/results?search_query=Crafting+Interpreters+lexical+scope+closures+functions)  
   _Resource type: YouTube search · English_
5. **A bytecode virtual machine.** [Crafting Interpreters — bytecode VM](https://www.youtube.com/results?search_query=Crafting+Interpreters+bytecode+virtual+machine+tutorial)  
   _Resource type: YouTube search · English_
6. **Intermediate representation and optimization basics.** [Stanford CS143 / LLVM frontend and optimization lectures](https://www.youtube.com/results?search_query=LLVM+intermediate+representation+compiler+optimization+beginner+lecture)  
   _Resource type: YouTube search · English_
7. **Code generation with LLVM.** [LLVM — Kaleidoscope language tutorial walkthrough](https://www.youtube.com/results?search_query=LLVM+Kaleidoscope+code+generation+tutorial+video)  
   _Resource type: YouTube search · English_

#### Chapter 17. Cryptography and Security

1. **Hashing and password storage.** [Computerphile — hash functions; security engineering demonstrations](https://www.youtube.com/results?search_query=Computerphile+cryptographic+hash+functions+password+hashing)  
   _Resource type: YouTube search · English_
2. **Symmetric cryptography: AES and modes.** [Stanford / Dan Boneh — Cryptography I lectures](https://www.youtube.com/results?search_query=Dan+Boneh+Stanford+Cryptography+I+AES+symmetric+encryption+lecture)  
   _Resource type: YouTube search · English_
3. **Public-key crypto: RSA, ECC and key exchange.** [Stanford Cryptography I — public-key cryptography](https://www.youtube.com/results?search_query=Stanford+Dan+Boneh+public+key+cryptography+RSA+elliptic+curve+key+exchange+lecture)  
   _Resource type: YouTube search · English_
4. **Signatures, certificates and TLS.** [Computerphile / Cloudflare — digital signatures, certificates and TLS](https://www.youtube.com/results?search_query=Computerphile+digital+signatures+certificates+TLS+handshake+explained)  
   _Resource type: YouTube search · English_
5. **Passwords and authentication.** [Computerphile / OWASP — password storage and authentication security](https://www.youtube.com/results?search_query=OWASP+password+storage+authentication+security+tutorial+video)  
   _Resource type: YouTube search · English_
6. **Web vulnerabilities: SQL injection and XSS.** [PortSwigger Web Security Academy — SQL injection / XSS video walkthroughs](https://www.youtube.com/results?search_query=PortSwigger+Web+Security+Academy+SQL+injection+XSS+tutorial+video)  
   _Resource type: YouTube search · English_
7. **Threat modeling and secure design.** [OWASP / Google Security — threat modeling introduction](https://www.youtube.com/results?search_query=OWASP+threat+modeling+secure+design+tutorial)  
   _Resource type: YouTube search · English_
8. **CTF practice walkthroughs.** [picoCTF / LiveOverflow — beginner CTF walkthroughs](https://www.youtube.com/results?search_query=LiveOverflow+beginner+CTF+walkthrough+web+security)  
   _Resource type: YouTube search · English_

#### Chapter 18. Machine Learning

1. **ML workflow: data cleaning and train/validation/test splits.** [Google Machine Learning Crash Course — video modules](https://www.youtube.com/results?search_query=Google+Machine+Learning+Crash+Course+data+preparation+train+validation+test+video)  
   _Resource type: YouTube search · English_
2. **Linear and logistic regression.** [Stanford CS229 — Linear Regression and Gradient Descent (Lecture 2)](https://www.youtube.com/watch?v=4b4MUYve_U8)  
   _Resource type: Direct video · English_
3. **Gradient descent.** [Stanford CS229 — Linear Regression and Gradient Descent (Lecture 2)](https://www.youtube.com/watch?v=4b4MUYve_U8)  
   _Resource type: Direct video · English_
4. **Decision trees, random forests and boosting.** [StatQuest — decision trees, random forests and XGBoost](https://www.youtube.com/results?search_query=StatQuest+decision+trees+random+forests+XGBoost+machine+learning)  
   _Resource type: YouTube search · English_
5. **Precision, recall, ROC and cross-validation.** [StatQuest — confusion matrix, precision/recall, ROC and cross-validation](https://www.youtube.com/results?search_query=StatQuest+precision+recall+ROC+AUC+cross+validation)  
   _Resource type: YouTube search · English_
6. **Overfitting and regularization.** [StatQuest / Stanford CS229 — regularization and bias-variance](https://www.youtube.com/results?search_query=StatQuest+overfitting+regularization+bias+variance+machine+learning)  
   _Resource type: YouTube search · English_
7. **Unsupervised learning: k-means and PCA.** [StatQuest — k-means and PCA](https://www.youtube.com/results?search_query=StatQuest+k+means+clustering+PCA+explained)  
   _Resource type: YouTube search · English_
8. **End-to-end project on a real dataset.** [CampusX — 100 Days of Machine Learning (Hinglish); use a complete project episode](https://www.youtube.com/results?search_query=CampusX+end+to+end+machine+learning+project+preprocessing+model+evaluation)  
   _Resource type: YouTube search · Hinglish_

#### Chapter 19. Computer Networks

1. **Layered models and how HTTP rides on the network.** [Sheryians Cyber School — Complete Networking Tutorial 2026](https://www.youtube.com/watch?v=FNj8jMTOfnA)  
   _Resource type: Direct video · Hinglish/English mix_
2. **DNS resolution and caching.** [Computer Networking: A Top-Down Approach / Practical Networking DNS videos](https://www.youtube.com/results?search_query=Practical+Networking+DNS+explained+recursive+iterative+resolution+caching)  
   _Resource type: YouTube search · English_
3. **TCP, UDP, reliability, flow and congestion control.** [Computer Networking: A Top-Down Approach lecture videos](https://www.youtube.com/results?search_query=Kurose+Ross+TCP+UDP+reliability+flow+control+congestion+control+lecture)  
   _Resource type: YouTube search · English_
4. **IP addressing, routing and NAT.** [Sheryians Cyber School networking tutorial; focus on IP and routing chapters](https://www.youtube.com/watch?v=FNj8jMTOfnA)  
   _Resource type: Direct video · Hinglish/English mix_
5. **Ethernet, ARP and Wi-Fi.** [Practical Networking — ARP, Ethernet and Wi-Fi explainers](https://www.youtube.com/results?search_query=Practical+Networking+Ethernet+ARP+WiFi+explained)  
   _Resource type: YouTube search · English_
6. **TLS and HTTPS security on the wire.** [Cloudflare / Computerphile — HTTPS and TLS handshake](https://www.youtube.com/results?search_query=Cloudflare+TLS+handshake+HTTPS+explained+video)  
   _Resource type: YouTube search · English_
7. **Socket programming and Wireshark lab.** [Computer Networking socket programming / Wireshark packet analysis](https://www.youtube.com/results?search_query=Wireshark+HTTP+TCP+DNS+packet+analysis+beginner+lab+computer+networking)  
   _Resource type: YouTube search · English_

#### Chapter 20. Distributed Systems

1. **Time, clocks and Lamport clocks.** [MIT 6.824 — Distributed Systems lecture playlist (2020 recordings)](https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB)  
   _Resource type: Direct playlist · English_
2. **Replication, consistency, CAP and linearizability.** [MIT 6.824 — replication and consistency lectures](https://www.youtube.com/playlist?list=PLrw6a1wE39_tb2fErI4-WkMbsvGQk9_UB)  
   _Resource type: Direct playlist · English_
3. **Consensus: Paxos and Raft.** [MIT 6.824 — Go, Threads and Raft / Fault Tolerance: Raft](https://www.youtube.com/results?search_query=MIT+6.824+Raft+consensus+lecture+distributed+systems)  
   _Resource type: YouTube search · English_
4. **Transactions and two-phase commit.** [MIT 6.824 — distributed transactions and consistency](https://www.youtube.com/results?search_query=MIT+6.824+distributed+transactions+two+phase+commit+lecture)  
   _Resource type: YouTube search · English_
5. **Partitioning, MapReduce and distributed data.** [MIT 6.824 — MapReduce / GFS lectures](https://www.youtube.com/results?search_query=MIT+6.824+MapReduce+Google+File+System+GFS+lecture)  
   _Resource type: YouTube search · English_
6. **Fault tolerance and testing failures.** [MIT 6.824 — fault tolerance; Martin Kleppmann distributed systems talks](https://www.youtube.com/results?search_query=MIT+6.824+fault+tolerance+distributed+systems+testing+failures)  
   _Resource type: YouTube search · English_

#### Chapter 21. Software Engineering

1. **Requirements and user stories.** [Software Engineering at Google / user stories and requirements lecture](https://www.youtube.com/results?search_query=software+engineering+requirements+user+stories+lecture+university)  
   _Resource type: YouTube search · English_
2. **Design sketches, diagrams and architecture notes.** [MIT Software Construction / software architecture design lecture](https://www.youtube.com/results?search_query=MIT+software+construction+design+diagrams+architecture+notes+lecture)  
   _Resource type: YouTube search · English_
3. **Clean code and refactoring.** [Uncle Bob — Clean Code lectures; use as principles, not immutable rules](https://www.youtube.com/results?search_query=Uncle+Bob+Clean+Code+lecture+refactoring)  
   _Resource type: YouTube search · English_
4. **Testing pyramid: unit, integration and end-to-end.** [Google Testing Blog / Playwright Jest testing strategy demos](https://www.youtube.com/results?search_query=unit+integration+end+to+end+testing+pyramid+software+engineering+tutorial)  
   _Resource type: YouTube search · English_
5. **Code review and Git workflow.** [Google Engineering Practices — code review videos / GitHub pull request review](https://www.youtube.com/results?search_query=Google+engineering+practices+code+review+pull+request+tutorial+video)  
   _Resource type: YouTube search · English_
6. **CI/CD basics.** [TechWorld with Nana — GitHub Actions Tutorial](https://www.youtube.com/watch?v=R8_veQiYBjI)  
   _Resource type: Direct video · English_
7. **Estimation, documentation and teamwork.** [Google engineering management / software estimation and team communication](https://www.youtube.com/results?search_query=software+engineering+estimation+documentation+team+collaboration+lecture)  
   _Resource type: YouTube search · English_

#### Chapter 22. Parallel and Concurrent Programming

1. **Threads versus processes and race conditions.** [OSTEP concurrency / CMU 15-418 lectures](https://www.youtube.com/results?search_query=OSTEP+threads+processes+race+conditions+concurrency+lecture)  
   _Resource type: YouTube search · English_
2. **Locks, semaphores and condition variables.** [The Little Book of Semaphores / OSTEP concurrency lectures](https://www.youtube.com/results?search_query=OSTEP+locks+semaphores+condition+variables+lecture)  
   _Resource type: YouTube search · English_
3. **Producer-consumer and dining philosophers.** [Concurrency tutorials with visual walkthroughs and examples](https://www.youtube.com/results?search_query=producer+consumer+dining+philosophers+problem+semaphore+lecture)  
   _Resource type: YouTube search · English_
4. **Async models: Node event loop and Python asyncio.** [Fireship / official Node.js — event loop; Python asyncio tutorials](https://www.youtube.com/results?search_query=Node.js+event+loop+Python+asyncio+concurrency+explained+video)  
   _Resource type: YouTube search · English_
5. **Memory models and atomics.** [Rust Atomics and Locks / C++ atomics lectures](https://www.youtube.com/results?search_query=C%2B%2B+memory+model+atomics+acquire+release+concurrency+lecture)  
   _Resource type: YouTube search · English_
6. **OpenMP and GPU parallelism basics.** [CMU 15-418 — Parallel Computer Architecture and Programming](https://www.youtube.com/results?search_query=CMU+15-418+OpenMP+GPU+parallel+programming+lecture)  
   _Resource type: YouTube search · English_
7. **Speedup and Amdahl’s law.** [CMU 15-418 / Neso Academy — Amdahl’s law and parallel performance](https://www.youtube.com/results?search_query=CMU+15-418+Amdahl+law+speedup+parallel+performance+lecture)  
   _Resource type: YouTube search · English_

### Year 4

#### Chapter 23. Deep Learning and Generative AI

1. **Neural networks from scratch, autograd and backpropagation.** [Andrej Karpathy — Neural Networks: Zero to Hero / micrograd](https://www.youtube.com/watch?v=VMj-3S1tku0)  
   _Resource type: Direct video · English_
2. **PyTorch tensors and training loops.** [PyTorch beginner tutorials / freeCodeCamp full PyTorch course](https://www.youtube.com/results?search_query=PyTorch+official+beginner+tutorial+tensors+training+loop+neural+network)  
   _Resource type: YouTube search · English_
3. **CNNs for images.** [Stanford CS231n — CNNs for Visual Recognition](https://www.youtube.com/results?search_query=Stanford+CS231n+convolutional+neural+networks+lecture)  
   _Resource type: YouTube search · English_
4. **Sequence models and attention.** [3Blue1Brown — Attention in transformers; Stanford NLP attention lectures](https://www.youtube.com/results?search_query=3Blue1Brown+attention+transformers+sequence+models)  
   _Resource type: YouTube search · English_
5. **Transformers and GPT.** [Andrej Karpathy — Let’s build GPT from scratch](https://www.youtube.com/watch?v=kCc8FmEb1nY)  
   _Resource type: Direct video · English_
6. **Pretraining versus fine-tuning and LoRA.** [Hugging Face / DeepLearning.AI — fine-tuning LLMs and LoRA video lessons](https://www.youtube.com/results?search_query=Hugging+Face+LoRA+fine+tuning+large+language+models+tutorial+video)  
   _Resource type: YouTube search · English_
7. **Diffusion models overview.** [Computerphile / Hugging Face — diffusion models explained](https://www.youtube.com/results?search_query=diffusion+models+explained+Hugging+Face+computerphile+video)  
   _Resource type: YouTube search · English_
8. **Evaluation and scaling ideas.** [Andrej Karpathy / DeepLearning.AI — LLM evaluation and training scaling](https://www.youtube.com/results?search_query=LLM+evaluation+scaling+laws+deep+learning+lecture+video)  
   _Resource type: YouTube search · English_

#### Chapter 24. Computer Vision and Reinforcement Learning

1. **Image basics and OpenCV.** [freeCodeCamp / OpenCV — image processing for beginners](https://www.youtube.com/results?search_query=OpenCV+Python+image+processing+beginner+full+course+video)  
   _Resource type: YouTube search · English_
2. **CNN image classifiers.** [Stanford CS231n — convolutional neural networks](https://www.youtube.com/results?search_query=Stanford+CS231n+CNN+image+classification+lecture)  
   _Resource type: YouTube search · English_
3. **Detection and segmentation: YOLO and U-Net.** [Ultralytics — YOLO object detection; segmentation lectures](https://www.youtube.com/results?search_query=Ultralytics+YOLO+object+detection+segmentation+tutorial)  
   _Resource type: YouTube search · English_
4. **Markov decision processes and dynamic programming.** [David Silver — Reinforcement Learning lectures](https://www.youtube.com/results?search_query=David+Silver+reinforcement+learning+lecture+Markov+decision+processes)  
   _Resource type: YouTube search · English_
5. **Q-learning and DQN.** [Hugging Face Deep RL / David Silver — Q-learning lectures](https://www.youtube.com/results?search_query=David+Silver+reinforcement+learning+Q+learning+DQN+lecture)  
   _Resource type: YouTube search · English_
6. **Policy gradients and PPO.** [Hugging Face Deep RL — policy gradient and PPO lessons](https://www.youtube.com/results?search_query=Hugging+Face+Deep+Reinforcement+Learning+course+PPO+policy+gradient+video)  
   _Resource type: YouTube search · English_
7. **Build a game-playing or robotics-style agent.** [Gymnasium / freeCodeCamp — train a CartPole reinforcement-learning agent](https://www.youtube.com/results?search_query=Gymnasium+CartPole+reinforcement+learning+DQN+project+tutorial)  
   _Resource type: YouTube search · English_

#### Chapter 25. Advanced Algorithms and Complexity

1. **Randomized algorithms.** [MIT 6.046J — randomization lectures](https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/resources/lecture-videos/)  
   _Resource type: Course site with videos · English_
2. **Approximation algorithms.** [MIT 6.046J — approximation algorithms lecture](https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/resources/lecture-videos/)  
   _Resource type: Course site with videos · English_
3. **Linear programming and duality.** [MIT 6.046J — Linear Programming, LP, reductions and Simplex](https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/resources/lecture-videos/)  
   _Resource type: Course site with videos · English_
4. **Online algorithms.** [MIT / university algorithms lecture on online and competitive analysis](https://www.youtube.com/results?search_query=online+algorithms+competitive+analysis+university+lecture+computer+science)  
   _Resource type: YouTube search · English_
5. **Union-find and segment trees.** [MIT 6.046J / William Fiset — advanced data structures](https://www.youtube.com/results?search_query=William+Fiset+disjoint+set+union+segment+tree+tutorial)  
   _Resource type: YouTube search · English_
6. **Complexity beyond NP and parameterized complexity.** [MIT 6.046J — fixed-parameter algorithms and complexity](https://ocw.mit.edu/courses/6-046j-design-and-analysis-of-algorithms-spring-2015/resources/lecture-videos/)  
   _Resource type: Course site with videos · English_

#### Chapter 26. Cloud and DevOps

1. **Docker and Docker Compose.** [TechWorld with Nana — Docker Tutorial for Beginners (full course)](https://www.youtube.com/watch?v=3c-iBn73dDE)  
   _Resource type: Direct video · English_
2. **CI/CD with GitHub Actions.** [TechWorld with Nana — GitHub Actions Tutorial](https://www.youtube.com/watch?v=R8_veQiYBjI)  
   _Resource type: Direct video · English_
3. **AWS: EC2, S3, IAM and VPC.** [freeCodeCamp — AWS Cloud Practitioner / hands-on AWS course](https://www.youtube.com/results?search_query=freeCodeCamp+AWS+EC2+S3+IAM+VPC+full+course+video)  
   _Resource type: YouTube search · English_
4. **Load balancers and autoscaling.** [TechWorld with Nana / AWS — load balancing and autoscaling explained](https://www.youtube.com/results?search_query=AWS+load+balancer+autoscaling+explained+hands+on+tutorial+video)  
   _Resource type: YouTube search · English_
5. **Kubernetes: pods, deployments and services.** [TechWorld with Nana — Kubernetes beginner tutorial; Hinglish alternative from Kunal Kushwaha](https://www.youtube.com/results?search_query=TechWorld+with+Nana+Kubernetes+tutorial+pods+deployments+services)  
   _Resource type: YouTube search · English_
6. **Infrastructure as code with Terraform.** [TechWorld with Nana / freeCodeCamp — Terraform beginner course](https://www.youtube.com/results?search_query=TechWorld+with+Nana+Terraform+beginner+tutorial+infrastructure+as+code)  
   _Resource type: YouTube search · English_
7. **Observability: logs, metrics, tracing, Prometheus and Grafana.** [Grafana / Prometheus — monitoring stack walkthroughs](https://www.youtube.com/results?search_query=Prometheus+Grafana+logs+metrics+tracing+observability+tutorial)  
   _Resource type: YouTube search · English_
8. **SRE: SLOs and incident response.** [Google SRE / Google Cloud Tech — SLOs and incident management talks](https://www.youtube.com/results?search_query=Google+SRE+SLO+error+budget+incident+response+talk)  
   _Resource type: YouTube search · English_

#### Chapter 27. Computer Graphics

1. **Transforms and linear algebra for graphics.** [Cem Yuksel — Interactive Computer Graphics lectures](https://www.youtube.com/results?search_query=Cem+Yuksel+interactive+computer+graphics+transformations+lecture)  
   _Resource type: YouTube search · English_
2. **Rasterization pipeline.** [Cem Yuksel / LearnOpenGL — graphics pipeline explanation](https://www.youtube.com/results?search_query=computer+graphics+rasterization+pipeline+vertex+fragment+shader+lecture)  
   _Resource type: YouTube search · English_
3. **Lighting and shading: Phong and PBR intro.** [LearnOpenGL / Sebastian Lague — lighting and shading tutorials](https://www.youtube.com/results?search_query=LearnOpenGL+Phong+lighting+physically+based+rendering+PBR+tutorial+video)  
   _Resource type: YouTube search · English_
4. **Textures and cameras.** [LearnOpenGL — textures, coordinate systems and camera](https://www.youtube.com/results?search_query=LearnOpenGL+textures+camera+transformations+tutorial+video)  
   _Resource type: YouTube search · English_
5. **Shaders in GLSL.** [The Art of Code / Book of Shaders — GLSL shader tutorials](https://www.youtube.com/results?search_query=The+Art+of+Code+GLSL+shader+tutorial+beginner)  
   _Resource type: YouTube search · English_
6. **Ray tracing.** [Peter Shirley / The Cherno — ray tracing tutorial series](https://www.youtube.com/results?search_query=The+Cherno+ray+tracing+series+tutorial)  
   _Resource type: YouTube search · English_
7. **Real-time 3D with three.js.** [Three.js / Fireship — build 3D web experiences](https://www.youtube.com/results?search_query=three.js+beginner+full+course+3D+web+graphics+tutorial)  
   _Resource type: YouTube search · English_

#### Chapter 28. Embedded and Real-Time Systems

1. **Electronics basics: voltage, current and GPIO.** [Paul McWhorter / Digi-Key — Arduino electronics fundamentals](https://www.youtube.com/results?search_query=Digi-Key+Arduino+electronics+basics+voltage+current+GPIO+tutorial)  
   _Resource type: YouTube search · English_
2. **Arduino or ESP32 programming and timers.** [DroneBot Workshop / freeCodeCamp — ESP32 and Arduino beginner projects](https://www.youtube.com/results?search_query=ESP32+Arduino+beginner+programming+timers+tutorial)  
   _Resource type: YouTube search · English_
3. **Interrupts and I2C, SPI and UART buses.** [Phil’s Lab / Digi-Key — interrupts and serial buses for embedded systems](https://www.youtube.com/results?search_query=Phil%E2%80%99s+Lab+embedded+I2C+SPI+UART+interrupts+tutorial)  
   _Resource type: YouTube search · English_
4. **Sensors and actuators.** [DroneBot Workshop — sensors, actuators and microcontroller projects](https://www.youtube.com/results?search_query=DroneBot+Workshop+Arduino+sensors+actuators+tutorial)  
   _Resource type: YouTube search · English_
5. **RTOS: tasks, queues and mutexes.** [Digi-Key — Introduction to RTOS with Shawn Hymel](https://www.youtube.com/results?search_query=Digi-Key+Introduction+to+RTOS+Shawn+Hymel+FreeRTOS+tasks+queues+mutexes)  
   _Resource type: YouTube search · English_
6. **Debugging and low-power design.** [Memfault / Phil’s Lab — embedded debugging and power optimization](https://www.youtube.com/results?search_query=Memfault+embedded+debugging+low+power+firmware+tutorial)  
   _Resource type: YouTube search · English_
7. **IoT: MQTT and cloud dashboard.** [HiveMQ / Random Nerd Tutorials — MQTT with ESP32](https://www.youtube.com/results?search_query=ESP32+MQTT+IoT+dashboard+tutorial+video)  
   _Resource type: YouTube search · English_

#### Chapter 29. HCI and Product Thinking

1. **Usability heuristics.** [Nielsen Norman Group — usability heuristics and UX research talks](https://www.youtube.com/results?search_query=Nielsen+Norman+Group+usability+heuristics+10+usability+heuristics+video)  
   _Resource type: YouTube search · English_
2. **User research and interviews.** [Google Ventures / IDEO — user interview and design research videos](https://www.youtube.com/results?search_query=Google+Ventures+user+research+customer+interviews+product+design+sprint+video)  
   _Resource type: YouTube search · English_
3. **Information architecture and user flows.** [Figma / UX design educators — user flows and information architecture](https://www.youtube.com/results?search_query=Figma+information+architecture+user+flows+UX+design+tutorial)  
   _Resource type: YouTube search · English_
4. **Typography, colour and spacing.** [Sheryians Creative School / Figma — UI visual design fundamentals](https://www.youtube.com/results?search_query=Sheryians+Creative+School+UI+design+typography+color+spacing)  
   _Resource type: YouTube search · Hindi/Hinglish_
5. **Prototyping in Figma.** [Figma official — beginner-to-prototyping tutorials](https://www.youtube.com/results?search_query=Figma+official+prototyping+beginner+tutorial+components+auto+layout)  
   _Resource type: YouTube search · English_
6. **Accessibility and WCAG.** [W3C / Google Chrome Developers — accessibility for web interfaces](https://www.youtube.com/results?search_query=Google+Chrome+Developers+web+accessibility+WCAG+keyboard+contrast+tutorial)  
   _Resource type: YouTube search · English_
7. **Usability testing and iteration.** [Nielsen Norman Group — usability testing sessions and findings](https://www.youtube.com/results?search_query=Nielsen+Norman+Group+usability+testing+how+to+run+user+tests+video)  
   _Resource type: YouTube search · English_

#### Chapter 30. Capstone and Research

1. **Choose a meaningful problem and interview users.** [Y Combinator — Startup School, idea validation and talking to users](https://www.youtube.com/results?search_query=Y+Combinator+how+to+talk+to+users+validate+startup+idea+video)  
   _Resource type: YouTube search · English_
2. **Scope an MVP.** [Y Combinator — how to build an MVP and focus on core value](https://www.youtube.com/results?search_query=Y+Combinator+build+MVP+minimum+viable+product+startup+school)  
   _Resource type: YouTube search · English_
3. **Build in weekly releases.** [GitHub / Agile project planning — small releases and issue tracking](https://www.youtube.com/results?search_query=GitHub+project+planning+issues+milestones+iterative+weekly+releases+tutorial)  
   _Resource type: YouTube search · English_
4. **Launch and collect user feedback.** [Y Combinator — launch early and get user feedback](https://www.youtube.com/results?search_query=Y+Combinator+launch+product+get+user+feedback+startup+school)  
   _Resource type: YouTube search · English_
5. **Instrument, measure and iterate.** [Google Analytics / product analytics — funnels and experiment basics](https://www.youtube.com/results?search_query=product+analytics+funnels+retention+experiments+beginner+video+tutorial)  
   _Resource type: YouTube search · English_
6. **Write a postmortem or research-paper summary.** [Stanford / research lab — how to read and present a research paper](https://www.youtube.com/results?search_query=how+to+read+a+computer+science+research+paper+presentation+tutorial+university)  
   _Resource type: YouTube search · English_
7. **Contribute upstream to open source.** [GitHub — open-source contribution and first pull request walkthroughs](https://www.youtube.com/results?search_query=GitHub+open+source+contribution+first+pull+request+tutorial+beginner)  
   _Resource type: YouTube search · English_

### Industry layer

#### Chapter 31. Full-Stack Web (HTML to Next.js)

1. **HTML semantics, forms and accessibility.** [Kevin Powell / MDN learning videos — semantic HTML and forms; Sheryians Frontend Level 1 is a broad practical introduction](https://www.youtube.com/results?search_query=semantic+HTML+forms+accessibility+web+development+tutorial+Kevin+Powell)  
   _Resource type: YouTube search · English; Sheryians intro: https://www.youtube.com/watch?v=9cmy6AK3IBA_
2. **CSS box model, Flexbox, Grid and responsive design.** [Kevin Powell — CSS layout; Sheryians Frontend Level 1 is a practical starter with box model, positioning and Flexbox](https://www.youtube.com/results?search_query=Kevin+Powell+CSS+box+model+flexbox+grid+responsive+design+full+course)  
   _Resource type: YouTube search · English; Sheryians intro: https://www.youtube.com/watch?v=9cmy6AK3IBA_
3. **JavaScript types, functions, arrays, objects and closures.** [freeCodeCamp — JavaScript full course; Chai aur Code for Hinglish](https://www.youtube.com/results?search_query=freeCodeCamp+JavaScript+full+course+closures+arrays+objects+functions)  
   _Resource type: YouTube search · English_
4. **DOM, events and three interactive pages.** [The Net Ninja / Traversy Media — DOM manipulation projects](https://www.youtube.com/results?search_query=Traversy+Media+JavaScript+DOM+events+projects+tutorial)  
   _Resource type: YouTube search · English_
5. **Async JavaScript, fetch, modules and TypeScript basics.** [Fireship / freeCodeCamp — async JavaScript and TypeScript](https://www.youtube.com/results?search_query=JavaScript+async+await+fetch+modules+TypeScript+beginner+full+course)  
   _Resource type: YouTube search · English_
6. **React components, state, hooks and effects.** [Sheryians Coding School — ReactJS Full Course (verified current candidate)](https://www.youtube.com/watch?v=3LRZRSIh_KE)  
   _Resource type: Direct video · Hinglish/English mix_
7. **Next.js routing, rendering modes and server actions.** [Vercel / Next.js Conf — official Next.js App Router and server actions videos](https://www.youtube.com/results?search_query=Vercel+official+Next.js+App+Router+server+actions+rendering+tutorial)  
   _Resource type: YouTube search · English_
8. **Performance and accessibility checks.** [Google Chrome Developers — Core Web Vitals and accessible UI](https://www.youtube.com/results?search_query=Google+Chrome+Developers+Core+Web+Vitals+web+accessibility+performance+tutorial)  
   _Resource type: YouTube search · English_

#### Chapter 32. Backend and APIs

1. **Node modules, event loop and HTTP server.** [freeCodeCamp — Node.js full course / Node.js event-loop walkthrough](https://www.youtube.com/results?search_query=freeCodeCamp+Node.js+full+course+event+loop+HTTP+server)  
   _Resource type: YouTube search · English_
2. **Express routing, middleware and REST design.** [Traversy Media / freeCodeCamp — Express REST API full course](https://www.youtube.com/results?search_query=freeCodeCamp+Express+REST+API+middleware+routing+full+course)  
   _Resource type: YouTube search · English_
3. **Password hashing, sessions, JWT and OAuth basics.** [Web Dev Simplified / OWASP — authentication explained and implemented](https://www.youtube.com/results?search_query=Web+Dev+Simplified+authentication+sessions+JWT+OAuth+password+hashing+tutorial)  
   _Resource type: YouTube search · English_
4. **Validation, error handling and logging.** [Backend API production patterns — validation, errors and structured logs](https://www.youtube.com/results?search_query=Node+Express+API+validation+error+handling+logging+best+practices+tutorial)  
   _Resource type: YouTube search · English_
5. **Redis caching and rate limiting.** [Redis / Hussein Nasser — caching, rate limiting and backend performance](https://www.youtube.com/results?search_query=Redis+caching+rate+limiting+Node.js+backend+tutorial+video)  
   _Resource type: YouTube search · English_
6. **WebSockets and real-time features.** [Traversy Media / freeCodeCamp — WebSockets and Socket.IO chat app](https://www.youtube.com/results?search_query=WebSockets+Socket.IO+real+time+chat+application+Node.js+tutorial)  
   _Resource type: YouTube search · English_
7. **Jest, Supertest and API testing.** [freeCodeCamp — API testing with Jest and Supertest](https://www.youtube.com/results?search_query=Jest+Supertest+Node+Express+API+testing+tutorial+video)  
   _Resource type: YouTube search · English_
8. **Environment variables, configuration and deployment.** [Render / Railway / freeCodeCamp — deploy Node.js API securely](https://www.youtube.com/results?search_query=deploy+Node.js+Express+API+environment+variables+production+tutorial)  
   _Resource type: YouTube search · English_

#### Chapter 33. Generative AI Engineering

1. **Tokens, context windows and embeddings.** [Andrej Karpathy — Intro to Large Language Models](https://www.youtube.com/results?search_query=Andrej+Karpathy+Intro+to+Large+Language+Models+tokens+context+embeddings)  
   _Resource type: YouTube search · English_
2. **LLM API calls and prompt engineering.** [DeepLearning.AI / Anthropic — prompt engineering and API application tutorials](https://www.youtube.com/results?search_query=DeepLearning.AI+LLM+API+prompt+engineering+tutorial+video)  
   _Resource type: YouTube search · English_
3. **Structured output and tool calling.** [Anthropic / OpenAI developer channels — structured outputs and tool use](https://www.youtube.com/results?search_query=Anthropic+tool+use+structured+outputs+LLM+API+official+tutorial)  
   _Resource type: YouTube search · English_
4. **Streaming, retries and error handling.** [AI SDK / backend engineering — streaming LLM responses and retry patterns](https://www.youtube.com/results?search_query=LLM+API+streaming+retries+error+handling+tutorial+JavaScript)  
   _Resource type: YouTube search · English_
5. **Embeddings, vector databases and RAG.** [DeepLearning.AI — Retrieval-Augmented Generation tutorials; code-along RAG](https://www.youtube.com/results?search_query=DeepLearning.AI+RAG+embeddings+vector+database+tutorial)  
   _Resource type: YouTube search · English_
6. **Evaluating AI systems.** [DeepLearning.AI / Eugene Yan — LLM evaluation and eval-driven development](https://www.youtube.com/results?search_query=LLM+evaluation+evals+RAG+retrieval+augmented+generation+tutorial+video)  
   _Resource type: YouTube search · English_
7. **Agents and multi-agent patterns.** [Anthropic / LangChain — agents, tools and orchestration tutorials](https://www.youtube.com/results?search_query=Anthropic+agents+tool+use+AI+agent+engineering+tutorial)  
   _Resource type: YouTube search · English_
8. **Cost, latency and safety.** [AI engineering — LLM cost latency prompt injection and guardrails](https://www.youtube.com/results?search_query=LLM+application+cost+latency+safety+prompt+injection+guardrails+tutorial)  
   _Resource type: YouTube search · English_

#### Chapter 34. System Design (LLD and HLD)

1. **Requirements and capacity estimation.** [Gaurav Sen — system design fundamentals and estimation](https://www.youtube.com/results?search_query=Gaurav+Sen+system+design+capacity+estimation+requirements)  
   _Resource type: YouTube search · English/Hinglish_
2. **APIs and data modeling.** [ByteByteGo / Gaurav Sen — API design and data modeling](https://www.youtube.com/results?search_query=ByteByteGo+API+design+data+modeling+system+design)  
   _Resource type: YouTube search · English_
3. **Caching, CDNs and load balancing.** [ByteByteGo — caching, CDN and load balancer explainers](https://www.youtube.com/results?search_query=ByteByteGo+caching+CDN+load+balancer+system+design)  
   _Resource type: YouTube search · English_
4. **Database scaling: replication and sharding.** [Gaurav Sen / ByteByteGo — replication, partitioning and sharding](https://www.youtube.com/results?search_query=ByteByteGo+database+replication+sharding+partitioning+system+design)  
   _Resource type: YouTube search · English_
5. **Queues and asynchronous work.** [ByteByteGo / Hussein Nasser — message queues and async processing](https://www.youtube.com/results?search_query=ByteByteGo+message+queues+asynchronous+processing+system+design)  
   _Resource type: YouTube search · English_
6. **Consistency and reliability trade-offs.** [ByteByteGo / MIT distributed systems explainers — consistency and CAP](https://www.youtube.com/results?search_query=distributed+systems+consistency+CAP+reliability+tradeoffs+ByteByteGo)  
   _Resource type: YouTube search · English_
7. **LLD: OOP, design patterns and machine coding.** [Gaurav Sen / SDE Skills — low-level design and machine-coding rounds](https://www.youtube.com/results?search_query=low+level+design+LLD+OOP+design+patterns+machine+coding+interview+tutorial)  
   _Resource type: YouTube search · English/Hinglish_

#### Chapter 35. Interview Prep and DSA Practice

1. **Two pointers, sliding window, BFS/DFS and DP patterns.** [NeetCode — NeetCode 150 explanations; Striver A2Z for Hinglish](https://www.youtube.com/results?search_query=NeetCode+150+two+pointers+sliding+window+BFS+DFS+dynamic+programming)  
   _Resource type: YouTube search · English_
2. **Mock coding rounds.** [NeetCode / Google interview practice — full mock coding interviews](https://www.youtube.com/results?search_query=NeetCode+mock+coding+interview+full+walkthrough)  
   _Resource type: YouTube search · English_
3. **System-design interview round.** [ByteByteGo / Gaurav Sen — mock system design interviews](https://www.youtube.com/results?search_query=ByteByteGo+system+design+mock+interview+example)  
   _Resource type: YouTube search · English_
4. **Behavioural stories.** [Exponent / Google recruiters — STAR method and behavioural interviews](https://www.youtube.com/results?search_query=software+engineering+behavioural+interview+STAR+method+examples)  
   _Resource type: YouTube search · English_
5. **Resume and portfolio.** [Tech Interview Handbook / experienced engineering reviewers — resume and portfolio](https://www.youtube.com/results?search_query=software+engineer+resume+portfolio+review+projects+interview+tips)  
   _Resource type: YouTube search · English_

#### Chapter 36. Professional Skills

1. **Technical writing.** [Google Technical Writing / Google Developers — technical writing videos](https://www.youtube.com/results?search_query=Google+Developers+technical+writing+course+video+clear+technical+documentation)  
   _Resource type: YouTube search · English_
2. **Ethics and responsible AI.** [ACM / Stanford HAI — responsible AI and computing ethics talks](https://www.youtube.com/results?search_query=Stanford+HAI+responsible+AI+ethics+lecture+computer+science)  
   _Resource type: YouTube search · English_
3. **Estimating and planning.** [Engineering management talks — estimation, planning and delivery](https://www.youtube.com/results?search_query=software+engineering+estimation+planning+project+delivery+engineering+talk)  
   _Resource type: YouTube search · English_
4. **Team communication and collaboration.** [Google Engineering / Atlassian — engineering team communication and feedback](https://www.youtube.com/results?search_query=engineering+team+communication+code+review+feedback+software+development+talk)  
   _Resource type: YouTube search · English_
5. **Open-source etiquette and contribution workflows.** [GitHub — open source contribution and pull-request workflow](https://www.youtube.com/results?search_query=GitHub+open+source+contribution+etiquette+pull+request+maintainer+tutorial)  
   _Resource type: YouTube search · English_
6. **Learning in public.** [Developer creator talks — building in public, writing and sharing projects](https://www.youtube.com/results?search_query=developer+learning+in+public+technical+blogging+portfolio+projects+talk)  
   _Resource type: YouTube search · English_

## Implementation recommendation for the site

1. Replace each chapter’s broad resource searches with a `videoTutorials` array whose entries have `subtopic`, `title`, `url`, `language`, `format` (`video`, `playlist`, or `course-video-page`), and optional `note`/`duration` fields.
2. Do not store query links permanently for any course where a stable direct video/playlist can be selected. Use the search links here to identify the exact replacement and record a direct `youtube.com/watch?v=...` or `youtube.com/playlist?list=...` URL.
3. Keep one **primary** video per learning step, optionally one **Hindi/Hinglish alternative**, and avoid overwhelming each chapter with several competing long courses.
4. Group continuous lecture series by chapter and list the exact lecture(s) or timestamps that correspond to each subpart; do not attach an entire multi-hour course to a tiny subtopic without specifying where to start.
5. Track review status in source data, e.g. `reviewStatus: "verified" | "needs-review"`; do not publish an unreviewed recommendation as editorially vetted.

## Notes on coverage and confidence

- This map uses the roadmap’s current published subtopic sequence. If a subpart in `js/data.js` changes, update the corresponding row here as well.
- Direct URLs are included when a stable and relevant video/course playlist was confirmed during the research pass. Search links are purposefully used for several specialised subparts because direct video IDs and best-fit individual lectures vary by year and edition.
- For high-level subjects such as Compiler Design, Distributed Systems, Security, Deep Learning and AI Engineering, an academic lecture sequence is usually a better main path than a single “one-shot” video. For quick tools, web basics and project workflows, focused practical videos often work better.