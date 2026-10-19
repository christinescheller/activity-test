
const ASSIGNMENTS = [
  {
    id: "cert-quiz",
    title: "Certification platform practice quiz",
    context: `
      <p>Students take a quiz on their certification exam platform. They can take it up to <strong>three times</strong>, then ask the teacher for help reviewing the questions they got wrong.</p>
      <p>After each attempt, the platform shows the percentage correct and the <strong>concepts</strong> they missed, but not the actual questions.</p>
      <p>The quizzes are formative and pass/fail in the gradebook. It doesn't count as a pass until the student gets every question right.</p>`,
    facts: ["Formative", "Pass/fail", "3 attempts", "Must reach 100%", "Teacher review after attempt 3"],
    suggested: "red",
    verdict: "Red. It's a quiz on certification content, so the student's own recall and reasoning are the whole point. The help students need is already built into the design: concept-level feedback after each attempt, and the teacher after the third.",
    reasons: [
      "It's an assessment of foundational knowledge, which is the first thing Red covers.",
      "Formative and pass/fail lowers the stakes, not the purpose. The score only helps if it reflects what the student actually knows, because it tells both of you what to review before the real exam, where AI won't be available.",
      "The retake loop <em>is</em> the productive struggle: the platform names the missed concept, the student goes back to it, and tries again. AI would short-circuit that loop.",
      "The 100% requirement raises the temptation to look answers up. That's a reason to protect the attempt, not loosen it."
    ],
    debate: "Some teams split it: the quiz attempts are Red, but <em>between</em> attempts a narrow Yellow use is allowed, e.g. “After an attempt, you may ask AI to explain a concept the platform flagged, in a different way. You may not paste in or describe quiz questions. Fill out your disclosure log.” That mirrors the guide's own Yellow example and is defensible. What isn't defensible is any AI during an attempt. Ask your group: does that allowance add something the teacher review after attempt 3 doesn't already give?",
    enforce: [
      "Have students take attempts in class where you can see screens.",
      "Use the teacher review after attempt 3 as the explain-it check: ask the student to talk through the concept before you show them anything.",
      "If you allow the between-attempt Yellow use, require the disclosure log entry before the next attempt."
    ],
    feedback: {
      red: "You matched our call. Check that your reasoning names <em>why</em>: the quiz measures what the student knows, and the retake loop is the learning.",
      yellow: "Close, and worth discussing. Yellow only holds up if the AI use happens <strong>between</strong> attempts, never during, is named precisely (explain a flagged concept, not the questions), and is logged. If your justification says that, it's a defensible split. If it allows AI during the quiz, it's Red.",
      green: "Green needs two things: students have already shown the underlying skill in Red work, <strong>and</strong> the learning goal is about AI itself. Here the goal is certification content, so it doesn't qualify."
    }
  },
  {
    id: "skills-test",
    title: "Summative skills-based test",
    context: `
      <p>Students complete a skills-based test that asks them to apply what they've learned to solve problems or build something on their own.</p>
      <p>They get <strong>one attempt</strong>, completed independently in class <strong>without teacher assistance</strong>. The teacher grades it with a rubric, and it's recorded in the gradebook as the percentage earned.</p>
      <p>After grades are returned, students get rubric feedback showing where they met expectations and where they fell short, and they can meet with the teacher to review their work.</p>`,
    facts: ["Summative", "One attempt", "In class", "No teacher help", "Rubric-graded", "Review after grading"],
    suggested: "red",
    verdict: "Red. This is the clearest case on the list: a summative test of what students can build on their own. If even the teacher can't help during it, AI can't either. The grade only means something if it reflects the student's own work.",
    reasons: [
      "It's a test, and Red's first bullet is quizzes, tests, and other assessments.",
      "The task is applying skills independently to build or solve something. That's the foundational skill itself, so any AI help would replace exactly what's being measured.",
      "The assignment already rules out teacher assistance. AI help would be a bigger exception than the one the design deliberately excludes.",
      "It's one attempt and recorded as a percentage, so there's no retake loop to recover the learning if a student leans on AI. The score becomes a false picture of what they can do."
    ],
    debate: "The test itself isn't debatable, but what happens <em>after</em> grades come back is worth discussing. Could you allow a separate Yellow follow-up, e.g. “After reviewing your rubric feedback, you may ask AI to explain a criterion you missed in a different way. You may not ask it to rewrite your submission. Fill out your disclosure log.”? That's a different activity with its own tier, and it never changes the test grade. Ask your group: does it add anything the teacher review meeting doesn't, or does it give students a way to skip that conversation?",
    enforce: [
      "Give the test in class with screens visible, and lock down browsers or tabs if your platform allows it.",
      "Use the post-grade review meeting as the explain-it check: if the work doesn't match what a student can explain, that's your evidence.",
      "Compare the test against the student's other Red work. A big jump in style or skill level is worth a conversation."
    ],
    feedback: {
      red: "You matched our call. This one is about as clear as Red gets: summative, independent, one attempt, and even teacher help is off the table.",
      yellow: "Yellow needs a named AI use that comes after an independent attempt and doesn't do the core work. On a one-shot summative test, the independent attempt <em>is</em> the whole assignment, so there's no room for Yellow during it. If your Yellow use happens only after grades are returned, that's a separate follow-up activity, not this test. See the debate below.",
      green: "Green requires the learning goal to be about AI itself, with the skill already shown in Red work. This test is where students show the skill in the first place, so it's the Red work Green would depend on."
    }
  },
  {
    id: "escape-room",
    title: "Group escape room game on Khan Academy",
    context: `
      <p>Students work in groups of four to build an escape room game on Khan Academy. <strong>Each student designs and codes their own room</strong> with three puzzles the player must solve before moving on.</p>
      <p>Students start from a provided code skeleton, with guidance on organizing their code so their room fits with the rest of the group's. Groups peer test, evaluate, and debug each other's rooms, then combine all four into one game, retest the full program, and release it to the class.</p>
      <p><strong>Students may use AI for guidance when integrating their code into the main program.</strong> The project is formative: students practice skills they've learned and that they'll later be tested on, and it helps them and the teacher find and fix gaps before the summative test.</p>`,
    facts: ["Formative", "Groups of 4", "Individual rooms", "Provided skeleton", "Peer testing", "AI allowed for integration"],
    suggested: "yellow",
    verdict: "Yellow. Each student builds and debugs their own room without AI, and AI is allowed for one named job, integrating the rooms, which comes only after that independent work. That's the Yellow pattern. What it needs is more precise wording than “guidance.”",
    reasons: [
      "The core skill, coding a room with three working puzzles, is done independently. That's the part that matches the summative test, and it stays AI-free.",
      "The AI use is limited to one step, integration, and it comes after students have built, tested, and debugged their own rooms. Yellow requires exactly that: a named use after an independent attempt.",
      "Because the project is formative, its value is in showing gaps before the test. AI writing room code would hide those gaps; AI helping explain a merge conflict doesn't.",
      "It isn't Green: the learning goal is game design and coding, not evaluating or understanding AI."
    ],
    debate: "Two things are worth arguing about. First, “AI for guidance when integrating” is too loose for Yellow. Does guidance mean explaining why two rooms conflict, or rewriting code so they fit? A sharper rule: “After your group has tried to merge the rooms on its own, you may ask AI to explain why the combined code isn't working (duplicate variable names, room transitions, shared state). You may not ask it to write or rewrite room code. Log each use in your group's disclosure log.” Second, if combining programs or managing shared variables is a skill on the summative test, integration should probably be Red too, since that's exactly the gap this project is supposed to reveal. Ask your group: is integration practice for the test, or a hurdle you'd rather students got past?",
    enforce: [
      "Have students build their rooms in class, and keep the skeleton's structure so you can see each student's code in the combined program.",
      "Require a group disclosure log for integration: who asked, what they asked, what the AI said, and what the group changed.",
      "During playtests, ask each student to explain one of their puzzles and one change made during integration. If they can't explain the integration change, the AI did the work.",
      "Use the gaps you see in room code to plan reteaching before the summative test, which is the point of the project."
    ],
    feedback: {
      red: "A defensible call if you'd rather integration be practiced without help, especially if combining code shows up on the summative test. As written, though, the assignment already permits one named AI use after independent work, which makes it Yellow. If you'd keep it Red, your justification should say why integration needs to be practiced unassisted.",
      yellow: "You matched our call. The strongest justifications point out that each student's room is still AI-free, and that “guidance” needs tighter wording to be a real Yellow rule.",
      green: "Green needs the learning goal to be about AI itself, like evaluating its output or testing its limits. Here AI is a helper for one step of a coding project, not the thing being studied, so it's Yellow at most."
    }
  },
  {
    id: "ai-code-review",
    title: "AI-assisted code review",
    context: `
      <p>Students write a program that uses loops to process a list of data. <strong>Once their program works</strong>, they may ask AI to review their code for readability, efficiency, or potential edge cases.</p>
      <p>Students must evaluate the suggestions, decide which changes are appropriate, and test their revised program. They submit their <strong>original code, revised code, and a brief explanation</strong> of which suggestions they accepted or rejected and why.</p>
      <p>The assignment is formative. It helps students develop debugging, code evaluation, and revision skills before completing a summative programming assessment independently.</p>`,
    facts: ["Formative", "Working program first", "AI as reviewer", "Accept/reject reasoning", "Original + revised code"],
    suggested: "green",
    verdict: "Green. Students prove the skill first by writing a working program on their own, and then the AI's output becomes the thing they study. Judging which suggestions are right, wrong, or not worth it is the learning goal, and the explanation is the required reflection.",
    reasons: [
      "It meets Green's first condition: students have already shown the underlying skill, because the program has to work before AI is allowed in. The original code is that evidence.",
      "It meets the second condition: the learning goal is evaluating AI output. Students don't just take the suggestions; they decide which to accept or reject and defend the choice.",
      "It has everything the guide lists for Green: a teacher-designed sequence with set steps, a specific purpose for the AI, and an artifact plus a reflection as evidence of learning.",
      "Submitting the original next to the revised code keeps the student's own work visible, so it's clear what they built and what changed because of AI."
    ],
    debate: "The question is whether the learning goal is really about AI, or about code review that happens to use AI as the reviewer. If students mostly accept suggestions and move on, it drifts toward Yellow. Two details decide it. First, is the original program written in class, or could it already be AI-assisted? If the “Red” part isn't protected, the whole comparison falls apart. Second, does the explanation require students to <em>test</em> AI's claims, for example showing an edge case actually breaks the original or that a “more efficient” change really helps? Ask your group: what would a student have to write for you to believe they evaluated the AI rather than just obeyed it?",
    enforce: [
      "Have students write and run the original program in class, and save that version before any AI use.",
      "Name the tool and require the shared conversation link or a transcript alongside the explanation.",
      "Require at least one rejected suggestion with a reason, so students can't accept everything uncritically.",
      "Ask a few students to walk you through one change they accepted and one they rejected. If they can't explain either, the reflection didn't do its job."
    ],
    feedback: {
      green: "You matched our call. The strongest justifications name both conditions: the working program shows the skill first, and evaluating the AI's suggestions is the learning goal itself.",
      yellow: "Close, and worth discussing. If you see the AI as a helper for revising code, Yellow is a reasonable read. What makes this Green is that judging the AI's suggestions <em>is</em> the assignment, with a required reflection on what it got right and wrong. If your justification argues students would just accept the changes, that's a design fix: require rejected suggestions and testing.",
      red: "Red would protect the original program, and it should. That part is effectively Red, since it has to work before AI is allowed. But the review step is built around evaluating AI output, which is exactly what Green is for. Removing AI would remove the learning goal."
    }
  }
];

