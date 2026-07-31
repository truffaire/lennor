import SiteHeader from "@/components/SiteHeader";
import ProcessMotion from "@/components/ProcessMotion";
import "./process.css";

export const metadata = {
  title: "Manufacturing Process — From Log to Board in 16 Stations",
  description:
    "Walk Lennor Ply's 16-station production line — log selection, spindle-less peeling, core composing, hot pressing, calibration, ACC treatment and laboratory testing.",
  alternates: { canonical: "/process" },
  openGraph: {
    title: "Manufacturing Process — Lennor Ply | From Log to Board in 16 Stations",
    description:
      "From a grader's hands in the timber yard to the final signature in our laboratory.",
    url: "https://lennorply.com/process",
    images: ["/assets/img/factory-aerial.png"],
  },
};

export const viewport = {
  themeColor: "#0f0d0b",
};

const stations = [
  { step: "01", name: "Log Selection", img: "01-log-selection.jpg", alt: "Log selection", tag: "Manual · Trained graders",
    desc: "Every batch begins in the timber yard, where our graders inspect each hardwood log by hand — checking girth, straightness, density and freedom from knots, splits and decay. Only logs that pass this first human checkpoint ever reach the line." },
  { step: "02", name: "Debarking", img: "02-debarking.jpg", alt: "Debarking", tag: "Machine · Debarker",
    desc: "Selected logs pass through the rotary debarker, which strips away bark, grit and embedded stones in one clean rotation. A clean log protects the peeling knives downstream and exposes the true timber surface for inspection." },
  { step: "03", name: "Peeling", img: "03-peeling.jpg", alt: "Spindle-less peeling", tag: "Machine · Spindle-less peeler",
    desc: "The log spins against a precision knife and literally unwinds — coming off as one continuous ribbon of veneer. Because the machine is spindle-less, it peels the log down to a slim core, recovering far more timber from every log than conventional lathes." },
  { step: "04", name: "Drying", img: "04-drying.jpg", alt: "Core veneer drying", tag: "Machine · Core veneer dryer",
    desc: "Fresh veneer carries too much moisture to bond. Inside the core veneer dryer, sheets travel through precisely controlled heat zones until moisture drops to the ideal range — the point where resin grips deepest and boards stay permanently flat." },
  { step: "05", name: "Grading", img: "05-grading.jpg", alt: "Veneer grading", tag: "Manual · Sheet by sheet",
    desc: "Machines dry; people judge. Every dried veneer is graded by hand for thickness uniformity, surface quality, splits and patches — then sorted into face and core stacks. A board can only be as good as the worst veneer inside it, so nothing slips through here." },
  { step: "06", name: "Core Composing", img: "07-core-composing.jpg", alt: "Core composing", tag: "Machine · Core composer",
    desc: "Smaller veneer pieces are jointed edge-to-edge by the core composer into full-size core sheets — no gaps, no overlaps. This is what gives the board its solid, void-free interior, and it's the step most cut-price plywood quietly skips." },
  { step: "07", name: "Gluing", img: "08-gluing.jpg", alt: "Resin gluing", tag: "Machine · Glue mixer & spreader",
    desc: "Resin is batch-mixed in-house and matched to the grade being produced — moisture-resistant bonds for MR, full phenolic for BWR, BWP and Marine. Twin spreader rollers then coat each core veneer evenly on both faces, edge to edge, with no dry patches." },
  { step: "08", name: "Cold Pressing", img: "09-cold-pressing.jpg", alt: "Cold pressing", tag: "Machine · Cold press",
    desc: "The glued assembly is consolidated under high pressure at room temperature. Cold pressing squeezes out trapped air, seats every veneer in its resin bed and locks the stack in perfect alignment before it meets the heat." },
  { step: "09", name: "Hot Pressing", img: "10-hot-pressing.jpg?v=35", alt: "Multi-daylight hydraulic hot press machine with stacked heating platens", tag: "Machine · Multi-daylight hot press",
    desc: "Heat and pressure together cure the resin through every bond line, fusing the cross-laid veneers into a single rigid board. Temperature, pressure and time are controlled per grade — this is where plywood stops being layers and becomes structure." },
  { step: "10", name: "Calibrating", img: "11-calibrating.jpg", alt: "Calibrating", tag: "Machine · Calibrator",
    desc: "Twin abrasive heads grind both faces of the board simultaneously, bringing the entire sheet to one uniform thickness. Calibrated boards mean your laminates sit flush, your hinges align and your modular furniture actually fits — corner to corner." },
  { step: "11", name: "Facing", img: "12-facing.jpg", alt: "Facing", tag: "Manual · Grain-matched",
    desc: "Selected face veneers — the surface you'll actually see and touch — are laid onto the calibrated core by hand, grain-matched and centred. It's slower than automation, and it's why the face looks composed rather than assembled." },
  { step: "12", name: "Face Pressing", img: "13-face-pressing.jpg", alt: "Face pressing", tag: "Machine · Hot press, ~2 min cycle",
    desc: "A second, deliberately short hot-press cycle — about two minutes — bonds the face veneers onto the cured core. Short and precise, so the faces fuse permanently without re-stressing the structure underneath." },
  { step: "13", name: "Trimming", img: "14-trimming.jpg", alt: "Trimming", tag: "Machine · DD saw",
    desc: "The double-dimension saw squares all four edges in a single pass — true 90° corners, splinter-free edges and exact finished sizes. For bulk orders, this is also where custom pre-cut panels are dimensioned." },
  { step: "14", name: "Sanding", img: "15-sanding.jpg", alt: "Sanding", tag: "Machine · Wide-belt sander",
    desc: "A wide abrasive belt finishes both faces to a smooth, even surface — ready to take laminate, veneer, paint or polish without extra site preparation. What leaves this station already feels like furniture." },
  { step: "15", name: "ACC Treatment", img: "16-acc-treatment.jpg", alt: "ACC treatment", tag: "Machine · Dipping machine",
    desc: "Finished boards are immersed in an ACC preservative bath. The treatment penetrates the board and stays there for life — a permanent chemical shield against borers, termites and fungal decay, not a surface coat that wears away." },
  { step: "16", name: "Quality Check", img: "17-quality-check.jpg", alt: "Quality check", tag: "In-house laboratory",
    desc: "Samples from every batch go to the laboratory and are tested against IS:303 and IS:710 — moisture content, glue shear strength and water resistance, including the 72-hour boil for BWP and Marine grades. Only when the lab signs off does a board earn the mark." },
];

