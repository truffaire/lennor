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
        '<div style="width:28px;height:34px;background:#0D0C0A;border-radius:50% 50% 50% 0;transform:rotate(-45deg);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0,0,0,0.3);border:1.5px solid #fff;"><div style="width:10px;height:10px;background:#fff;border-radius:50%;transform:rotate(45deg);"></div></div>';

      const blackIcon = L.divIcon({
        className: "custom-leaflet-pin",
        html: pinHtml,
        iconSize: [28, 34],
        iconAnchor: [14, 34],
        popupAnchor: [0, -32],
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
