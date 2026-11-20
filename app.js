/* Chambre par chambre : moteur du jeu. Aucune donnée n'est stockée ni transmise (hors événements Plausible agrégés). */
(() => {
  const $ = (s, el = document) => el.querySelector(s);
  const main = $("#main");
  const M = window.MODULES, S = window.SOURCES, C = window.CATS;
  const PCCOL = { ps: "var(--c-ps)", pcc: "var(--c-pcc)", cd: "var(--c-cd)", gale: "var(--c-gale)", pcg: "var(--c-pcg)", pca: "var(--c-pca)", pcp: "var(--c-pcp)" };
  const CATCOL = { ok: "var(--ok)", risque: "var(--risque)", exces: "var(--exces)", ecart: "var(--ecart)" };
  const PRIO = ["risque", "ecart", "exces"];
  const TOTAL = M.reduce((n, m) => n + m.decisions.length, 0);

  const st = { ref: "loc", answers: {}, mod: null, idx: 0, pending: null, started: false };

  const esc = (t) => String(t).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const pick = (v) => (v && typeof v === "object" && !Array.isArray(v) ? v[st.ref] : v);
  const track = (n) => window.pcAnalytics && window.pcAnalytics.track(n);
  const refName = () => (st.ref === "loc" ? "Procédure Pôle MS v03" : "Recommandations nationales (HCSP 2026, CPias)");
  const chip = (cat) => `<span class="chip c-${cat}"><i></i>${C[cat].label}</span>`;
  const refsHtml = (refs) => refs.map((k) => S[k].url ? `<a href="${S[k].url}" target="_blank" rel="noopener">${esc(S[k].court)}</a>` : esc(S[k].court)).join(" · ");

  function setNav(view) {
    document.querySelectorAll(".nav").forEach((b) => b.classList.toggle("active", b.dataset.view === view));
  }
  function go(view, arg) {
    setNav(view === "play" || view === "end" || view === "report" ? "home" : view);
    ({ home, memo, guide, sources, play: () => play(arg), end: () => end(arg), report })[view]();
    window.scrollTo({ top: 0 });
    main.focus({ preventScroll: true });
  }
  document.querySelectorAll(".nav").forEach((b) => b.addEventListener("click", () => go(b.dataset.view)));
  $("#brand").addEventListener("click", () => go("home"));

  function doneCount(m) { return m.decisions.filter((d) => st.answers[d.id]).length; }

  function refSwitch() {
    return `<div class="seg" role="group" aria-label="Référentiel BMR et BHRe">
      <button data-ref="loc" aria-pressed="${st.ref === "loc"}">Procédure Pôle MS v03</button>
      <button data-ref="nat" aria-pressed="${st.ref === "nat"}">HCSP 2026 et CPias</button></div>`;
  }
  function bindRef(rerender) {
    main.querySelectorAll("[data-ref]").forEach((b) => b.addEventListener("click", () => {
      if (st.ref === b.dataset.ref) return;
      st.ref = b.dataset.ref;
      // Les réponses aux questions divergentes sont réévaluées dans le nouveau référentiel.
      M.forEach((m) => m.decisions.forEach((d) => { const a = st.answers[d.id]; if (a && d.div) a.cat = evaluate(d, a.raw).cat; }));
      rerender();
    }));
  }

  const hallSvg = () => {
    const doors = ["ps", "pcc", "cd", "gale", "pcg", "pca", "pcp"];
    let g = "";
    doors.forEach((k, i) => {
      const x = 18 + i * 52;
      g += `<g transform="translate(${x},0)"><rect x="0" y="70" width="40" height="92" rx="3" fill="#2a5246" stroke="#f6f1e6" stroke-opacity=".5"/><rect x="7" y="80" width="26" height="15" rx="2" fill="${getComputedStyle(document.documentElement).getPropertyValue("--c-" + k)}"/><circle cx="32" cy="122" r="2.4" fill="#f6f1e6"/><text x="20" y="91" font-size="7" font-family="General Sans, sans-serif" font-weight="700" fill="#fff" text-anchor="middle">${{ ps: "PS", pcc: "PCC", cd: "CD", gale: "G", pcg: "PCG", pca: "AIR", pcp: "PCP" }[k]}</text></g>`;
    });
    return `<svg viewBox="0 0 390 200" role="img" aria-label="Un couloir d'EHPAD avec sept portes de chambre, chacune signalée par une couleur de précaution">
      <rect x="0" y="160" width="390" height="40" fill="#18332a"/><path d="M0 160 L390 160" stroke="#f6f1e6" stroke-opacity=".25"/>
      <rect x="0" y="40" width="390" height="6" fill="#f6f1e6" opacity=".12"/>${g}
      <g transform="translate(300,128)"><rect x="0" y="0" width="34" height="32" rx="3" fill="#f6f1e6" opacity=".9"/><rect x="5" y="6" width="24" height="5" rx="1" fill="#e9a23b"/><rect x="5" y="15" width="24" height="5" rx="1" fill="#2c7a6b"/><rect x="5" y="24" width="24" height="3" rx="1" fill="#b8432f"/><circle cx="6" cy="36" r="3" fill="#f6f1e6"/><circle cx="28" cy="36" r="3" fill="#f6f1e6"/></g>
      <text x="20" y="28" font-size="11" font-family="General Sans, sans-serif" fill="#f6f1e6" opacity=".7" letter-spacing="2">AILE DES GLYCINES</text></svg>`;
  };

  /* ---------------- Accueil ---------------- */
  function home() {
    const answered = Object.keys(st.answers).length;
    main.innerHTML = `
      <section class="hero">
        <div>
          <p class="eyebrow">Serious game · hygiène en EHPAD</p>
          <h1>Chambre par chambre</h1>
          <p>Une semaine à la Résidence des Tilleuls, établissement fictif de 84 lits. Vous décidez, résident par résident : quels gestes au quotidien, quelle précaution complémentaire, comment l'organiser, et quand la lever sans enfermer personne.</p>
          <div class="row">
            <button class="btn" id="start">${answered ? "Reprendre le parcours" : "Commencer le parcours"}</button>
            <button class="btn ghost" data-go="memo">Aide-mémoire</button>
          </div>
          <div class="stats"><div><b>5</b><span>modules</span></div><div><b>${TOTAL}</b><span>décisions</span></div><div><b>7</b><span>types de précautions</span></div><div><b>40 min</b><span>environ</span></div></div>
        </div>
        <div class="art">${hallSvg()}</div>
      </section>

      <section class="card refbox">
        <div>
          <p class="eyebrow">Référentiel BMR et BHRe</p>
          <p><b>${esc(window.DIVERGENCE.titre)}.</b> <span class="small muted">Choisissez la référence de correction pour les ${M.reduce((n, m) => n + m.decisions.filter((d) => d.div).length, 0)} décisions concernées. <button class="link small" data-go="memo" style="color:var(--accent);text-decoration:underline">Voir le détail</button></span></p>
        </div>
        ${refSwitch()}
      </section>

      <h2 class="sec">Les cinq modules</h2>
      <div class="modules">${M.map((m) => {
        const d = doneCount(m);
        return `<button class="mod" data-mod="${m.id}" style="--mc:${PCCOL[m.color]}">
          <span class="num">${m.num}</span><h3>${esc(m.titre)}</h3><p>${esc(m.sous)}</p>
          <span class="meta"><span>${m.decisions.length} décisions</span>${d === m.decisions.length ? '<span class="done">Terminé</span>' : d ? `<span>${d}/${m.decisions.length}</span>` : ""}</span></button>`;
      }).join("")}</div>
      ${answered ? `<div class="row"><button class="btn ghost" data-go="report">Voir mon bilan (${answered}/${TOTAL})</button></div>` : ""}

      <h2 class="sec">Comment sont corrigées vos décisions</h2>
      <div class="card"><p class="small">Chaque choix est classé dans une des quatre catégories, puis expliqué avec ses sources.</p>
        <div class="legend">${Object.keys(C).map(chip).join("")}</div>
        <p class="small muted" style="margin-top:.8rem">Une mesure excessive n'est pas une erreur anodine : en EHPAD, lieu de vie, elle peut isoler un résident, l'éloigner de ses proches ou lui faire perdre son autonomie.</p></div>`;
    $("#start").addEventListener("click", () => {
      const next = M.find((m) => doneCount(m) < m.decisions.length) || M[0];
      startModule(next.id);
    });
    main.querySelectorAll("[data-mod]").forEach((b) => b.addEventListener("click", () => startModule(b.dataset.mod)));
    main.querySelectorAll("[data-go]").forEach((b) => b.addEventListener("click", () => go(b.dataset.go)));
    bindRef(home);
  }

  function startModule(id) {
    if (!st.started) { st.started = true; track("Jeu démarré"); }
    const m = M.find((x) => x.id === id);
    track(`Module ${m.num} démarré`);
    st.mod = m;
    const firstOpen = m.decisions.findIndex((d) => !st.answers[d.id]);
    st.idx = firstOpen < 0 ? 0 : firstOpen;
    go("play");
  }

  /* ---------------- Évaluation ---------------- */
  function evaluate(d, raw) {
    if (d.type === "choice") {
      const o = d.options[raw];
      return { cat: pick(o.cat), fb: pick(o.fb) };
    }
    if (d.type === "multi") {
      const sel = new Set(raw);
      const wrong = d.items.map((it, i) => (!it.need && sel.has(i) ? it.cat || "exces" : null)).filter(Boolean);
      const miss = d.items.some((it, i) => it.need && !sel.has(i));
      const cats = [...wrong];
      if (miss) cats.push(d.missCat || "risque");
      const cat = cats.length ? PRIO.find((p) => cats.includes(p)) : "ok";
      return { cat, fb: d.fbOk };
    }
    if (d.type === "order") {
      const ok = d.accept.some((a) => a.every((v, i) => v === raw[i]));
      return { cat: ok ? "ok" : d.wrongCat || "ecart", fb: ok ? d.fbOk : d.fbKo };
    }
  }

  function shuffled(n, seed) {
    const a = [...Array(n).keys()];
    let s = seed;
    for (let i = n - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor((s / 233280) * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
    if (a.every((v, i) => v === i)) a.reverse();
    return a;
  }

  /* ---------------- Jeu ---------------- */
  function play() {
    const m = st.mod, d = m.decisions[st.idx];
    const ans = st.answers[d.id];
    if (!st.pending || st.pending.id !== d.id) {
      st.pending = { id: d.id, raw: ans ? ans.raw : d.type === "multi" ? [] : d.type === "order" ? shuffled(d.items.length, d.id.length * 37 + st.idx * 11) : null };
    }
    const p = st.pending;
    const r = d.resident;
    const counts = tally(m);
    main.innerHTML = `
      <div style="--mc:${PCCOL[m.color]}">
        <p class="eyebrow">Module ${m.num} · ${esc(m.titre)} · décision ${st.idx + 1} sur ${m.decisions.length}</p>
        <div class="progress" aria-hidden="true">${m.decisions.map((x, i) => `<span class="${st.answers[x.id] ? "on" : i === st.idx ? "cur" : ""}"></span>`).join("")}</div>
        <div class="play">
          <article class="card scene">
            ${st.idx === 0 && !ans ? `<p class="small muted">${esc(m.pitch)}</p>` : ""}
            <h1>${esc(d.titre)}</h1>
            <p class="role">${esc(d.role)}${d.div ? ` · <b style="color:var(--exces)">Correction selon : ${esc(refName())}</b>` : ""}</p>
            ${r ? `<div class="resident"><span class="avatar">${esc(r.nom.replace(/^(M\.|Mme)\s*/, "").charAt(0) || "A")}</span><div><b>${esc(r.nom)}${r.age ? `, ${r.age} ans` : ""}${r.chambre ? ` · chambre ${esc(r.chambre)}` : ""}</b><span>${esc(r.tag)}</span></div></div>` : ""}
            ${d.ctx ? `<p>${esc(d.ctx)}</p>` : ""}
            ${d.chrono ? `<ul class="chrono">${d.chrono.map((c) => `<li>${esc(c)}</li>`).join("")}</ul>` : ""}
            <p class="q" id="qq">${esc(d.q)}</p>
            <div id="zone">${zone(d, p, ans)}</div>
            <div id="fbz">${ans ? feedback(d, ans) : ""}</div>
            <div class="row noprint" style="justify-content:space-between">
              <button class="btn ghost" id="prev" ${st.idx === 0 ? "disabled" : ""}>Précédent</button>
              ${ans ? `<button class="btn" id="next">${st.idx === m.decisions.length - 1 ? "Terminer le module" : "Décision suivante"}</button>` : `<button class="btn" id="validate" ${canValidate(d, p) ? "" : "disabled"}>Valider</button>`}
            </div>
          </article>
          <aside class="side">
            <div class="card"><h3>Module ${m.num}</h3><div class="tally">${Object.keys(C).map((k) => `<div><span class="chip c-${k}"><i></i>${C[k].short}</span><b>${counts[k]}</b></div>`).join("")}</div></div>
            <div class="card small"><h3>Référentiel</h3><p class="muted" style="margin:0 0 .6rem">Pour les situations BMR et BHRe.</p>${refSwitch()}</div>
          </aside>
        </div>
      </div>`;
    bind(d, p, ans);
    bindRef(play);
  }

  function canValidate(d, p) {
    if (d.type === "choice") return p.raw !== null;
    if (d.type === "multi") return p.raw.length > 0;
    return true;
  }

  function zone(d, p, ans) {
    const L = "ABCDEFGH";
    if (d.type === "choice") {
      return `<div class="opts" role="radiogroup" aria-labelledby="qq">${d.options.map((o, i) => {
        let cls = "";
        if (ans) { const c = pick(o.cat); if (i === ans.raw) cls = c === "ok" ? "is-ok" : "is-bad"; else if (c === "ok") cls = "is-miss"; }
        return `<button class="opt ${cls}" role="radio" data-i="${i}" aria-checked="${p.raw === i}" aria-pressed="${p.raw === i}" ${ans ? "disabled" : ""}><span class="k">${L[i]}</span><span>${esc(o.t)}${ans && i !== ans.raw ? `<span class="why">${chip(pick(o.cat))} ${esc(pick(o.fb))}</span>` : ""}</span></button>`;
      }).join("")}</div>`;
    }
    if (d.type === "multi") {
      const sel = new Set(p.raw);
      return `<div class="opts" role="group" aria-labelledby="qq">${d.items.map((it, i) => {
        let cls = "", why = "";
        if (ans) {
          if (it.need && sel.has(i)) cls = "is-ok";
          else if (it.need) { cls = "is-miss"; why = `<span class="why">Élément attendu, non coché.</span>`; }
          else if (sel.has(i)) { cls = "is-bad"; why = `<span class="why">${chip(it.cat || "exces")} ${esc(it.why || "")}</span>`; }
          else why = `<span class="why">Bien écarté. ${esc(it.why || "")}</span>`;
        }
        return `<button class="opt ${cls}" data-i="${i}" aria-pressed="${sel.has(i)}" ${ans ? "disabled" : ""}><span class="check" aria-hidden="true">${sel.has(i) ? "✓" : ""}</span><span>${esc(it.t)}${why}</span></button>`;
      }).join("")}</div>`;
    }
    if (d.type === "order") {
      const okSet = ans ? d.accept.find((a) => a.every((v, i) => v === ans.raw[i])) || d.accept[0] : null;
      return `<ol class="order" aria-labelledby="qq">${p.raw.map((v, pos) => {
        const cls = ans ? (okSet[pos] === v ? "is-ok" : "is-bad") : "";
        return `<li class="${cls}"><span>${esc(d.items[v])}</span>${ans ? "" : `<button class="mv" data-up="${pos}" aria-label="Monter : ${esc(d.items[v])}" ${pos === 0 ? "disabled" : ""}>↑</button><button class="mv" data-down="${pos}" aria-label="Descendre : ${esc(d.items[v])}" ${pos === p.raw.length - 1 ? "disabled" : ""}>↓</button>`}</li>`;
      }).join("")}</ol>`;
    }
  }

  function feedback(d, a) {
    const isDiv = d.div;
    return `<div class="fb f-${a.cat}" role="status">${chip(a.cat)}<p>${esc(a.fb)}</p>
      ${isDiv ? `<div class="divnote"><b>Point de divergence.</b> Cette situation est corrigée selon : ${esc(refName())}. La procédure Pôle MS v03 et le HCSP 2026 ne concluent pas de la même façon ; changez de référentiel pour comparer.</div>` : ""}
      <p class="refs">Sources : ${refsHtml(d.refs)}</p></div>`;
  }

  function bind(d, p, ans) {
    const rerender = () => play();
    if (!ans) {
      if (d.type === "choice") main.querySelectorAll(".opt").forEach((b) => b.addEventListener("click", () => { p.raw = +b.dataset.i; rerender(); main.querySelector(`.opt[data-i="${p.raw}"]`).focus(); }));
      if (d.type === "multi") main.querySelectorAll(".opt").forEach((b) => b.addEventListener("click", () => { const i = +b.dataset.i; p.raw = p.raw.includes(i) ? p.raw.filter((x) => x !== i) : [...p.raw, i]; rerender(); main.querySelector(`.opt[data-i="${i}"]`).focus(); }));
      if (d.type === "order") {
        main.querySelectorAll("[data-up]").forEach((b) => b.addEventListener("click", () => { const i = +b.dataset.up; [p.raw[i - 1], p.raw[i]] = [p.raw[i], p.raw[i - 1]]; rerender(); const t = main.querySelector(`[data-up="${i - 1}"]`) || main.querySelector(`[data-down="${i - 1}"]`); t && t.focus(); }));
        main.querySelectorAll("[data-down]").forEach((b) => b.addEventListener("click", () => { const i = +b.dataset.down; [p.raw[i + 1], p.raw[i]] = [p.raw[i], p.raw[i + 1]]; rerender(); const t = main.querySelector(`[data-down="${i + 1}"]`) || main.querySelector(`[data-up="${i + 1}"]`); t && t.focus(); }));
      }
      const v = $("#validate");
      v && v.addEventListener("click", () => {
        const raw = Array.isArray(p.raw) ? [...p.raw] : p.raw;
        st.answers[d.id] = { raw, ...evaluate(d, raw) };
        play();
        const fb = $("#fbz"); fb && fb.scrollIntoView({ behavior: "smooth", block: "nearest" });
        $("#next") && $("#next").focus({ preventScroll: true });
      });
    } else {
      $("#next").addEventListener("click", () => {
        if (st.idx < st.mod.decisions.length - 1) { st.idx++; go("play"); }
        else go("end", st.mod);
      });
    }
    $("#prev").addEventListener("click", () => { if (st.idx > 0) { st.idx--; go("play"); } });
  }

  function tally(m) {
    const c = { ok: 0, risque: 0, exces: 0, ecart: 0 };
    (m ? m.decisions : M.flatMap((x) => x.decisions)).forEach((d) => { const a = st.answers[d.id]; if (a) c[a.cat]++; });
    return c;
  }
  const bars = (c, n) => `<div class="bars">${Object.keys(C).map((k) => `<div class="bar"><span>${C[k].label}</span><span class="t"><i style="width:${n ? (c[k] / n) * 100 : 0}%;background:${CATCOL[k]}"></i></span><b>${c[k]}</b></div>`).join("")}</div>`;

  /* ---------------- Fin de module ---------------- */
  function end(m) {
    track(`Module ${m.num} terminé`);
    const c = tally(m), n = m.decisions.length;
    const next = M[M.indexOf(m) + 1];
    const allDone = M.every((x) => doneCount(x) === x.decisions.length);
    if (allDone && !st.finished) { st.finished = true; track("Parcours terminé"); }
    main.innerHTML = `<div style="--mc:${PCCOL[m.color]}">
      <p class="eyebrow">Module ${m.num} terminé</p>
      <h1>${esc(m.titre)} : ${c.ok} décision${c.ok > 1 ? "s" : ""} juste${c.ok > 1 ? "s" : ""} sur ${n}</h1>
      <div class="card" style="margin-top:1rem">${bars(c, n)}
        <div class="list">${m.decisions.map((d) => `<div><span>${esc(d.titre)}</span>${st.answers[d.id] ? chip(st.answers[d.id].cat) : '<span class="chip">Non joué</span>'}</div>`).join("")}</div></div>
      <div class="card retenir" style="margin-top:1rem"><h2>À retenir</h2><ul>${m.retenir.map((r) => `<li>${esc(r)}</li>`).join("")}</ul></div>
      <div class="row noprint">
        ${next ? `<button class="btn" id="nx">Module ${next.num} : ${esc(next.titre)}</button>` : ""}
        <button class="btn ${next ? "ghost" : ""}" id="rp">Voir le bilan complet</button>
        <button class="btn ghost" id="rs">Rejouer ce module</button>
        <button class="btn ghost" id="att">Mon attestation du module</button>
      </div></div>`;
    next && $("#nx").addEventListener("click", () => startModule(next.id));
    $("#rp").addEventListener("click", () => go("report"));
    $("#att").addEventListener("click", () => window.SGAttestation && window.SGAttestation.open({ jeu: "Chambre par chambre", module: `module ${m.num} : ${m.titre}`, code: "CPC", color: "#1e5a47", ratio: c.ok / n, critical: c.risque }));
    $("#rs").addEventListener("click", () => { m.decisions.forEach((d) => delete st.answers[d.id]); st.pending = null; startModule(m.id); });
  }

  /* ---------------- Bilan ---------------- */
  function reportHtml(forFile) {
    const c = tally(), n = Object.keys(st.answers).length;
    const date = new Date().toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" });
    return `<p class="eyebrow">Bilan du parcours · ${date}</p>
      <h1>${c.ok} décisions justes sur ${n} jouées (${TOTAL} au total)</h1>
      <p class="muted small">Référentiel BMR et BHRe : ${esc(refName())}. Bilan anonyme, non conservé.</p>
      <div class="card" style="margin-top:1rem">${bars(c, n)}</div>
      ${M.map((m) => `<div class="card" style="margin-top:1rem;--mc:${PCCOL[m.color]};border-top:5px solid var(--mc)"><h2>Module ${m.num} · ${esc(m.titre)}</h2>
        <div class="list">${m.decisions.map((d) => `<div><span>${esc(d.titre)}${d.div ? " <small class='muted'>(divergence)</small>" : ""}</span>${st.answers[d.id] ? chip(st.answers[d.id].cat) : '<span class="chip">Non joué</span>'}</div>`).join("")}</div>
        <p class="small" style="margin-top:.8rem"><b>À retenir :</b> ${m.retenir.map(esc).join(" ")}</p></div>`).join("")}
      ${forFile ? "" : ""}`;
  }
  function report() {
    main.innerHTML = reportHtml() + `<div class="row noprint">${Object.keys(st.answers).length === TOTAL ? `<button class="btn" id="att">Obtenir mon attestation</button>` : ""}<button class="btn ${Object.keys(st.answers).length === TOTAL ? "ghost" : ""}" id="pr">Imprimer</button><button class="btn ghost" id="dl">Télécharger le bilan</button><button class="btn ghost" id="bk">Retour aux modules</button></div>`;
    $("#pr").addEventListener("click", () => window.print());
    $("#att") && $("#att").addEventListener("click", () => { const c = tally(); window.SGAttestation && window.SGAttestation.open({ jeu: "Chambre par chambre", module: `parcours complet des ${M.length} modules`, code: "CPC", color: "#1e5a47", ratio: c.ok / TOTAL, critical: c.risque }); });
    $("#bk").addEventListener("click", () => go("home"));
    $("#dl").addEventListener("click", () => {
      const css = [...document.styleSheets].map((s) => { try { return [...s.cssRules].map((r) => r.cssText).join("\n"); } catch { return ""; } }).join("\n");
      const html = `<!doctype html><html lang="fr"><head><meta charset="utf-8"><title>Bilan · Chambre par chambre</title><style>${css}</style></head><body><main>${reportHtml(true)}</main></body></html>`;
      const a = document.createElement("a");
      a.href = URL.createObjectURL(new Blob([html], { type: "text/html" }));
      a.download = "bilan-chambre-par-chambre.html";
      document.body.appendChild(a); a.click(); a.remove();
    });
  }

  /* ---------------- Aide-mémoire ---------------- */
  function memo() {
    const D = window.DIVERGENCE;
    main.innerHTML = `<p class="eyebrow">Aide-mémoire</p><h1>Sept précautions, une fiche chacune</h1>
      <p class="muted">D'après la procédure Pôle MS v03, complétée par les sources nationales et régionales. La mise en place et la levée relèvent toujours d'une prescription médicale.</p>
      <div class="memo" style="margin-top:1.2rem">${window.PC_TYPES.map((t) => `<section class="card" style="--pc:${PCCOL[t.key]}">
        <h2><span class="pc-dot" style="background:var(--pc)"></span>${esc(t.nom)} <span class="chip">${esc(t.sigle)}</span></h2>
        <p class="small"><b>Pour :</b> ${esc(t.pour)}</p><ul>${t.mesures.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>
        <div class="lv"><b>Levée :</b> ${esc(t.levee)}</div></section>`).join("")}</div>
      <section class="card refbox" style="margin-top:1.4rem;grid-template-columns:1fr"><h2>${esc(D.titre)}</h2>${D.texte.map((p) => `<p class="small">${esc(p)}</p>`).join("")}
        <p class="small">Sources : ${refsHtml(["proc", "bhre2026", "idf2023", "bzh2026"])}</p></section>
      <section class="card" style="margin-top:1rem"><h2>Signaler</h2><p class="small">Cas groupés : au moins 5 cas de gastro-entérite ou d'infection respiratoire aiguë en 4 jours parmi les résidents. Le médecin coordonnateur signale à l'ARS (portail des signalements), puis transmet le bilan final avec la courbe épidémique. Sources : ${refsHtml(["gea2010", "ira2012"])}</p></section>
      <div class="row noprint"><button class="btn ghost" onclick="window.print()">Imprimer l'aide-mémoire</button></div>`;
  }

  /* ---------------- Animer ---------------- */
  function guide() {
    main.innerHTML = `<div class="prose"><p class="eyebrow">Guide d'animation</p><h1>Animer une séance de 45 minutes</h1>
      <p>Public : AS, AMP, ASH, IDE, IDEC, médecin coordonnateur, intervenants extérieurs. Format : petit groupe de 4 à 10 personnes devant un écran, ou parcours individuel suivi d'un débriefing.</p>
      <h2>Déroulé proposé</h2>
      <ol><li><b>5 minutes, cadrage.</b> Rappeler que les cas sont fictifs, que la procédure locale prévaut et que le bilan n'est ni conservé ni noté. L'attestation finale n'indique que le palier atteint.</li>
      <li><b>10 minutes, module 1.</b> Le socle : faire voter le groupe à main levée avant chaque validation.</li>
      <li><b>10 minutes, module 2 ou 3 selon le public.</b> Soignants : module 3 (organisation). Encadrement : module 2 (choix du type).</li>
      <li><b>10 minutes, module 4.</b> Lire la chronologie à voix haute ; faire justifier le critère de levée.</li>
      <li><b>10 minutes, débriefing.</b> Revenir sur les mesures excessives : qu'ont-elles coûté au résident ? Puis sur la divergence BMR/BHRe : basculer le référentiel et comparer.</li></ol>
      <h2>Questions de débriefing</h2>
      <ul><li>Quelle situation de votre unité ressemble le plus à un des dossiers ?</li><li>Où se trouve l'UMP chez nous, et qui la réapprovisionne ?</li><li>Qui prescrit la levée, et comment l'information arrive-t-elle à l'équipe de nuit et aux ASH du prestataire ?</li><li>Que dit-on à une famille qui découvre l'affiche ?</li></ul>
      <h2>Le module 5 en séance dédiée</h2>
      <p>Le module « Cas groupés » se prête à une séance avec le médecin coordonnateur et la direction : tracer ensemble la courbe épidémique sur papier, puis comparer avec les décisions du jeu.</p></div>`;
  }

  /* ---------------- Sources ---------------- */
  function sources() {
    main.innerHTML = `<p class="eyebrow">Sources</p><h1>Références utilisées</h1>
      <p class="muted">La procédure de l'établissement sert de base. Les sources nationales et régionales complètent les points qu'elle ne détaille pas (durées de levée respiratoires, tuberculose, signalement, AES) et éclairent la divergence BMR/BHRe.</p>
      <ul class="srcs">${Object.values(S).map((s) => `<li><b>${esc(s.court)}</b>${s.url ? `<a href="${s.url}" target="_blank" rel="noopener">${esc(s.titre)}</a>` : esc(s.titre)}</li>`).join("")}</ul>`;
  }

  go("home");
})();
