/* Layar loading. Tampil sampai halaman (font, gambar, dll) selesai dimuat.
   Atur lama minimal di MIN (milidetik). Kalau terlalu lama, otomatis dibuka di MAX. */
(function () {
  const L = document.getElementById("loader"); if (!L) return;
  const num = document.getElementById("ldNum"), bar = document.getElementById("ldBar");
  const still = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const MIN = still ? 300 : 1800;   // minimal tampil (ms)  <-- ubah kalau mau lebih cepat/lambat
  const MAX = 6000;                  // batas paling lama (ms), supaya tidak nyangkut
  const t0 = performance.now();
  let loaded = document.readyState === "complete", p = 0, done = false;

  document.documentElement.classList.add("loading");
  addEventListener("load", () => { loaded = true; });

  function show(v) { num.textContent = Math.round(v); bar.style.transform = "scaleX(" + v / 100 + ")"; }
  function finish() {
    if (done) return; done = true; show(100);
    L.classList.add("out");
    document.documentElement.classList.remove("loading");
    setTimeout(() => L.remove(), 1000);
  }
  function tick(now) {
    const t = now - t0;
    const target = (loaded && t >= MIN) ? 100 : Math.min(90, t / MIN * 90);
    p += (target - p) * .1;
    show(p);
    if ((p > 99.4 && target === 100) || t > MAX) return setTimeout(finish, 250);
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
