import SiteHeader from "@/components/SiteHeader";
import BrochureAutoDownload from "@/components/BrochureAutoDownload";

const PDF = "/lennor-ply-brochure.pdf";

export const metadata = {
  title: "Brochure",
  description:
    "The Lennor Ply brochure — five ISI-certified plywood grades, dimensions, our one-roof process and a lifetime guarantee. Built beyond generations.",
  alternates: { canonical: "/brochure" },
  robots: { index: true, follow: true },
};

const features = [
  { k: "100%", label: "Calibrated" },
  { k: "E1", label: "Low emission" },
  { k: "✚", label: "Termite & borer proof" },
  { k: "≡", label: "High density" },
  { k: "▮", label: "Zero gap core" },
  { k: "▤", label: "Glue-line protection" },
  { k: "ISI", label: "IS:303 / IS:710" },
];

const grades = [
  { abbr: "MR", name: "Moisture Resistant", std: "IS:303", apps: "Dry interiors — wardrobes, beds, TV units, panelling" },
  { abbr: "BWR", name: "Boiling Water Resistant", std: "IS:303 · 2024", apps: "Kitchens, vanities, balconies, semi-exposed areas" },
  { abbr: "BWP", name: "Boiling Water Proof", std: "IS:303 / IS:710", apps: "Wet areas, outdoor furniture, heavy-duty use" },
  { abbr: "Marine", name: "Marine Grade", std: "IS:710", apps: "Marine, submersion, industrial applications" },
  { abbr: "FR", name: "Fire Resistant", std: "IS:5509", apps: "Areas requiring fire-safe protection" },
];

const thicknesses = [4, 6, 9, 12, 16, 19, 25];
const sizes = [
  { ft: "8 × 4 ft", mm: "2440 × 1220 mm", note: "Standard" },
  { ft: "7 × 4 ft", mm: "2135 × 1220 mm" },
  { ft: "6 × 4 ft", mm: "1830 × 1220 mm" },
];

