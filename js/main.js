/* ============================================================================
   LENNOR — motion engine
   Smooth scroll · reveals · pinned scrubs · cursor · transitions
   ========================================================================= */

(function () {
  "use strict";

  var doc = document;
  var win = window;
  var body = doc.body;

  var reduced = win.matchMedia("(prefers-reduced-motion: reduce)").matches;
  var finePointer = win.matchMedia("(hover: hover) and (pointer: fine)").matches;
  var vh = win.innerHeight;
  var scrollY = win.scrollY || 0;

  /* ---- ready gate (hero waits for loader) --------------------------------- */

  var readyFlag = false;
  var gatedQueue = [];

  function releaseGate() {
    if (readyFlag) return;
    readyFlag = true;
    for (var i = 0; i < gatedQueue.length; i++) gatedQueue[i].classList.add("is-in");
    gatedQueue.length = 0;
    body.classList.add("is-ready");
  }

  /* ---- lenis smooth scroll ------------------------------------------------ */

  var lenis = null;
  if (!reduced && typeof win.Lenis === "function") {
    lenis = new win.Lenis({
      lerp: 0.095,
      wheelMultiplier: 1,
      smoothWheel: true,
    });
    var lenisRaf = function (time) {
      lenis.raf(time);
      requestAnimationFrame(lenisRaf);
    };
    requestAnimationFrame(lenisRaf);
    lenis.on("scroll", function (e) {
      scrollY = e.scroll;
    });
  } else {
    win.addEventListener(
      "scroll",
      function () {
        scrollY = win.scrollY;
      },
      { passive: true }
    );
  }

  function scrollToTarget(target) {
    var el = typeof target === "string" ? doc.querySelector(target) : target;
    if (el) el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
  }

  /* ---- boot --------------------------------------------------------------- */

  function isInternalLink(a) {
    if (!a) return false;
    var href = a.getAttribute("href") || "";
    if (!href || href.charAt(0) === "#") return false;
    if (a.target === "_blank" || a.hasAttribute("download")) return false;
    if (/^(https?:)?\/\//i.test(href) && a.host !== location.host) return false;
    if (/^(mailto|tel|sms):/i.test(href)) return false;
    return true;
  }

  doc.addEventListener("click", function (e) {
    if (e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || e.button !== 0) return;
    var a = e.target.closest ? e.target.closest("a") : null;
    if (!a || !isInternalLink(a)) return;

    var href = a.getAttribute("href");
    var hashIdx = href.indexOf("#");
    var samePage =
      href.split("#")[0] === location.pathname.split("/").pop() ||
      href.split("#")[0] === "";

    if (hashIdx > -1 && samePage) {
      e.preventDefault();
      var id = href.slice(hashIdx);
      if (id.length > 1) scrollToTarget(id);
      body.classList.remove("menu-open");
      return;
    }
    // no curtain, navigate directly
    body.classList.remove("menu-open");
  });


  /* ---- nav ---------------------------------------------------------------- */

  var nav = doc.getElementById("nav");
  var burger = doc.getElementById("burger");
  var lastY = 0;

  function navFrame() {
    if (!nav) return;
    var y = scrollY;
    nav.classList.toggle("is-scrolled", y > 24);
    if (y > 640 && y > lastY + 6 && !body.classList.contains("menu-open")) {
      nav.classList.add("is-hidden");
    } else if (y < lastY - 4 || y < 640) {
      nav.classList.remove("is-hidden");
    }
    lastY = y;
  }

  if (burger) {
    burger.addEventListener("click", function () {
      var open = body.classList.toggle("menu-open");
      burger.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }
  doc.addEventListener("keydown", function (e) {
    if (e.key === "Escape" && body.classList.contains("menu-open")) {
      body.classList.remove("menu-open");
      if (burger) burger.setAttribute("aria-expanded", "false");
      
    }
  });

  /* ---- intersection reveals ------------------------------------------------ */

  var io = new IntersectionObserver(
    function (entries) {
      for (var i = 0; i < entries.length; i++) {
        var en = entries[i];
        if (!en.isIntersecting) continue;
        var el = en.target;
        io.unobserve(el);
        if (el.hasAttribute("data-gate") && !readyFlag) {
          gatedQueue.push(el);
        } else {
          el.classList.add("is-in");
        }
      }
    },
    { rootMargin: "0px 0px -8% 0px", threshold: 0.06 }
  );

  var revealEls = doc.querySelectorAll("[data-reveal],[data-mask],[data-plate],[data-io]");
  for (var r = 0; r < revealEls.length; r++) io.observe(revealEls[r]);

  /* ---- counters ------------------------------------------------------------ */

  var counterIo = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (en) {
        if (!en.isIntersecting) return;
        counterIo.unobserve(en.target);
        var el = en.target;
        var end = parseFloat(el.getAttribute("data-count") || "0");
        var t0 = null;
        var DUR = 1700;
        function step(now) {
          if (!t0) t0 = now;
          var p = Math.min(1, (now - t0) / DUR);
          var eased = 1 - Math.pow(1 - p, 4);
          el.textContent = String(Math.round(eased * end));
          if (p < 1) requestAnimationFrame(step);
        }
        if (reduced) {
          el.textContent = String(end);
        } else {
          requestAnimationFrame(step);
        }
      });
    },
    { threshold: 0.5 }
  );
  var counters = doc.querySelectorAll("[data-count]");
  for (var c = 0; c < counters.length; c++) counterIo.observe(counters[c]);

  /* ---- word scrub (manifesto) ---------------------------------------------- */

  var scrubs = [];
  var scrubEls = doc.querySelectorAll("[data-scrub]");
  scrubEls.forEach(function (el) {
    var text = el.textContent.trim();
    var words = text.split(/\s+/);
    el.textContent = "";
    var frag = doc.createDocumentFragment();
    var spans = [];
    words.forEach(function (w, i) {
      var s = doc.createElement("span");
      s.className = "w";
      s.textContent = w;
      frag.appendChild(s);
      if (i < words.length - 1) frag.appendChild(doc.createTextNode(" "));
      spans.push(s);
    });
    el.appendChild(frag);
    scrubs.push({ el: el, spans: spans, lit: -1 });
  });

  function scrubFrame() {
    for (var i = 0; i < scrubs.length; i++) {
      var s = scrubs[i];
      var rect = s.el.getBoundingClientRect();
      if (rect.bottom < -80 || rect.top > vh + 80) continue;
      var start = vh * 0.82;
      var end = vh * 0.36;
      var total = rect.height + (start - end);
      var p = (start - rect.top) / total;
      p = Math.max(0, Math.min(1, p));
      var target = Math.floor(p * s.spans.length);
      if (target === s.lit) continue;
      if (reduced) target = s.spans.length;
      for (var j = 0; j < s.spans.length; j++) {
        s.spans[j].classList.toggle("is-lit", j < target);
      }
      s.lit = target;
    }
  }

  /* ---- parallax media ------------------------------------------------------ */

  var pllx = [];
  doc.querySelectorAll("[data-parallax]").forEach(function (el) {
    pllx.push({
      el: el,
      depth: parseFloat(el.getAttribute("data-parallax") || "8"),
    });
  });

  function parallaxFrame() {
    for (var i = 0; i < pllx.length; i++) {
      var p = pllx[i];
      var holder = p.el.parentElement;
      var rect = holder.getBoundingClientRect();
      if (rect.bottom < -120 || rect.top > vh + 120) continue;
      var prog = (rect.top + rect.height / 2 - vh / 2) / (vh + rect.height);
      var shift = -prog * p.depth;
      p.el.style.transform = "translate3d(0," + shift.toFixed(3) + "%,0)";
    }
  }

  /* ---- anatomy cutaway: scan the cross-section ------------------------------ */

  var cutWrap = doc.getElementById("cut");
  var cutData = null;
  if (cutWrap) {
    var cutPlies = cutWrap.querySelectorAll(".cut__ply");
    var cutRows = cutWrap.querySelectorAll(".cut__row");
    var cutScan = cutWrap.querySelector(".cut__scan");
    if (cutPlies.length) {
      cutData = {
        wrap: cutWrap,
        plies: cutPlies,
        rows: cutRows,
        scan: cutScan,
        last: -1,
        held: -1, // index pinned by hover, -1 = follow scroll
      };
    }
  }

  function setCutLayer(i) {
    if (!cutData) return;
    for (var n = 0; n < cutData.plies.length; n++) {
      cutData.plies[n].classList.toggle("is-on", n === i);
    }
    for (var r = 0; r < cutData.rows.length; r++) {
      cutData.rows[r].classList.toggle("is-on", r === i);
    }
    var el = cutData.plies[i];
    if (el && cutData.scan) {
      cutData.scan.style.top = el.offsetTop + el.offsetHeight / 2 + "px";
    }
  }

  if (cutData) {
    // hovering a ply or its spec row takes over from the scroll position
    var hold = function (i) {
      return function () {
        cutData.held = i;
        setCutLayer(i);
      };
    };
    var release = function () {
      cutData.held = -1;
      cutData.last = -1;
    };
    for (var ci = 0; ci < cutData.plies.length; ci++) {
      cutData.plies[ci].addEventListener("mouseenter", hold(ci));
      cutData.plies[ci].addEventListener("mouseleave", release);
      cutData.rows[ci].addEventListener("mouseenter", hold(ci));
      cutData.rows[ci].addEventListener("mouseleave", release);
    }
    setCutLayer(0);
  }

  function cutFrame() {
    if (!cutData || cutData.held !== -1) return;
    var rect = cutData.wrap.getBoundingClientRect();
    if (rect.bottom < 0 || rect.top > vh) return;
    var p = (vh * 0.74 - rect.top) / (rect.height + vh * 0.42);
    p = Math.max(0, Math.min(0.9999, p));
    var i = Math.floor(p * cutData.plies.length);
    if (i === cutData.last) return;
    cutData.last = i;
    setCutLayer(i);
  }

  /* ---- pre-cut: canvas-drawn plywood cutting animation ---------------------- */

  var plyStage = doc.getElementById("plyStage");
  if (plyStage) {
    var plyCutCanvas = doc.getElementById("plyCutCanvas");
    var plyCutCtx = plyCutCanvas.getContext("2d");
    var plyStatusEl = doc.getElementById("plyStatus");
    var plyDpr = win.devicePixelRatio || 1;

    function plyResize() {
      var r = plyStage.getBoundingClientRect();
      plyCutCanvas.width = r.width * plyDpr;
      plyCutCanvas.height = r.height * plyDpr;
      plyCutCtx.setTransform(plyDpr, 0, 0, plyDpr, 0, 0);
    }
    plyResize();
    win.addEventListener("resize", plyResize);

    var PLY_LAYOUTS = [
      { name: "Door set · 3 parts", cuts: [
        { x1: .475, y1: -.02, x2: .475, y2: 1.02 },
        { x1: .465, y1: .48, x2: 1.02, y2: .48 }
      ], parts: [
        { x: 0, y: 0, w: .473, h: 1, tag: "2000 × 760" },
        { x: .477, y: 0, w: .523, h: .478, tag: "760 × 360" },
        { x: .477, y: .482, w: .523, h: .518, tag: "760 × 380" }
      ]},
      { name: "Cabinet kit · 6 parts", cuts: [
        { x1: .333, y1: -.02, x2: .333, y2: 1.02 },
        { x1: .666, y1: -.02, x2: .666, y2: 1.02 },
        { x1: -.02, y1: .5, x2: .331, y2: .5 },
        { x1: .335, y1: .5, x2: .664, y2: .5 },
        { x1: .668, y1: .5, x2: 1.02, y2: .5 }
      ], parts: [
        { x: 0, y: 0, w: .331, h: .498, tag: "380 × 400" },
        { x: 0, y: .502, w: .331, h: .498, tag: "380 × 400" },
        { x: .335, y: 0, w: .329, h: .498, tag: "370 × 400" },
        { x: .335, y: .502, w: .329, h: .498, tag: "370 × 400" },
        { x: .668, y: 0, w: .332, h: .498, tag: "370 × 400" },
        { x: .668, y: .502, w: .332, h: .498, tag: "370 × 400" }
      ]},
      { name: "Mixed list · 5 parts", cuts: [
        { x1: -.02, y1: .38, x2: 1.02, y2: .38 },
        { x1: .35, y1: .36, x2: .35, y2: 1.02 },
        { x1: .65, y1: .36, x2: .65, y2: 1.02 },
        { x1: .648, y1: .7, x2: 1.02, y2: .7 }
      ], parts: [
        { x: 0, y: 0, w: 1, h: .378, tag: "2440 × 460" },
        { x: 0, y: .382, w: .348, h: .618, tag: "850 × 750" },
        { x: .352, y: .382, w: .296, h: .618, tag: "720 × 750" },
        { x: .652, y: .382, w: .348, h: .316, tag: "850 × 385" },
        { x: .652, y: .702, w: .348, h: .298, tag: "850 × 365" }
      ]}
    ];

    var plyVisible = true;
    new win.IntersectionObserver(
      function (entries) {
        for (var i = 0; i < entries.length; i++) plyVisible = entries[i].isIntersecting;
      },
      { threshold: 0.15 }
    ).observe(plyStage);

    var plyBL = 0.06, plyBT = 0.06, plyBW = 0.88, plyBH = 0.88;
    var plyLIdx = 0, plyPhase = "board";
    var plyCutI = 0, plyCutP = 0, plyCutActive = false;
    var plyDoneCuts = [], plyDust = [];
    var plySepT = 0, plyFadeT = 0;
    var plyCurLayout = PLY_LAYOUTS[0];

    function plyC01(v) { return Math.max(0, Math.min(1, v)); }
    function plyEase(t) { return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2; }

    function plyDrawBoard(gx, gy, gw, gh, a) {
      plyCutCtx.globalAlpha = a;
      var gr = plyCutCtx.createLinearGradient(gx, gy, gx + gw, gy + gh);
      gr.addColorStop(0, "#d4b58a"); gr.addColorStop(0.3, "#c8a878");
      gr.addColorStop(0.7, "#caa870"); gr.addColorStop(1, "#d0b080");
      plyCutCtx.fillStyle = gr;
      plyCutCtx.beginPath(); plyCutCtx.roundRect(gx, gy, gw, gh, 3); plyCutCtx.fill();
      plyCutCtx.save();
      plyCutCtx.beginPath(); plyCutCtx.roundRect(gx, gy, gw, gh, 3); plyCutCtx.clip();
      plyCutCtx.globalAlpha = a * 0.07;
      plyCutCtx.strokeStyle = "#7a5a2a"; plyCutCtx.lineWidth = 0.7;
      for (var i = 0; i < 30; i++) {
        var yy = gy + (i / 30) * gh + Math.sin(i * 0.8) * 3;
        plyCutCtx.beginPath(); plyCutCtx.moveTo(gx, yy);
        for (var xx = gx; xx < gx + gw; xx += 5)
          plyCutCtx.lineTo(xx, yy + Math.sin(xx * 0.015 + i * 1.2) * 4 + Math.sin(xx * 0.04) * 1.5);
        plyCutCtx.stroke();
      }
      plyCutCtx.restore();
      plyCutCtx.globalAlpha = a;
      plyCutCtx.strokeStyle = "rgba(80,50,20,0.2)"; plyCutCtx.lineWidth = 1;
      plyCutCtx.beginPath(); plyCutCtx.roundRect(gx, gy, gw, gh, 3); plyCutCtx.stroke();
      plyCutCtx.globalAlpha = 1;
    }

    function plyDrawPartBoard(x, y, w, h, a) {
      plyCutCtx.globalAlpha = a;
      var gr = plyCutCtx.createLinearGradient(x, y, x + w, y + h);
      gr.addColorStop(0, "#d4b58a"); gr.addColorStop(1, "#caa870");
      plyCutCtx.fillStyle = gr;
      plyCutCtx.beginPath(); plyCutCtx.roundRect(x, y, w, h, 2); plyCutCtx.fill();
      plyCutCtx.save();
      plyCutCtx.beginPath(); plyCutCtx.roundRect(x, y, w, h, 2); plyCutCtx.clip();
      plyCutCtx.globalAlpha = a * 0.06;
      plyCutCtx.strokeStyle = "#7a5a2a"; plyCutCtx.lineWidth = 0.6;
      for (var i = 0; i < 12; i++) {
        var yy = y + (i / 12) * h;
        plyCutCtx.beginPath(); plyCutCtx.moveTo(x, yy);
        for (var xx = x; xx < x + w; xx += 5)
          plyCutCtx.lineTo(xx, yy + Math.sin(xx * 0.015 + i) * 3);
        plyCutCtx.stroke();
      }
      plyCutCtx.restore();
      plyCutCtx.globalAlpha = 1;
    }

    function plySpawnDust(px, py, dx, dy) {
      if (reduced) return;
      for (var i = 0; i < 4; i++) {
        var sp = 0.8 + Math.random() * 2.2;
        var ang = Math.atan2(dy, dx) + (Math.random() - 0.5) * 2.2;
        plyDust.push({
          x: px + (Math.random() - 0.5) * 4, y: py + (Math.random() - 0.5) * 4,
          vx: Math.cos(ang) * sp + (Math.random() - 0.5) * 0.8,
          vy: Math.sin(ang) * sp - Math.random() * 1.2,
          life: 1, size: 0.8 + Math.random() * 2.5, a: 0.3 + Math.random() * 0.5
        });
      }
    }

    function plyTickDust() {
      for (var i = plyDust.length - 1; i >= 0; i--) {
        var d = plyDust[i];
        d.x += d.vx; d.y += d.vy; d.vy += 0.06; d.vx *= 0.98; d.life -= 0.018;
        if (d.life <= 0) plyDust.splice(i, 1);
      }
    }

    function plyDrawDust() {
      for (var i = 0; i < plyDust.length; i++) {
        var d = plyDust[i];
        plyCutCtx.globalAlpha = d.life * d.a;
        plyCutCtx.fillStyle = "#d4b080";
        plyCutCtx.beginPath(); plyCutCtx.arc(d.x, d.y, d.size, 0, Math.PI * 2); plyCutCtx.fill();
      }
      plyCutCtx.globalAlpha = 1;
    }

    function plyDrawHead(px, py) {
      plyCutCtx.fillStyle = "rgba(255,240,200,0.9)";
      plyCutCtx.beginPath(); plyCutCtx.arc(px, py, 5, 0, Math.PI * 2); plyCutCtx.fill();
      plyCutCtx.fillStyle = "rgba(255,220,160,0.3)";
      plyCutCtx.beginPath(); plyCutCtx.arc(px, py, 12, 0, Math.PI * 2); plyCutCtx.fill();
      plyCutCtx.fillStyle = "#fff8e8";
      plyCutCtx.beginPath(); plyCutCtx.arc(px, py, 2, 0, Math.PI * 2); plyCutCtx.fill();
    }

    function plyDrawDoneLines(gx, gy, gw, gh) {
      for (var i = 0; i < plyDoneCuts.length; i++) {
        var c = plyDoneCuts[i];
        plyCutCtx.strokeStyle = "rgba(60,35,10,0.35)"; plyCutCtx.lineWidth = 1.8;
        plyCutCtx.beginPath();
        plyCutCtx.moveTo(gx + plyC01(c.x1) * gw, gy + plyC01(c.y1) * gh);
        plyCutCtx.lineTo(gx + plyC01(c.x2) * gw, gy + plyC01(c.y2) * gh);
        plyCutCtx.stroke();
      }
    }

    function plyDrawActiveCut(gx, gy, gw, gh) {
      if (!plyCutActive || plyCutI >= plyCurLayout.cuts.length) return;
      var c = plyCurLayout.cuts[plyCutI];
      var sx = gx + plyC01(c.x1) * gw, sy = gy + plyC01(c.y1) * gh;
      var ex = gx + plyC01(c.x2) * gw, ey = gy + plyC01(c.y2) * gh;
      var mx = sx + (ex - sx) * plyCutP, my = sy + (ey - sy) * plyCutP;
      plyCutCtx.strokeStyle = "rgba(60,35,10,0.35)"; plyCutCtx.lineWidth = 1.8;
      plyCutCtx.beginPath(); plyCutCtx.moveTo(sx, sy); plyCutCtx.lineTo(mx, my); plyCutCtx.stroke();
      plyDrawHead(mx, my);
      if (plyCutP > 0.01 && plyCutP < 0.99) {
        var ddx = ex - sx, ddy = ey - sy, len = Math.sqrt(ddx * ddx + ddy * ddy) || 1;
        plySpawnDust(mx, my, (-ddy / len) * 2, (ddx / len) * 2);
        plySpawnDust(mx, my, (ddy / len) * 2, (-ddx / len) * 2);
      }
    }

    function plyDrawParts(gx, gy, gw, gh, t, a) {
      var parts = plyCurLayout.parts;
      for (var i = 0; i < parts.length; i++) {
        var p = parts[i];
        var ox = (p.x + p.w / 2 - 0.5) * 22 * t;
        var oy = (p.y + p.h / 2 - 0.5) * 18 * t;
        var px = gx + p.x * gw + ox, py = gy + p.y * gh + oy;
        var pw = p.w * gw - 1, ph = p.h * gh - 1;
        if (t > 0.1) {
          plyCutCtx.globalAlpha = a * t * 0.12; plyCutCtx.fillStyle = "rgba(60,40,20,1)";
          plyCutCtx.beginPath(); plyCutCtx.roundRect(px + 3, py + 4, pw, ph, 2); plyCutCtx.fill();
        }
        plyDrawPartBoard(px, py, pw, ph, a);
        plyCutCtx.globalAlpha = a;
        plyCutCtx.strokeStyle = "rgba(80,50,20," + (0.15 + t * 0.15) + ")"; plyCutCtx.lineWidth = 1;
        plyCutCtx.beginPath(); plyCutCtx.roundRect(px, py, pw, ph, 2); plyCutCtx.stroke();
        plyCutCtx.globalAlpha = 1;
        if (t > 0.5) {
          plyCutCtx.globalAlpha = Math.min((t - 0.5) * 2.5, 1) * a * 0.75;
          plyCutCtx.font = "500 " + Math.max(9, Math.min(11, pw * 0.06)) + "px 'DM Mono',monospace";
          plyCutCtx.fillStyle = "#5a3a16";
          plyCutCtx.fillText(p.tag, px + 6, py + ph - 7);
          plyCutCtx.globalAlpha = 1;
        }
      }
    }

    function plyRender() {
      var W = plyCutCanvas.width / plyDpr, H = plyCutCanvas.height / plyDpr;
      plyCutCtx.clearRect(0, 0, W, H);
      var gx = plyBL * W, gy = plyBT * H, gw = plyBW * W, gh = plyBH * H;
      if (plyPhase === "board" || plyPhase === "cutting") {
        plyDrawBoard(gx, gy, gw, gh, 1);
        plyDrawDoneLines(gx, gy, gw, gh);
        if (plyPhase === "cutting") plyDrawActiveCut(gx, gy, gw, gh);
      } else if (plyPhase === "separating") {
        plyDrawParts(gx, gy, gw, gh, plyEase(Math.min(plySepT, 1)), 1);
      } else if (plyPhase === "holding") {
        plyDrawParts(gx, gy, gw, gh, 1, 1);
      } else if (plyPhase === "fadeout") {
        var f = plyEase(Math.min(plyFadeT, 1));
        plyDrawParts(gx, gy, gw, gh, 1, 1 - f);
        plyDrawBoard(gx, gy, gw, gh, f);
      }
      plyTickDust(); plyDrawDust();
      requestAnimationFrame(plyRender);
    }

    function plyWaitVisible(cb) {
      if (plyVisible) cb();
      else setTimeout(function () { plyWaitVisible(cb); }, 200);
    }

    function plyStartCycle() {
      plyWaitVisible(function () {
        plyCurLayout = PLY_LAYOUTS[plyLIdx % PLY_LAYOUTS.length];
        if (plyStatusEl) plyStatusEl.textContent = plyCurLayout.name;
        plyLIdx++;
        plyCutI = 0; plyCutP = 0; plyCutActive = false;
        plyDoneCuts = []; plyDust = []; plySepT = 0; plyFadeT = 0;
        plyPhase = "board";
        setTimeout(function () { plyPhase = "cutting"; plyAnimCut(); }, reduced ? 100 : 500);
      });
    }

    function plyAnimCut() {
      if (plyCutI >= plyCurLayout.cuts.length) {
        plyCutActive = false;
        if (reduced) {
          plyPhase = "holding";
          setTimeout(plyStartFadeout, 1400);
          return;
        }
        plyPhase = "separating"; plySepT = 0;
        var t0 = performance.now();
        (function sep(now) {
          plySepT = (now - t0) / 900;
          if (plySepT < 1) requestAnimationFrame(sep);
          else { plyPhase = "holding"; setTimeout(plyStartFadeout, 2000); }
        })(t0);
        return;
      }
      if (reduced) {
        plyDoneCuts.push(plyCurLayout.cuts[plyCutI]);
        plyCutI++;
        setTimeout(plyAnimCut, 50);
        return;
      }
      plyCutP = 0; plyCutActive = true;
      var t0 = performance.now(), dur = 700;
      (function tick(now) {
        var raw = (now - t0) / dur;
        plyCutP = raw < 0.5 ? 2 * raw * raw : 1 - Math.pow(-2 * raw + 2, 2) / 2;
        plyCutP = Math.min(plyCutP, 1);
        if (raw < 1) requestAnimationFrame(tick);
        else {
          plyDoneCuts.push(plyCurLayout.cuts[plyCutI]);
          plyCutActive = false; plyCutI++;
          setTimeout(plyAnimCut, 180);
        }
      })(t0);
    }

    function plyStartFadeout() {
      if (reduced) { plyStartCycle(); return; }
      plyPhase = "fadeout"; plyFadeT = 0;
      var t0 = performance.now();
      (function tick(now) {
        plyFadeT = (now - t0) / 600;
        if (plyFadeT < 1) requestAnimationFrame(tick);
        else setTimeout(plyStartCycle, 300);
      })(t0);
    }

    plyRender();
    setTimeout(plyStartCycle, 600);
  }

  /* ---- grade strip: clone cards for infinite loop ------------------------- */

  (function () {
    var track = doc.querySelector(".gstrip__track");
    if (!track) return;
    var cards = track.querySelectorAll(".gstrip__card");
    if (!cards.length) return;

    for (var i = 0; i < cards.length; i++) {
      var clone = cards[i].cloneNode(true);
      clone.setAttribute("aria-hidden", "true");
      track.appendChild(clone);
    }
  })();

  /* ---- thickness picker: pick a thickness, watch it stack ------------------- */

  var plyStackEl = doc.getElementById("plyStack");
  if (plyStackEl) {
    var PLY_THICK = {
      4: { layers: 3, use: "Backs, drawer bottoms, panelling" },
      6: { layers: 5, use: "Partitions, ceiling panels" },
      9: { layers: 7, use: "Cabinet sides, wall units" },
      12: { layers: 9, use: "Shutters, shelves, furniture" },
      16: { layers: 11, use: "Wardrobes, kitchen carcasses" },
      19: { layers: 13, use: "Heavy furniture, table tops" },
      25: { layers: 15, use: "Industrial, structural work" }
    };
    var tsOutThick = doc.getElementById("sdThick");
    var tsOutLayers = doc.getElementById("sdLayers");
    var tsOutUse = doc.getElementById("sdUse");

    var tsCanvas = doc.createElement("canvas");
    tsCanvas.style.cssText = "width:100%;display:block;";
    plyStackEl.appendChild(tsCanvas);

    var TS_WOOD = ["#dcb887", "#c49a63"];
    var TS_GLUE = "#4a2c12";
    var TS_BG = "#14120f";
    var TS_CVH = 310;
    var tsW = 420;
    var tsRaf = null;
    var tsLastMm = 12;
    var tsStarted = false;

    function tsEaseOut(t) {
      return 1 - (1 - t) * (1 - t);
    }
    function tsEaseInOut(t) {
      return t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
    }

    function tsInitSize() {
      tsW = Math.min(420, plyStackEl.getBoundingClientRect().width || 420);
      tsCanvas.width = tsW;
      tsCanvas.height = TS_CVH;
    }

    function tsDrawPlate(ctx, py, lit) {
      ctx.fillStyle = "#2e2b28";
      ctx.fillRect(6, py - 7, tsW - 12, 8);
      ctx.fillStyle = "#444";
      ctx.fillRect(0, py, tsW, 14);
      ctx.fillStyle = "#585450";
      ctx.fillRect(0, py, tsW, 2);
      [18, tsW - 18].forEach(function (bx) {
        ctx.fillStyle = "#333";
        ctx.beginPath();
        ctx.arc(bx, py + 7, 5, 0, Math.PI * 2);
        ctx.fill();
        ctx.fillStyle = "#555";
        ctx.beginPath();
        ctx.arc(bx, py + 7, 3, 0, Math.PI * 2);
        ctx.fill();
      });
      if (lit) {
        ctx.fillStyle = "#c08a52";
        ctx.fillRect(0, py + 12, tsW, 2);
      }
    }

    function tsDrawRails(ctx) {
      ctx.strokeStyle = "#2a2724";
      ctx.lineWidth = 1.5;
      [22, tsW - 22].forEach(function (rx) {
        ctx.beginPath();
        ctx.moveTo(rx, 0);
        ctx.lineTo(rx, TS_CVH);
        ctx.stroke();
      });
    }

    function tsDrawBg(ctx) {
      ctx.fillStyle = TS_BG;
      ctx.fillRect(0, 0, tsW, TS_CVH);
    }

    function tsDrawVeneerGrain(ctx, i, y, lh) {
      ctx.strokeStyle = i % 2 ? "rgba(140,100,50,0.22)" : "rgba(160,120,60,0.28)";
      ctx.lineWidth = 0.5;
      if (i % 2 === 0) {
        for (var g = 3; g < lh - 1; g += Math.max(3, lh / 4)) {
          ctx.beginPath();
          ctx.moveTo(28, y + g);
          ctx.lineTo(tsW - 28, y + g);
          ctx.stroke();
        }
      } else {
        for (var g2 = 10; g2 < tsW - 58; g2 += 14) {
          ctx.beginPath();
          ctx.moveTo(28 + g2, y + 1);
          ctx.lineTo(28 + g2, y + lh - 1);
          ctx.stroke();
        }
      }
    }

    function tsDrawVeneers(ctx, gapS, N, lh, bottom) {
      for (var i = 0; i < N; i++) {
        var y = bottom - i * (lh + gapS) - lh;
        ctx.fillStyle = TS_WOOD[i % 2];
        ctx.fillRect(28, y, tsW - 56, lh);
        tsDrawVeneerGrain(ctx, i, y, lh);
        if (i < N - 1) {
          ctx.fillStyle = TS_GLUE;
          ctx.fillRect(28, y + lh, tsW - 56, gapS);
        }
      }
    }

    function tsAnimate(mm) {
      if (tsRaf) {
        cancelAnimationFrame(tsRaf);
        tsRaf = null;
      }
      var N = PLY_THICK[mm].layers;
      var lh = Math.max(7, Math.min(18, Math.floor(170 / N)));
      var gap = 2;
      var gapC = 0.4; // compressed gap once pressed
      var bottom = TS_CVH - 24;

      var totalFull = N * lh + (N - 1) * gap;
      var totalPressed = N * lh + (N - 1) * gapC;
      var topFull = bottom - totalFull;
      var topPressed = bottom - totalPressed;

      var STAGGER = 55;
      var DROP_DUR = 260;
      var dropEnd = (N - 1) * STAGGER + DROP_DUR;
      var PAUSE1 = 380;
      var PRESS_DUR = 680;
      var CONTACT_F = 0.7; // fraction of PRESS_DUR before plate touches stack
      var HOLD_DUR = 820;
      var LIFT_DUR = 480;
      var TOTAL = dropEnd + PAUSE1 + PRESS_DUR + HOLD_DUR + LIFT_DUR;

      var PLATE_H = 14;
      var PLATE_START = -PLATE_H - 4;

      var ctx = tsCanvas.getContext("2d");
      var t0 = performance.now();

      function frame(now) {
        var el = now - t0;
        tsDrawBg(ctx);
        tsDrawRails(ctx);

        var squeeze = 0;
        var pt = el - (dropEnd + PAUSE1);
        if (pt > 0) {
          var contactAt = PRESS_DUR * CONTACT_F;
          if (pt >= contactAt && pt < PRESS_DUR) {
            squeeze = tsEaseInOut((pt - contactAt) / (PRESS_DUR - contactAt));
          } else if (pt >= PRESS_DUR) {
            squeeze = 1;
          }
        }
        var gapS = gap - squeeze * (gap - gapC);

        for (var i = 0; i < N; i++) {
          var vs = i * STAGGER;
          var ve = vs + DROP_DUR;
          if (el < vs) continue;
          var landY = bottom - i * (lh + gapS) - lh;
          var landYFull = bottom - i * (lh + gap) - lh;
          var p = el < ve ? tsEaseOut((el - vs) / DROP_DUR) : 1;
          var y = p < 1 ? -lh + p * (landYFull + lh) : landY;
          ctx.fillStyle = TS_WOOD[i % 2];
          ctx.fillRect(28, y, tsW - 56, lh);
          tsDrawVeneerGrain(ctx, i, y, lh);
          if (p === 1 && i < N - 1 && el > (i + 1) * STAGGER + DROP_DUR) {
            ctx.fillStyle = TS_GLUE;
            ctx.fillRect(28, landY + lh, tsW - 56, gapS);
          }
        }

        if (pt > 0) {
          var contactAt2 = PRESS_DUR * CONTACT_F;
          var plateTopContact = topFull - PLATE_H;
          var plateTopPressed = topPressed - PLATE_H;
          var py = null;
          var lit = false;

          if (pt < contactAt2) {
            py = PLATE_START + tsEaseInOut(pt / contactAt2) * (plateTopContact - PLATE_START);
          } else if (pt < PRESS_DUR) {
            py = plateTopContact + squeeze * (plateTopPressed - plateTopContact);
          } else if (pt < PRESS_DUR + HOLD_DUR) {
            py = plateTopPressed;
            lit = true;
            var alpha = 0.13 + Math.sin((pt - PRESS_DUR) / 140) * 0.07;
            ctx.fillStyle = "rgba(192,138,82," + alpha + ")";
            ctx.fillRect(28, plateTopPressed + PLATE_H, tsW - 56, 9);
          } else if (pt < PRESS_DUR + HOLD_DUR + LIFT_DUR) {
            var liftP = tsEaseInOut((pt - PRESS_DUR - HOLD_DUR) / LIFT_DUR);
            py = plateTopPressed - liftP * (Math.abs(PLATE_START - plateTopPressed) + 30);
          } else {
            py = null;
          }
          if (py !== null) tsDrawPlate(ctx, py, lit);
        }

        if (el < TOTAL) {
          tsRaf = requestAnimationFrame(frame);
        } else {
          tsDrawBg(ctx);
          tsDrawRails(ctx);
          tsDrawVeneers(ctx, gapC, N, lh, bottom);
          tsRaf = null;
        }
      }
      tsRaf = requestAnimationFrame(frame);
    }

    function tsBuild(mm) {
      tsLastMm = mm;
      if (tsOutThick) tsOutThick.textContent = mm + " mm";
      if (tsOutLayers) tsOutLayers.innerHTML = PLY_THICK[mm].layers + " <small>cross-bonded veneers</small>";
      if (tsOutUse) tsOutUse.textContent = PLY_THICK[mm].use;
      tsInitSize();
      if (reduced) {
        tsDrawBg(tsCanvas.getContext("2d"));
        tsDrawRails(tsCanvas.getContext("2d"));
        tsDrawVeneers(tsCanvas.getContext("2d"), 0.4, PLY_THICK[mm].layers, Math.max(7, Math.min(18, Math.floor(170 / PLY_THICK[mm].layers))), TS_CVH - 24);
      } else {
        tsAnimate(mm);
      }
    }

    var tsButtons = doc.querySelectorAll(".thick-btn");
    tsButtons.forEach(function (btn) {
      btn.addEventListener("click", function () {
        tsButtons.forEach(function (b) {
          b.classList.remove("on");
        });
        btn.classList.add("on");
        tsBuild(parseInt(btn.getAttribute("data-mm"), 10));
      });
    });

    win.addEventListener(
      "resize",
      function () {
        tsInitSize();
        if (!tsRaf && !reduced) tsAnimate(tsLastMm);
      },
      { passive: true }
    );

    var tsDefaultMm = 12;
    var tsDefaultBtn = doc.querySelector('.thick-btn[data-mm="' + tsDefaultMm + '"]');
    if (tsDefaultBtn) tsDefaultBtn.classList.add("on");

    var tsStage = doc.getElementById("stackStage") || plyStackEl;
    var tsIo = new win.IntersectionObserver(
      function (entries) {
        for (var e = 0; e < entries.length; e++) {
          if (entries[e].isIntersecting && !tsStarted) {
            tsStarted = true;
            tsBuild(tsDefaultMm);
            tsIo.disconnect();
          }
        }
      },
      { threshold: 0.35 }
    );
    tsIo.observe(tsStage);
  }

  /* ---- the line, drawn as a measuring rule ---------------------------------- */

  var STATIONS = [
    ["Log Selection", "Manual · trained graders"],
    ["Debarking", "Machine · rotary debarker"],
    ["Peeling", "Machine · spindle-less peeler"],
    ["Drying", "Machine · core veneer dryer"],
    ["Grading", "Manual · sheet by sheet"],
    ["Core Composing", "Machine · core composer"],
    ["Gluing", "Machine · glue mixer & spreader"],
    ["Cold Pressing", "Machine · cold press"],
    ["Hot Pressing", "Machine · multi-daylight hot press"],
    ["Calibrating", "Machine · twin-head calibrator"],
    ["Facing", "Manual · grain-matched by hand"],
    ["Face Pressing", "Machine · hot press, ~2 min"],
    ["Trimming", "Machine · double-dimension saw"],
    ["Sanding", "Machine · wide-belt sander"],
    ["ACC Treatment", "Machine · preservative bath"],
    ["Quality Check", "Laboratory · in-house"]
  ];

  function buildRail() {
    var track = doc.getElementById("prailTrack");
    if (!track) return;
    var num = doc.getElementById("prailNum");
    var name = doc.getElementById("prailName");
    var sub = doc.getElementById("prailSub");
    var ticks = [];

    STATIONS.forEach(function (s, i) {
      var b = doc.createElement("button");
      b.className = "ptick";
      b.type = "button";
      b.setAttribute("aria-label", "Station " + (i + 1) + " — " + s[0]);
      // label every fifth tick plus the two ends
      if (i === 0 || (i + 1) % 5 === 0 || i === STATIONS.length - 1) {
        b.setAttribute("data-major", "");
      }
      var pad = i + 1 < 10 ? "0" + (i + 1) : String(i + 1);
      b.innerHTML = "<i></i><span>" + pad + "</span>";

      var show = function () {
        for (var t = 0; t < ticks.length; t++) ticks[t].classList.remove("is-on");
        b.classList.add("is-on");
        if (num) num.textContent = pad;
        if (name) name.textContent = s[0];
        if (sub) sub.textContent = s[1];
      };
      b.addEventListener("mouseenter", show);
      b.addEventListener("focus", show);
      b.addEventListener("click", show);

      track.appendChild(b);
      ticks.push(b);
    });

    if (ticks.length) ticks[0].classList.add("is-on");
  }

  /* ---- grades accordion ----------------------------------------------------- */

  var gradeRows = doc.querySelectorAll(".grade");
  gradeRows.forEach(function (row) {
    var head = row.querySelector(".grade__head-hit") || row;
    head.addEventListener("click", function (e) {
      if (e.target.closest("a")) return;
      var wasOpen = row.classList.contains("is-open");
      gradeRows.forEach(function (r) {
        r.classList.remove("is-open");
        var btn = r.querySelector(".grade__cue");
        if (btn) btn.setAttribute("aria-expanded", "false");
      });
      if (!wasOpen) {
        row.classList.add("is-open");
        var cue = row.querySelector(".grade__cue");
        if (cue) cue.setAttribute("aria-expanded", "true");
      }
    });
  });

  /* ---- process page: station rail ------------------------------------------- */

  var stations = doc.querySelectorAll(".station");
  var railNow = doc.getElementById("rail-now");
  var railName = doc.getElementById("rail-name");
  var railBar = doc.getElementById("rail-bar");

  if (stations.length && railNow) {
    var stationIo = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (en) {
          if (!en.isIntersecting) return;
          var el = en.target;
          stations.forEach(function (s) {
            s.classList.remove("is-active");
          });
          el.classList.add("is-active");
          var no = el.getAttribute("data-no") || "01";
          var name = el.getAttribute("data-name") || "";
          railNow.textContent = no;
          if (railName) railName.textContent = name;
          if (railBar) {
            railBar.style.transform =
              "scaleX(" + (parseInt(no, 10) / stations.length).toFixed(4) + ")";
          }
        });
      },
      { rootMargin: "-42% 0px -52% 0px", threshold: 0 }
    );
    stations.forEach(function (s) {
      stationIo.observe(s);
    });
  }

  /* ---- contact form → WhatsApp ---------------------------------------------- */

  var qform = doc.getElementById("qform");
  if (qform) {
    var chips = qform.querySelectorAll(".ichip");
    chips.forEach(function (chip) {
      chip.addEventListener("click", function () {
        var on = chip.getAttribute("aria-pressed") === "true";
        chip.setAttribute("aria-pressed", on ? "false" : "true");
      });
    });

    qform.addEventListener("submit", function (e) {
      e.preventDefault();
      var nameF = doc.getElementById("f-name");
      var phoneF = doc.getElementById("f-phone");
      var cityF = doc.getElementById("f-city");
      var msgF = doc.getElementById("f-msg");
      var ok = true;

      function setValid(input, valid) {
        var field = input.closest(".field");
        if (field) field.classList.toggle("is-invalid", !valid);
        if (!valid) ok = false;
      }

      setValid(nameF, nameF.value.trim().length >= 2);
      setValid(phoneF, /^[+\d][\d\s-]{7,15}$/.test(phoneF.value.trim()));
      if (!ok) return;

      var interests = [];
      chips.forEach(function (chip) {
        if (chip.getAttribute("aria-pressed") === "true") {
          interests.push(chip.textContent.trim());
        }
      });

      var lines = [
        "Hello Lennor Ply! I would like a quote.",
        "Name: " + nameF.value.trim(),
        "Phone: " + phoneF.value.trim(),
      ];
      if (cityF && cityF.value.trim()) lines.push("City: " + cityF.value.trim());
      if (interests.length) lines.push("Interested in: " + interests.join(", "));
      if (msgF && msgF.value.trim()) lines.push("Details: " + msgF.value.trim());

      var url =
        "https://wa.me/917760778886?text=" + encodeURIComponent(lines.join("\n"));
      win.open(url, "_blank", "noopener");
      qform.classList.add("is-sent");
    });
  }

  /* ---- quick dock ------------------------------------------------------------ */

  var dock = doc.getElementById("dock");
  function dockFrame() {
    if (!dock) return;
    dock.classList.toggle("is-on", scrollY > 560);
  }

  /* custom cursor removed — native browser cursor is used instead */


  /* ---- central frame loop ------------------------------------------------------ */

  function frame() {
    navFrame();
    scrubFrame();
    parallaxFrame();
    cutFrame();
    dockFrame();
    requestAnimationFrame(frame);
  }

  /* ---- resize ------------------------------------------------------------------- */

  var resizeT;
  win.addEventListener("resize", function () {
    clearTimeout(resizeT);
    resizeT = setTimeout(function () {
      vh = win.innerHeight;
      if (cutData) cutData.last = -1;
    }, 160);
  });

  /* ---- year ---------------------------------------------------------------------- */

  var yearEl = doc.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  /* ---- boot ----------------------------------------------------------------------- */

  function boot() {
    scrollY = win.scrollY || 0;
    vh = win.innerHeight;
    buildRail();
    // No loader or curtain — release the gate immediately so hero animates in
    releaseGate();
    if (!reduced) requestAnimationFrame(frame);
    else {
      // settle a static, fully-assembled state for reduced motion
      navFrame();
      scrubFrame();
      dockFrame();
      // CSS already un-dims every cutaway row under reduced motion
      win.addEventListener(
        "scroll",
        function () {
          navFrame();
          scrubFrame();
          dockFrame();
        },
        { passive: true }
      );
    }
  }

  /* ---- marquee: hide duplicate items from screen readers ---------------------- */

  doc.querySelectorAll(".marquee-track").forEach(function (track) {
    var items = track.children;
    var half = Math.floor(items.length / 2);
    for (var i = half; i < items.length; i++) {
      items[i].setAttribute("aria-hidden", "true");
    }
  });

  if (doc.readyState === "loading") {
    doc.addEventListener("DOMContentLoaded", boot);
  } else {
    boot();
  }

})();