export default function Process() {
  return (
    <>
      <SiteHeader overDark darkPage active="process" />

      <div className="proc-progress" aria-hidden="true"><i></i></div>

      <main id="main" className="proc-page">
        {/* INTRO HERO PANEL */}
        <div className="proc-panel proc-panel--intro">
          <div className="proc-bg">
            <img src="/assets/img/logs.jpg?v=50" className="proc-bg-img" alt="Close-up of stacked timber logs showing growth rings in warm light" fetchPriority="high" />
            <div className="proc-dim"></div>
          </div>
          <div className="proc-content in">
            <span className="proc-eyebrow-line">Manufacturing process</span>
            <h1 className="proc-hero-title">From log<br />to board.</h1>
            <p className="proc-hero-sub">Scroll to walk the sixteen-station production line — the exact journey every board takes through our facility.</p>
          </div>
        </div>

        {stations.map((s) => (
          <section className="proc-panel" data-step={s.step} data-name={s.name} key={s.step}>
            <div className="proc-bg">
              <img src={`/assets/machines/${s.img}`} className="proc-bg-img" alt={s.alt} loading="lazy" />
              <div className="proc-dim"></div>
            </div>
            <div className="proc-content">
              <span className="proc-eyebrow-line">Station {s.step} / 16</span>
              <h2 className="proc-title">{s.name}</h2>
              <span className="proc-mach-tag">{s.tag}</span>
              <p className="proc-desc">{s.desc}</p>
            </div>
            <div className="proc-num-bg" aria-hidden="true">{s.step}</div>
          </section>
        ))}

        {/* CRAFT BAND */}
        <section className="section section-line proc-craft" style={{ paddingTop: "clamp(50px,7vw,90px)" }}>
          <div className="wrap">
            <div className="rv">
              <div className="img-frame ratio-219"><img src="/assets/img/craft-detail.jpg" alt="Hands guiding a wooden plane across a board" loading="lazy" /></div>
              <p className="img-cap">Machines build the board. People build the standard.</p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="big-cta">
          <div className="cta-mark" aria-hidden="true"></div>
          <div className="wrap">
            <h2 className="rv">Sixteen stations later, it&apos;s ready for your site.</h2>
            <p className="rv rv-d1">Want to see the line in person, or talk numbers for your next project? Get in touch.</p>
            <a className="btn rv rv-d2" href="/contact">Talk to us <span className="arr">→</span></a>
          </div>
        </section>
      </main>

      <ProcessMotion />
    </>
  );
}
