// Global text-size scaler. Lives in the header on every page. Sets the --fs custom
// property on <html>; base.css expresses every content font-size as calc(px * var(--fs)).
// The default (1) already bakes in a +2px bump; the A- / A+ buttons scale 85% to 150%.
// The middle button shows the current percentage and resets on click.
// localStorage persists the choice; guarded so it still works under file://.
(function () {
  "use strict";
  var KEY = "algo-font-scale";
  var MIN = 0.85, MAX = 1.5, STEP = 0.05, DEFAULT = 1;
  var root = document.documentElement;
  var down = document.getElementById("fsDown");
  var up = document.getElementById("fsUp");
  var reset = document.getElementById("fsReset");
  if (!down || !up || !reset) return;

  var storage = (function () {
    try { var t = "__t"; localStorage.setItem(t, "1"); localStorage.removeItem(t); return localStorage; }
    catch (e) { return null; }
  })();

  function snap(v) { return Math.round(v / STEP) * STEP; }
  function clamp(v) { return Math.max(MIN, Math.min(MAX, v)); }
  function apply(fs) { root.style.setProperty("--fs", fs.toFixed(2)); }
  function sync(fs) {
    reset.textContent = Math.round(fs * 100) + "%";
    down.disabled = fs <= MIN + 0.001;
    up.disabled = fs >= MAX - 0.001;
  }

  var stored = storage ? parseFloat(storage.getItem(KEY)) : NaN;
  var fs = isFinite(stored) ? clamp(snap(stored)) : DEFAULT;
  apply(fs);
  sync(fs);

  function set(next) {
    fs = clamp(snap(next));
    apply(fs);
    sync(fs);
    if (storage) storage.setItem(KEY, fs.toFixed(2));
  }
  up.addEventListener("click", function () { set(fs + STEP); });
  down.addEventListener("click", function () { set(fs - STEP); });
  reset.addEventListener("click", function () { set(DEFAULT); });
})();