/* ---------- Tier guide content ---------- */
const ICON = {
  user:'<svg viewBox="0 0 24 24" fill="currentColor"><circle cx="12" cy="8" r="4"/><path d="M4 21c0-4.4 3.6-7 8-7s8 2.6 8 7z"/></svg>',
  cal:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h2v2h6V2h2v2h3v17H4V4h3zm-1 7v10h12V9zm2 2h2v2H8zm4 0h2v2h-2zm4 0h2v2h-2zm-8 4h2v2H8zm4 0h2v2h-2z"/></svg>',
  doc:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M6 2h9l5 5v15H6zm8 1v5h5M8 12h8v1.5H8zm0 3h8v1.5H8zm0 3h6v1.5H8z"/></svg>',
  tools:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M21 6.5a4.5 4.5 0 0 1-6 4.2L6.2 19.5a1.8 1.8 0 0 1-2.6-2.6l8.8-8.8A4.5 4.5 0 0 1 18 2.5l-2.7 2.7 1.5 2 2 1.5z"/></svg>',
  log:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 2h11v16H8zm2 3v1.5h7V5zm0 3v1.5h7V8zm0 3v1.5h5V11zM5 6h2v14h10v2H5z"/></svg>',
  chart:'<svg viewBox="0 0 24 24" fill="currentColor"><path d="M4 20h4V12H4zm6 0h4V8h-4zm6 0h4V4h-4z"/></svg>'
};
const TIERS = [
  { key:"red", t1:"RED", t2:"NO AI", tl:"r",
    rows:[["user","Student AI use","None"],["cal","How often","Most assignments"],["doc","Typical work","Quizzes, tests, skill drills, first attempts at projects"],["tools","Allowed tools","None"],["log","Disclosure","N/A"],["chart","Evidence of learning","Artifact"]],
    more:`<p>Red is the default for any task that measures or builds a foundational skill. The student's own thinking is the point of the work, so any AI help would replace the learning.</p>
      <details><summary>Use Red for</summary><ul><li>Quizzes, tests and other assessments</li><li>Skill drills such as tracing loops, predicting output or writing short functions</li><li>First attempts at labs and projects</li></ul></details>
      <details><summary>What it protects</summary><p>Productive struggle; code fluency; an honest picture of what each student can do on their own.</p></details>
      <details><summary>How to enforce</summary><ul><li>Do Red work in class when possible, where you can see the process.</li><li>Ask students to walk you through a line or two of their code. If they wrote it, they can explain it.</li><li>Collect process evidence such as drafts/version histories, commented code, or a short reflection.</li></ul></details>` },
  { key:"yellow", t1:"YELLOW", t2:"NARROW", tl:"y",
    rows:[["user","Student AI use","Specific, named uses"],["cal","How often","Periodically"],["doc","Typical work","Debugging help, concept review, additional practice"],["tools","Allowed tools","Specific tools"],["log","Disclosure","AI Disclosure Log"],["chart","Evidence of learning","Artifact + log"]],
    more:`<p>Yellow allows a specific AI use, named in the assignment, and only after the student has made an independent attempt. The language should be precise:</p>
      <details><summary>Example wording</summary><ul>
        <li class="quote">After 15 minutes on your own, you may ask AI to explain an error message. You may not ask it to write or fix your code. Fill out your disclosure log.</li>
        <li class="quote">After finishing the practice set, you may ask AI to explain a concept you missed in a different way. Fill out your disclosure log.</li>
        <li class="quote">You may use the cs50.ai duck to talk through a bug. Fill out your disclosure log.</li></ul></details>
      <details><summary>What it protects</summary><p>An independent first attempt; the student does the core work; students learn to write targeted questions.</p></details>
      <details><summary>How to enforce</summary><ul>
        <li>Do the first attempt in class, so you see independent work before any AI help.</li>
        <li>Use guardrailed tools like <a href="https://cs50.ai" target="_blank" rel="noopener">cs50.ai</a>, which won't just give the answer (5-inquiry limit; requires a GitHub account).</li>
        <li>Every Yellow use goes in the AI disclosure log: what the student asked, what the AI said, what they changed and why. Summary or verbatim (most AIs let you share a conversation).</li></ul></details>` },
  { key:"green", t1:"GREEN", t2:"RARE", tl:"g",
    rows:[["user","Student AI use","Teacher-designed with set steps"],["cal","How often","A few times a year/semester"],["doc","Typical work","Guided projects, AI-literacy investigations"],["tools","Allowed tools","Specific tools"],["log","Disclosure","AI Disclosure Log plus reflection"],["chart","Evidence of learning","Artifact, log, and reflection"]],
    more:`<p>Green is for assignments where using AI is part of what students are learning. It's planned by the teacher, limited to named tools, and always followed by reflection.</p>
      <details><summary>Qualifies only when</summary><ol><li>Students have already shown the underlying skill in Red work.</li><li>The learning goal is about AI itself: evaluating output, testing its limits, or understanding how it works.</li></ol></details>
      <details><summary>What it protects</summary><p>The purpose behind any AI use. Because students have already shown the skill, AI becomes something they examine rather than lean on. The reflection keeps their judgment at the center: what AI got right, what it got wrong, and how they could tell.</p></details>
      <details><summary>Examples</summary><ul>
        <li><strong>Test-the-AI investigation:</strong> students ask an approved tool to solve problems they've already solved, then document where it was wrong, outdated, or invented a method.</li>
        <li><strong>Teachable Machine project:</strong> students train a simple image classifier, then deliberately skew the training data and explain how the results changed.</li>
        <li><strong>Guided project with a guardrailed tool:</strong> students use cs50.ai at defined checkpoints in a larger project, logging each conversation.</li></ul></details>` }
];

