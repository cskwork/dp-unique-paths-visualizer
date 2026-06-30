/* Generic play/pause/step/reset/speed-cycle transport engine, shared by every problem page's
   visualizer. It owns only the step index and timer state; it knows nothing about grids, arrays,
   or how many visualization "modes" a problem has. All actual rendering happens in the
   `onChange(stepIndex)` callback the page supplies: `stepIndex` is -1 at the idle/reset state,
   0..totalSteps-1 while stepping. A page with a mode toggle (2D/1D, brute-force/optimized, etc.)
   reads its own `mode` variable inside that callback; this engine is deliberately unaware of it,
   so a problem with only one visualization mode needs none of that extra wiring. */
(function (global) {
  "use strict";

  var DEFAULT_IDS = {
    play: "btnPlay", back: "btnBack", fwd: "btnFwd", reset: "btnReset", speed: "btnSpeed",
    iconPlay: "iconPlay", iconPause: "iconPause", stepNow: "stepNow", stepMax: "stepMax"
  };
  var DEFAULT_SPEEDS = [1400, 700, 350];
  var DEFAULT_SPEED_LABELS = ["0.5×", "1×", "2×"];

  function create(opts) {
    opts = opts || {};
    if (typeof opts.totalSteps !== "number" || opts.totalSteps < 1) {
      throw new Error("StepPlayer.create requires a positive integer totalSteps");
    }
    if (typeof opts.onChange !== "function") {
      throw new Error("StepPlayer.create requires an onChange(stepIndex) callback");
    }

    var total = opts.totalSteps;
    var onChange = opts.onChange;
    var ids = Object.assign({}, DEFAULT_IDS, opts.ids || {});
    var speeds = opts.speeds || DEFAULT_SPEEDS;
    var speedLabels = opts.speedLabels || DEFAULT_SPEED_LABELS;
    var speedIdx = typeof opts.startSpeedIndex === "number" ? opts.startSpeedIndex : 1;

    var current = -1;
    var playing = false;
    var timer = null;

    var el = {};
    Object.keys(ids).forEach(function (key) { el[key] = document.getElementById(ids[key]); });
    if (el.stepMax) el.stepMax.textContent = total;
    if (el.speed) el.speed.textContent = speedLabels[speedIdx];

    function setIcon() {
      if (!el.iconPlay || !el.iconPause) return;
      el.iconPlay.style.display = playing ? "none" : "";
      el.iconPause.style.display = playing ? "" : "none";
    }

    function goTo(idx) {
      current = Math.max(-1, Math.min(total - 1, idx));
      if (el.stepNow) el.stepNow.textContent = Math.max(current + 1, 0);
      onChange(current);
      if (current === total - 1) pause();
    }

    function play() {
      if (current >= total - 1) current = -1;
      playing = true;
      setIcon();
      timer = setInterval(function () { goTo(current + 1); }, speeds[speedIdx]);
    }

    function pause() {
      playing = false;
      setIcon();
      if (timer) { clearInterval(timer); timer = null; }
    }

    function toggle() { if (playing) pause(); else play(); }
    function stepForward() { pause(); goTo(current + 1); }
    function stepBack() { pause(); goTo(current - 1); }
    function reset() { pause(); goTo(-1); }

    function cycleSpeed() {
      speedIdx = (speedIdx + 1) % speeds.length;
      if (el.speed) el.speed.textContent = speedLabels[speedIdx];
      if (playing) { pause(); play(); }
    }

    if (el.play) el.play.addEventListener("click", toggle);
    if (el.back) el.back.addEventListener("click", stepBack);
    if (el.fwd) el.fwd.addEventListener("click", stepForward);
    if (el.reset) el.reset.addEventListener("click", reset);
    if (el.speed) el.speed.addEventListener("click", cycleSpeed);

    goTo(-1);

    return {
      play: play, pause: pause, toggle: toggle,
      stepForward: stepForward, stepBack: stepBack, reset: reset,
      goTo: goTo, cycleSpeed: cycleSpeed,
      isPlaying: function () { return playing; },
      current: function () { return current; }
    };
  }

  global.StepPlayer = { create: create };
})(window);
