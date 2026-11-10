(() => {
  const $ = id => document.getElementById(id);
  const state = { mod: "instructions", lang: "tl" };
  try { state.lang = localStorage.getItem("otagaisama.lang") || "tl"; } catch (e) {}
  let current = null;

  function card(item) {
    const b = document.createElement("button");
    b.className = "card";
    b.innerHTML = `<span class="i">${item.icon}</span><span class="j">${item.ja}</span>` +
      `<span class="n">${item.translations[state.lang]}</span>` +
      (item.note ? `<span class="sub">${item.note}</span>` : "");
    b.addEventListener("click", () => open(item));
    return b;
  }

  function render() {
    document.body.dataset.mod = state.mod;
    document.querySelectorAll(".tab").forEach(t => t.setAttribute("aria-selected", t.dataset.mod === state.mod));
    const main = $("board");
    main.innerHTML = "";
    const items = BOARD_DATA[state.mod];
    if (state.mod === "sharedCards") {
      Object.entries(BOARD_DATA.categories).forEach(([cat, name]) => {
        const h = document.createElement("h2"); h.textContent = name;
        const g = document.createElement("div"); g.className = "grid";
        items.filter(i => i.cat === cat).forEach(i => g.appendChild(card(i)));
        main.append(h, g);
      });
    } else {
      const g = document.createElement("div"); g.className = "grid";
      items.forEach(i => g.appendChild(card(i)));
      main.appendChild(g);
    }
  }

  function open(item) {
    current = item;
    $("oIcon").textContent = item.icon;
    $("oJa").innerHTML = item.ja;
    $("oNative").textContent = item.translations[state.lang];
    $("overlay").hidden = false;
    $("oClose").focus();
    Sound.play(item.speechJa, item.translations[state.lang], state.lang);
  }
  function close() { $("overlay").hidden = true; Sound.stop(); }

  const tabs = $("tabs");
  Object.entries(BOARD_DATA.modules).forEach(([key, m]) => {
    const t = document.createElement("button");
    t.className = "tab"; t.dataset.mod = key; t.setAttribute("role", "tab");
    t.innerHTML = `${m.label}<small>${m.sub}</small>`;
    t.addEventListener("click", () => { state.mod = key; render(); });
    tabs.appendChild(t);
  });

  $("lang").value = state.lang;
  $("lang").addEventListener("change", e => {
    state.lang = e.target.value;
    try { localStorage.setItem("otagaisama.lang", state.lang); } catch (err) {}
    render();
  });
  $("mute").addEventListener("click", e => {
    const m = e.currentTarget.getAttribute("aria-pressed") !== "true";
    e.currentTarget.setAttribute("aria-pressed", m);
    e.currentTarget.textContent = m ? "🔇 おと なし" : "🔊 おと";
    Sound.setMuted(m);
  });
  $("oClose").addEventListener("click", close);
  $("oReplay").addEventListener("click", () => current && Sound.play(current.speechJa, current.translations[state.lang], state.lang));
  $("overlay").addEventListener("click", e => { if (e.target.id === "overlay") close(); });
  document.addEventListener("keydown", e => { if (e.key === "Escape") close(); });

  render();
  if ("serviceWorker" in navigator) navigator.serviceWorker.register("sw.js").catch(() => {});
})();
