const Sound = (() => {
  let ctx = null, muted = false, token = 0;
  const LANG = { ja: "ja-JP", tl: "tl-PH", en: "en-US", vi: "vi-VN" };

  function chime() {
    try {
      ctx = ctx || new (window.AudioContext || window.webkitAudioContext)();
      if (ctx.state === "suspended") ctx.resume();
      const t = ctx.currentTime;
      [[437, 0.25], [655.5, 0.12]].forEach(([f, v]) => {
        const o = ctx.createOscillator(), g = ctx.createGain();
        o.type = "sine"; o.frequency.value = f;
        g.gain.setValueAtTime(v, t);
        g.gain.exponentialRampToValueAtTime(0.0001, t + 1.2);
        o.connect(g).connect(ctx.destination);
        o.start(t); o.stop(t + 1.25);
      });
    } catch (e) { /* 音が出なくても表示は続ける */ }
  }

  function say(text, lang, rate, onend) {
    const u = new SpeechSynthesisUtterance(text);
    u.lang = LANG[lang]; u.rate = rate;
    const v = speechSynthesis.getVoices().find(x => x.lang.replace("_", "-").toLowerCase().startsWith(LANG[lang].slice(0, 2).toLowerCase()));
    if (v) u.voice = v;
    u.onend = u.onerror = onend || null;
    speechSynthesis.speak(u);
  }

  function play(speechJa, nativeText, nativeLang) {
    if (muted) return;
    const my = ++token;
    chime();
    if (!("speechSynthesis" in window)) return;
    speechSynthesis.cancel();
    setTimeout(() => {
      if (my !== token) return;
      say(speechJa, "ja", 0.85, () => {
        if (my === token) say(nativeText, nativeLang, 0.9);
      });
    }, 700);
  }

  return {
    play,
    stop() { token++; if ("speechSynthesis" in window) speechSynthesis.cancel(); },
    setMuted(m) { muted = m; if (m) this.stop(); }
  };
})();
