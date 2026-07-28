"use client";

import { useEffect } from "react";

// Ported from process.html's inline <script>: reveal-on-scroll for .rv, the
// station panels' parallax + progress bar, and scroll-snap. Runs on mount and
// tears everything down on unmount so client-side navigation stays clean.
export default function ProcessMotion() {
  useEffect(() => {
    const observers = [];

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    observers.push(io);

    const allProcPanels = document.querySelectorAll(".proc-panel");
    const bar = document.querySelector(".proc-progress i");
    let onScroll = null;

    if (allProcPanels.length) {
      const revealIO = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) {
              e.target.classList.add("in");
              revealIO.unobserve(e.target);
            }
          });
        },
        { threshold: 0.1, rootMargin: "0px 0px -8% 0px" }
      );
      document.querySelectorAll(".proc-content").forEach((el) => revealIO.observe(el));
      observers.push(revealIO);

      let rafPending = false;
      const updateParallax = () => {
        const vh = window.innerHeight;
        const doc = document.documentElement;

        if (bar) {
          bar.style.width = (window.scrollY / Math.max(1, doc.scrollHeight - vh)) * 100 + "%";
        }

        allProcPanels.forEach((panel) => {
          const img = panel.querySelector(".proc-bg-img");
          if (!img) return;
          const rect = panel.getBoundingClientRect();
          const progress = (vh - rect.top) / (rect.height + vh);
          const offset = (progress - 0.5) * rect.height * 0.35;
          img.style.transform = "translateY(" + offset.toFixed(2) + "px)";
        });

        rafPending = false;
      };

      onScroll = () => {
        if (!rafPending) {
          rafPending = true;
          requestAnimationFrame(updateParallax);
        }
      };
      window.addEventListener("scroll", onScroll, { passive: true });
      updateParallax();
    }

    if (document.querySelector(".proc-panel[data-step]")) {
      document.documentElement.classList.add("proc-snap");
    }

    return () => {
      observers.forEach((o) => o.disconnect());
      if (onScroll) window.removeEventListener("scroll", onScroll);
      document.documentElement.classList.remove("proc-snap");
    };
  }, []);

  return null;
}