const CHIPS = [
  "This assignment builds/measures…",
  "The student's own thinking matters here because…",
  "If AI were allowed, the student would miss…",
  "The exact AI rule I'd give students is: “…”",
  "I'd enforce it by…"
];

/* ---------- State (localStorage wrapped for safety) ---------- */
const KEY = "ai-tiers-activity-v1";
let state = { idx:0, answers:{} };
function load(){ try{ const s = JSON.parse(localStorage.getItem(KEY)); if(s && s.answers) state = Object.assign(state, s); }catch(e){} }
function save(){ try{ localStorage.setItem(KEY, JSON.stringify(state)); }catch(e){} }
function ans(id){ return state.answers[id] || (state.answers[id] = {tier:"", why:"", revealed:false}); }
const $ = s => document.querySelector(s);
const NAMES = {red:"RED", yellow:"YELLOW", green:"GREEN"};
const SUBS = {red:"No AI", yellow:"Narrow use", green:"Rare & deliberate"};

/* ---------- Render: guide ---------- */
function renderGuide(){
  $("#tiers").innerHTML = TIERS.map(t => `
    <article class="tiercard ${t.key}">
      <div class="tierhead"><span class="tl big ${t.tl}"><i></i><i></i><i></i></span>
        <div><div class="t1">${t.t1}</div><div class="t2">${t.t2}</div></div></div>
      <ul class="rows">${t.rows.map(r=>`<li><span class="ico">${ICON[r[0]]}</span><div><div class="k">${r[1]}</div><div class="v">${r[2]}</div></div></li>`).join("")}</ul>
      <div class="more">${t.more}</div>
    </article>`).join("");
}