export default function Brochure() {
  return (
    <>
      <SiteHeader />
      <BrochureAutoDownload href={PDF} />

      <main id="main" className="bro">
        {/* cover — light wood-grain label style */}
        <section className="bro__cover">
          <div className="bro__cover-top">
            <img className="bro__mark" src="/assets/brand/mark-black.svg" alt="" width="120" height="120" />
            <span className="bro__grade">Ply · Board · Door · Laminates</span>
          </div>
          <div className="bro__cover-mid">
            <span className="bro__eyebrow">Product Brochure</span>
            <h1 className="bro__title">Built beyond<br /><em>generations</em>.</h1>
            <p className="bro__lead">Five ISI-certified plywood grades, made end to end on one sixteen-station line in Karnataka — calibrated, treated and lab-tested, board after board.</p>
            <div className="bro__actions">
              <a className="btn" href={PDF} download><span>Download PDF</span><span className="btn__arr">↓</span></a>
              <a className="btn btn--ghost" href={PDF} target="_blank" rel="noopener"><span>Open the PDF</span><span className="btn__arr">→</span></a>
            </div>
            <p className="bro__hint">Your download has started automatically. Scroll to read the brochure.</p>
          </div>
          {/* feature badge row — as on the brochure label */}
          <div className="bro__badges">
            {features.map((f) => (
              <div className="bro__badge" key={f.label}>
                <span className="bro__badge-k">{f.k}</span>
                <span className="bro__badge-l">{f.label}</span>
              </div>
            ))}
          </div>
        </section>

        {/* photo — curved veneers */}
        <figure className="bro__photo">
          <img src="/assets/img/bro-veneers.jpg" alt="Layered wood veneers curving in warm light" width="2000" height="2667" loading="lazy" />
          <figcaption>
            <span className="bro__eyebrow">The layers within</span>
            <p>Cross-laid veneers, composed edge-to-edge and pressed into one rigid, gap-free board.</p>
          </figcaption>
        </figure>

        {/* the range */}
        <section className="bro__section">
          <span className="bro__eyebrow">The range</span>
          <h2 className="bro__h">Five grades, graded by how much water — and fire — they take.</h2>
          <div className="bro__table">
            <div className="bro__tr bro__tr--head">
              <span>Grade</span><span>Standard</span><span>Applications</span>
            </div>
            {grades.map((g) => (
              <div className="bro__tr" key={g.abbr}>
                <span><strong>{g.abbr}</strong><em>{g.name}</em></span>
                <span className="bro__std">{g.std}</span>
                <span>{g.apps}</span>
              </div>
            ))}
          </div>
        </section>

        {/* dimensions */}
        <section className="bro__section bro__section--tint">
          <span className="bro__eyebrow">Dimensions</span>
          <h2 className="bro__h">Seven thicknesses. Three sheet sizes. Or cut exactly to yours.</h2>
          <div className="bro__dims">
            <div>
              <span className="bro__dim-label">Thicknesses</span>
              <div className="bro__chips">{thicknesses.map((t) => <span className="bro__chip" key={t}>{t} mm</span>)}</div>
            </div>
            <div>
              <span className="bro__dim-label">Sheet sizes</span>
              <ul className="bro__sizes">
                {sizes.map((s) => (
                  <li key={s.ft}>
                    <span className="bro__size-ft">{s.ft}</span>
                    <span className="bro__size-mm">{s.mm}</span>
                    {s.note && <span className="bro__size-note">{s.note}</span>}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* photo — raw timber */}
        <figure className="bro__photo">
          <img src="/assets/img/bro-timber.jpg" alt="Close-up of raw hardwood timber grain" width="2000" height="3000" loading="lazy" />
          <figcaption>
            <span className="bro__eyebrow">From log to board</span>
            <p>It begins with premium hardwood, hand-graded in the timber yard — the first checkpoint of sixteen.</p>
          </figcaption>
        </figure>

        {/* process + guarantee */}
        <section className="bro__section">
          <span className="bro__eyebrow">The process</span>
          <h2 className="bro__h">Engineered into every board, not claimed.</h2>
          <div className="bro__proc">
            <p>Each Lennor board passes through carefully controlled manufacturing stages — selecting premium hardwood, building a gap-free core, precision pressing, ACC treatment and comprehensive in-house laboratory testing. Every step improves structural integrity, durability and consistency.</p>
            <p>It is all made at our fully integrated facility in Hassan, Karnataka, where every stage of production is controlled under one roof. Nothing is left to chance — lasting quality is the result of disciplined manufacturing.</p>
          </div>
          <div className="bro__guarantee">
            <p className="bro__big">A lifetime guarantee on every board that earns the Lennor mark.</p>
            <span className="bro__made">Made in India · Made for the world</span>
          </div>
        </section>

        {/* contact */}
        <section className="bro__section bro__section--tint">
          <span className="bro__eyebrow">Get in touch</span>
          <h2 className="bro__h">Talk grades, pricing or a factory visit.</h2>
          <div className="bro__contact-grid">
            <div><span className="bro__dim-label">Phone</span><a className="bro__link" href="tel:+917760778886">+91 77607 78886</a></div>
            <div><span className="bro__dim-label">Email</span><a className="bro__link" href="mailto:lennorply@gmail.com">lennorply@gmail.com</a></div>
            <div><span className="bro__dim-label">Web</span><a className="bro__link" href="https://lennorply.com">lennorply.com</a></div>
            <div><span className="bro__dim-label">Factory</span><span className="bro__link">KIADB Industrial Growth Centre, Hassan — 573201, Karnataka</span></div>
          </div>
          <div className="bro__actions">
            <a className="btn" href={PDF} download><span>Download the PDF again</span><span className="btn__arr">↓</span></a>
            <a className="btn btn--ghost" href="/contact"><span>Request a quote</span><span className="btn__arr">→</span></a>
          </div>
        </section>
      </main>
    </>
  );
}
