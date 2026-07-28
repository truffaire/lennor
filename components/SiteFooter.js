
export default function SiteFooter() {
  return (
    <footer className="footer">
      <div className="shell">
        <div className="footer__top">
          <div className="footer__brand">
            <img src="/assets/brand/wordmark-white-640.png" alt="LENNOR" width="640" height="101" />
            <p>ISI-certified plywood, block boards and flush doors —
            manufactured end to end on a sixteen-station line at KIADB
            Industrial Growth Centre, Karnataka.</p>
          </div>
          <nav aria-label="Footer — explore">
            <h3>Explore</h3>
            <ul>
              <li><a href="/products">Products</a></li>
              <li><a href="/process">Process</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </nav>
          <nav aria-label="Footer — range">
            <h3>The range</h3>
            <ul>
              <li><a href="/products">MR Plywood</a></li>
              <li><a href="/products">BWR Plywood</a></li>
              <li><a href="/products">BWP Plywood</a></li>
              <li><a href="/products">Marine Plywood</a></li>
              <li><a href="/products">FR Plywood</a></li>
              <li><a href="/products#beyond">Boards &amp; Doors</a></li>
            </ul>
          </nav>
          <div>
            <h3>Contact</h3>
            <address>
              Karnataka<br /><br />
              <a href="tel:+917760778886">+91 77607 78886</a><br />
              <a href="mailto:lennorply@gmail.com">lennorply@gmail.com</a><br /><br />
              Mon – Sat · 9:00 – 18:00
            </address>
          </div>
        </div>
        <div className="footer__word" aria-hidden="true">
          <img src="/assets/brand/wordmark-white.png" alt="" width="3265" height="516" loading="lazy" />
        </div>
        <div className="footer__bottom">
          <span>© <span id="year">2026</span> Lennor Ply — All rights reserved</span>
          <span>Ply · Board · Door · Laminates</span>
          <span>IS:303 · IS:710 · Made in Karnataka</span>
        </div>
      </div>
    </footer>
  );
}