/* ---------- Render: activity ---------- */
function renderActivity(){
  const a = ASSIGNMENTS[state.idx], r = ans(a.id);
  $("#progressLabel").textContent = `Assignment ${state.idx+1} of ${ASSIGNMENTS.length}`;
  $("#dots").innerHTML = ASSIGNMENTS.map((x,i)=>{
    const ar = state.answers[x.id]; const done = ar && ar.revealed ? ` done-${ar.tier}` : "";
    return `<button class="dot${i===state.idx?" current":""}${done}" data-i="${i}" aria-label="Go to assignment ${i+1}">${i+1}</button>`;
  }).join("");
  $("#assignmentCard").innerHTML = `
    <div class="eyebrow">Assignment ${state.idx+1}</div>
    <h2>${a.title}</h2>
    <div class="context">${a.context}</div>
    <div class="facts">${(a.facts||[]).map(f=>`<span class="fact">${f}</span>`).join("")}</div>`;
  document.querySelectorAll("#activityPicker .pick").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.tier===r.tier)));
  $("#why").value = r.why;
  updateGate();
  renderReveal();
  $("#prevBtn").disabled = state.idx===0;
  $("#nextBtn").disabled = state.idx===ASSIGNMENTS.length-1;
}

function updateGate(){
  const r = ans(ASSIGNMENTS[state.idx].id);
  const ok = r.tier && r.why.trim().length >= 15;
  $("#revealBtn").disabled = !ok;
  $("#revealBtn").textContent = r.revealed ? "Update my answer" : "Lock in & reveal";
  $("#whyHint").textContent = ok ? "Ready when you are." : "Pick a tier and write at least a sentence to unlock the reveal.";
}

