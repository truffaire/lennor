"use client";

import { useEffect } from "react";

// Loads Leaflet (vendored in /public/vendor) at runtime and builds the contact
// map — ported from contact.html's inline map script. Tears the map down on
// unmount so React StrictMode's double-invoke doesn't hit "already initialized".
export default function ContactMap() {
  useEffect(() => {
    let map;
    let cancelled = false;

    // Ensure Leaflet's stylesheet is present (loaded at runtime, not bundled,
    // so its url() references aren't resolved through webpack).
    if (!document.getElementById("leaflet-css")) {
      const link = document.createElement("link");
      link.id = "leaflet-css";
      link.rel = "stylesheet";
      link.href = "/vendor/leaflet.min.css";
      document.head.appendChild(link);
    }

    const initMap = () => {
      if (cancelled) return;
      const L = window.L;
      const mapEl = document.getElementById("contact-map");
      if (!L || !mapEl || mapEl._leaflet_id) return;

      map = L.map("contact-map", { scrollWheelZoom: false }).setView([12.95, 76.85], 8);

      L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
        maxZoom: 18,
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>',
      }).addTo(map);

      const pinHtml =
        '<svg width="28" height="36" viewBox="0 0 28 36" xmlns="http://www.w3.org/2000/svg" style="filter:drop-shadow(0 2px 3px rgba(0,0,0,0.35))"><path d="M14 2 C7.4 2 2 7.4 2 14 C2 22 14 34 14 34 C14 34 26 22 26 14 C26 7.4 20.6 2 14 2 Z" fill="#0D0C0A"/><circle cx="14" cy="13" r="5" fill="#ffffff"/></svg>';

      const blackIcon = L.divIcon({
        className: "custom-leaflet-pin",
        html: pinHtml,
        iconSize: [28, 36],
        iconAnchor: [14, 36],
        popupAnchor: [0, -34],
      });

      L.marker([13.005, 76.102], { icon: blackIcon })
        .addTo(map)
        .bindPopup("<strong>Lennor Ply Factory & Office</strong><br>KIADB Industrial Growth Centre, Hassan");

      L.marker([12.9716, 77.5946], { icon: blackIcon })
        .addTo(map)
        .bindPopup("<strong>Lennor Ply Manufacturing Unit</strong><br>Bengaluru, Karnataka");

      // Widen the view east to Chennai (no hub there — shown for regional context)
      map.fitBounds([[13.005, 76.102], [13.0827, 80.2707]], { padding: [40, 40] });
    };

    if (window.L) {
      initMap();
    } else {
      let script = document.getElementById("leaflet-js");
      if (!script) {
        script = document.createElement("script");
        script.id = "leaflet-js";
        script.src = "/vendor/leaflet.min.js";
        script.onload = initMap;
        document.body.appendChild(script);
      } else {
        script.addEventListener("load", initMap);
      }
    }

    return () => {
      cancelled = true;
      if (map) map.remove();
    };
  }, []);

  return null;
}