function renderReveal(){
  const a = ASSIGNMENTS[state.idx], r = ans(a.id), box = $("#revealBox");
  if(!r.revealed || !r.tier){ box.innerHTML = ""; return; }
  box.innerHTML = `
    <section class="card reveal" aria-live="polite">
      <div class="eyebrow">Facilitators' take</div>
      <div class="compare">
        <span class="badge ${r.tier}">Your call <span class="tier">${NAMES[r.tier]}</span></span>
        <span class="badge ${a.suggested}">Suggested <span class="tier">${NAMES[a.suggested]}</span></span>
      </div>
      <p class="feedback">${a.feedback[r.tier]}</p>
      <p><strong>${a.verdict}</strong></p>
      <h3>Why</h3><ul>${a.reasons.map(x=>`<li>${x}</li>`).join("")}</ul>
      <h3>Where it gets debatable</h3><p class="debate">${a.debate}</p>
      <h3>How to enforce it</h3><ul>${a.enforce.map(x=>`<li>${x}</li>`).join("")}</ul>
    </section>`;
}

/* ---------- Export ---------- */
function exportText(){
  const lines = ["AI USE TIERS — STOPLIGHT ACTIVITY", `Date: ${new Date().toLocaleDateString()}`, ""];
  ASSIGNMENTS.forEach((a,i)=>{
    const r = state.answers[a.id] || {};
    lines.push("—".repeat(40), `Assignment ${i+1}: ${a.title}`,
      `My tier: ${r.tier ? NAMES[r.tier]+" ("+SUBS[r.tier]+")" : "(not answered)"}`,
      `My reasoning: ${r.why ? r.why.trim() : "(none)"}`,
      `Suggested tier: ${r.revealed ? NAMES[a.suggested] : "(not revealed yet)"}`, "");
  });
  return lines.join("\n");
}
function toast(msg){ const t=$("#toast"); t.textContent=msg; t.classList.add("show"); clearTimeout(toast._t); toast._t=setTimeout(()=>t.classList.remove("show"),1800); }

/* ---------- Events ---------- */
/* Page routing: #home, #activity, #reflect, #disclosure. #guide and #cross open the
   Stoplight Activity with that reference section expanded. */
const PAGES = ["home","activity","disclosure","reflect","guide","cross"];
const DRAWERS = {guide:"#toggleGuide", cross:"#toggleCross"};
function setDrawer(id, open){
  // Opening one drawer closes the other, so only one is open at a time
  if(open) Object.keys(DRAWERS).forEach(other => { if(other !== id) setDrawer(other, false); });
  const d = document.getElementById(id); if(!d) return;
  d.hidden = !open; $(DRAWERS[id]).setAttribute("aria-expanded", String(open));
}
function showPage(id, scroll){
  if(!PAGES.includes(id)) id = "home";
  if(DRAWERS[id]){ setDrawer(id, true); id = "activity"; scroll = false;
    setTimeout(()=>{ const d=document.getElementById(location.hash.slice(1)) || $(".toggles"); d.scrollIntoView({behavior:"smooth", block:"start"}); }, 50); }
  document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", String(t.getAttribute("aria-controls")===id)));
  document.querySelectorAll("section.panel").forEach(p => p.hidden = p.id !== id);
  if(scroll){ const bar = document.querySelector(".tabbar"); window.scrollTo({top: Math.min(window.scrollY, bar.offsetTop), behavior:"smooth"}); }
}
function go(id){
  // Update the address bar when the browser allows it (GitHub Pages does;
  // sandboxed previews don't), then switch pages either way.
  try{ if(location.hash !== "#"+id) history.pushState(null, "", "#"+id); }catch(e){}
  showPage(id, true);
}
document.querySelectorAll(".tab").forEach(tab => tab.addEventListener("click", () => go(tab.getAttribute("aria-controls"))));
// In-page links (home cards, quick links) go through the same path
document.addEventListener("click", e => {
  const a = e.target.closest && e.target.closest('a[href^="#"]');
  if(!a) return;
  const id = a.getAttribute("href").slice(1);
  if(PAGES.includes(id)){ e.preventDefault(); go(id); }
});
Object.entries(DRAWERS).forEach(([id, sel]) => $(sel).addEventListener("click", () => {
  setDrawer(id, $(sel).getAttribute("aria-expanded") !== "true");
}));
document.querySelectorAll(".drawerclose").forEach(b => b.addEventListener("click", () => {
  setDrawer(b.dataset.close, false); $(DRAWERS[b.dataset.close]).focus();
}));
window.addEventListener("hashchange", () => showPage(location.hash.slice(1), true));
window.addEventListener("popstate", () => showPage(location.hash.slice(1), true));
document.querySelectorAll("#activityPicker .pick").forEach(b => b.addEventListener("click", () => {
  const r = ans(ASSIGNMENTS[state.idx].id);
  r.tier = r.tier === b.dataset.tier ? "" : b.dataset.tier;   // click the lit one again to clear it
  save();
  document.querySelectorAll("#activityPicker .pick").forEach(x => x.setAttribute("aria-pressed", String(x.dataset.tier===r.tier)));
  updateGate(); renderReveal();
}));
$("#why").addEventListener("input", e => { ans(ASSIGNMENTS[state.idx].id).why = e.target.value; save(); updateGate(); });
$("#chips").innerHTML = CHIPS.map(c=>`<button class="chip" type="button">${c}</button>`).join("");
$("#chips").addEventListener("click", e => {
  if(!e.target.classList.contains("chip")) return;
  const ta = $("#why"); ta.value = (ta.value.trim() ? ta.value.replace(/\s*$/,"\n") : "") + e.target.textContent.replace("…"," ");
  ta.dispatchEvent(new Event("input")); ta.focus(); ta.setSelectionRange(ta.value.length, ta.value.length);
});
$("#revealBtn").addEventListener("click", () => {
  ans(ASSIGNMENTS[state.idx].id).revealed = true; save(); renderActivity();
  $("#revealBox").scrollIntoView({behavior:"smooth", block:"start"});
});
$("#prevBtn").addEventListener("click", () => { if(state.idx>0){ state.idx--; save(); renderActivity(); window.scrollTo({top:0,behavior:"smooth"}); }});
$("#nextBtn").addEventListener("click", () => { if(state.idx<ASSIGNMENTS.length-1){ state.idx++; save(); renderActivity(); window.scrollTo({top:0,behavior:"smooth"}); }});
$("#dots").addEventListener("click", e => { const i = e.target.dataset && e.target.dataset.i; if(i!==undefined){ state.idx=+i; save(); renderActivity(); }});
$("#dlBtn").addEventListener("click", () => {
  const blob = new Blob([exportText()], {type:"text/plain"}); const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = "ai-tiers-stoplight-answers.txt";
  document.body.appendChild(a); a.click(); setTimeout(()=>{URL.revokeObjectURL(a.href); a.remove();},500);
});
$("#clearBtn").addEventListener("click", () => {
  if(!confirm("Clear all your Stoplight answers on this device?")) return;
  state.idx = 0; state.answers = {}; save(); renderActivity(); toast("Cleared");
});

/* ---------- Reflection ---------- */
// Guidance for "Permitted uses" and "Documenting AI use" changes with the tier picked
const REFLECT_HELP = {
  red:    { uses:"Red allows no AI. How will you protect the student's own work? Think in-class time, explain-a-line checks, and process evidence.",
            documentation:"No disclosure log needed. What process evidence will you collect instead, like drafts, version history, or commented code?" },
  yellow: { uses:"Write the exact rule: when AI is allowed (after what independent attempt), which tool, and what's off limits.",
            documentation:"What goes in the AI Disclosure Log: what students asked, what the AI said, what they changed, and why?" },
  green:  { uses:"Name the tool and the set steps. Which Red work shows students already have the skill, and what will they learn about AI itself?",
            documentation:"Disclosure log plus reflection. What will the reflection ask about what the AI got right, got wrong, and how they could tell?" }
};
// The questions in order, for the download: [key, label, part heading or null]
const REFLECT_QS = [
  ["tierFactors", "What made an assignment Red, Yellow, or Green?", "1. REFLECT ON THE ACTIVITY"],
  ["protected", "How did the AI-use rules protect the learning objective?", null],
  ["assignment", "Your assignment", "2. CLASSIFY AND ADAPT A CLASSROOM ASSIGNMENT"],
  ["tier", "AI classification", null],
  ["uses", "Permitted uses", null],
  ["documentation", "Documenting AI use", null],
  ["challenge", "One possible challenge", "3. SHARE AND REFINE"],
  ["revision", "How you'll revise the plan", null],
  ["change", "What will I change?", "ASSESS IMPACT: WHAT WILL SUCCESS LOOK LIKE?"],
  ["evidence", "What evidence will I collect?", null],
  ["adjust", "What will I adjust?", null]
];
function R(){ return state.reflect || (state.reflect = {}); }
function renderReflect(){
  const r = R();
  document.querySelectorAll("#reflect textarea[data-key]").forEach(t => t.value = r[t.dataset.key] || "");
  document.querySelectorAll("#reflectPicker .pick").forEach(b => b.setAttribute("aria-pressed", String(b.dataset.tier===r.tier)));
  updateReflect();
}
function updateReflect(){
  const h = REFLECT_HELP[R().tier];
  $("#usesHelp").textContent = h ? h.uses : "Pick a tier above for guidance.";
  $("#docHelp").textContent = h ? h.documentation : "Pick a tier above for guidance.";
}
function reflectText(){
  const r = R(), lines = ["AI USE TIERS — REFLECTION", `Date: ${new Date().toLocaleDateString()}`];
  REFLECT_QS.forEach(([key, label, part]) => {
    if(part) lines.push("", "—".repeat(40), part);
    const val = key === "tier" ? (r.tier ? NAMES[r.tier]+" ("+SUBS[r.tier]+")" : "(not chosen)") : ((r[key] || "").trim() || "(blank)");
    lines.push("", label, val);
  });
  return lines.join("\n");
}
document.querySelectorAll("#reflect textarea[data-key]").forEach(t => t.addEventListener("input", () => { R()[t.dataset.key] = t.value; save(); }));
document.querySelectorAll("#reflectPicker .pick").forEach(b => b.addEventListener("click", () => {
  const r = R();
  r.tier = r.tier === b.dataset.tier ? "" : b.dataset.tier;   // click the lit one again to clear it
  save();
  document.querySelectorAll("#reflectPicker .pick").forEach(x => x.setAttribute("aria-pressed", String(x.dataset.tier===r.tier)));
  updateReflect();
}));
$("#rDlBtn").addEventListener("click", () => {
  const blob = new Blob([reflectText()], {type:"text/plain"}); const a = document.createElement("a");
  a.href = URL.createObjectURL(blob); a.download = "ai-tiers-reflection.txt";
  document.body.appendChild(a); a.click(); setTimeout(()=>{URL.revokeObjectURL(a.href); a.remove();},500);
});

/* ---------- Init ---------- */
load();
if(state.idx >= ASSIGNMENTS.length) state.idx = 0;
renderGuide();
renderActivity();
renderReflect();
let startPage = "home";
try{ startPage = location.hash.slice(1) || "home"; }catch(e){}
showPage(startPage);