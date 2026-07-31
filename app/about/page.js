import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "About — Plywood Manufacturer, Karnataka",
  description:
    "Lennor Ply is an ISI-certified plywood manufacturer in Karnataka — built on composed cores, calibrated faces and in-house testing. Everything we sell, we make.",
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About — Lennor Ply | Plywood Manufacturer, Karnataka",
    description:
      "Everything we sell, we make — on our own sixteen-station line, under our own mark.",
    url: "https://lennorply.com/about",
    images: ["/assets/img/factory-wide.jpg"],
  },
};

const commitments = [
  { no: "01", title: "Honest construction", d: null,
    body: "Full-size, gap-free composed cores in every board. No fillers, no voids, no surprises when the saw goes through." },
  { no: "02", title: "Certified, then tested again", d: ".09s",
    body: "IS:303 and IS:710 certification is the floor, not the ceiling. Our in-house lab re-tests every batch before it ships." },
  { no: "03", title: "Built for decades", d: ".18s",
    body: "ACC treatment, calibrated faces and grade-matched resin — decisions made for the board’s twentieth year, not its first." },
];

export default function About() {
  return (
    <>
      <SiteHeader active="about" />

      <main id="main">
        {/* page hero */}
        <section className="phero">
          <div className="phero__bg" data-parallax="6">
            <img src="/assets/img/factory-wide.jpg" alt="The Lennor factory floor — orderly rows of stacked veneer and finished boards receding into warm light" width="2400" height="1340" fetchPriority="high" />
          </div>
          <div className="shell">
            <h1 className="display" data-mask>
              <span className="mask-line"><span>We make the board</span></span>
              <span className="mask-line" style={{ "--d": ".12s" }}><span>your work <em className="it">stands</em> on.</span></span>
            </h1>
            <p className="lede phero__lede" data-reveal style={{ "--d": ".3s" }}>
              Lennor Ply is a plywood manufacturer based in
              Karnataka. Everything we sell, we make — on our own
              sixteen-station line, under our own mark.
            </p>
          </div>
        </section>

        {/* manifesto */}
        <section className="band rule-top">
          <div className="shell">
            <div className="sect-head">
              <div className="sect-head__bar" data-reveal>
                <div className="sect-head__lead"><span className="index">01</span><span className="label label--ink">Why Lennor exists</span></div>
                <span className="index sect-head__meta">The invisible promise</span>
              </div>
              <h2 className="h2" data-mask>
                <span className="mask-line"><span>Trust can’t be</span></span>
                <span className="mask-line" style={{ "--d": ".1s" }}><span><em className="it">outsourced</em>.</span></span>
              </h2>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))", gap: "clamp(36px,5vw,88px)", marginTop: "clamp(44px,5.5vw,80px)", alignItems: "start" }}>
              <p className="scrub" data-scrub>When a carpenter screws a hinge into a board, or a family loads a wardrobe shelf for the next twenty years, they are trusting something they will never see — the core. Whether the veneers inside are gap-free, whether the glue line is honest, whether the board was really treated against borers. Lennor Ply was built around that invisible promise. We compose every core ourselves, mix our own resin, calibrate every board and test every batch in our own laboratory against IS:303 and IS:710. Nothing is outsourced, because trust can’t be.</p>
              <figure data-reveal style={{ "--d": ".15s" }}>
                <div className="plate plate--hover" data-plate>
                  <img src="/assets/img/hands.jpg?v=36" alt="Professional wood inspector examining high-grade teak veneer panel in clean modern factory workshop" width="1500" height="1862" loading="lazy" style={{ aspectRatio: "4/4.7" }} />
                </div>
                <figcaption className="plate__caption"><span className="label">Facing — grain-matched by hand</span><span className="index">Plate 01</span></figcaption>
              </figure>
            </div>
          </div>
        </section>

        {/* the mark */}
        <section className="band rule-top bg-bone">
          <div className="shell">
            <div className="markx">
              <div className="markx__stage" data-reveal aria-hidden="true">
                <span className="markx__ring"></span>
                <span className="markx__ring markx__ring--2"></span>
                <img className="markx__img" src="/assets/brand/mark-black.svg" alt="" width="488" height="488" loading="lazy" />
              </div>
              <div>
                <div className="sect-head__bar" data-reveal>
                  <div className="sect-head__lead"><span className="index">02</span><span className="label label--ink">The mark</span></div>
                  <span className="index sect-head__meta">Earned, not printed</span>
                </div>
                <h2 className="h2" data-mask style={{ marginTop: "clamp(26px,3.4vh,44px)" }}>
                  <span className="mask-line"><span>A log, resolved</span></span>
                  <span className="mask-line" style={{ "--d": ".1s" }}><span>into <em className="it">layers</em>.</span></span>
                </h2>
                <p className="lede" data-reveal style={{ "--d": ".15s" }}>
                  Our mark is a log’s cross-section, split into the layers it
                  becomes. It goes on every board that survives all sixteen
                  stations — and on nothing else. If it didn’t survive them,
                  it isn’t a Lennor.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* commitments */}
        <section className="band rule-top">
          <div className="shell">
            <div className="sect-head">
              <div className="sect-head__bar" data-reveal>
                <div className="sect-head__lead"><span className="index">03</span><span className="label label--ink">What we stand on</span></div>
                <span className="index sect-head__meta">Three commitments</span>
              </div>
              <h2 className="h2" data-mask>
                <span className="mask-line"><span>Three things we</span></span>
                <span className="mask-line" style={{ "--d": ".1s" }}><span>will not <em className="it">trade</em>.</span></span>
              </h2>
              <p className="lede" data-reveal style={{ "--d": ".15s" }}>
                These are the decisions that cost us money and win us specifiers.
                We have never found a good reason to reverse any of them.
              </p>
            </div>

            <div className="values" style={{ marginTop: "clamp(44px,5.5vw,80px)" }}>
              {commitments.map((c) => (
                <div className="values__cell" data-reveal key={c.no} style={c.d ? { "--d": c.d } : undefined}>
                  <span className="index">{c.no}</span>
                  <h3 className="h3">{c.title}</h3>
                  <p className="body">{c.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* facility */}
        <section className="band rule-top">
          <div className="shell">
            <div className="sect-head">
              <div className="sect-head__bar" data-reveal>
                <div className="sect-head__lead"><span className="index">04</span><span className="label label--ink">The facility</span></div>
                <span className="index sect-head__meta">12.97°N 76.10°E</span>
              </div>
              <h2 className="h2" data-mask>
                <span className="mask-line"><span>Made in Karnataka.</span></span>
                <span className="mask-line" style={{ "--d": ".1s" }}><span>Shipped <em className="it">anywhere</em>.</span></span>
              </h2>
              <p className="lede" data-reveal style={{ "--d": ".15s" }}>
                Our plant sits inside Karnataka —
                the full production line, ACC treatment plant and testing
                laboratory under one roof.
              </p>
            </div>

            <figure style={{ marginTop: "clamp(44px,5.5vw,80px)" }}>
              <div className="plate" data-plate>
                <img src="/assets/img/press.jpg" alt="Inside the Lennor plant — the hot press at work under bright factory lighting" width="1584" height="672" loading="lazy" style={{ aspectRatio: "21/9" }} />
              </div>
              <figcaption className="plate__caption"><span className="label">The line, mid-cycle</span><span className="index">Karnataka</span></figcaption>
            </figure>

            <div className="values" style={{ marginTop: "clamp(28px,3.4vw,44px)", border: 0, background: "transparent", gap: "clamp(20px,3vw,40px)" }}>
              <div style={{ borderTop: "1px solid var(--line)", paddingTop: "22px" }} data-reveal>
                <h3 className="h3" style={{ fontSize: "1.25rem" }}>One roof, one line</h3>
                <p className="body" style={{ marginTop: "10px", fontSize: ".94rem" }}>Peeling to packing happens in a single continuous flow — no transport damage between processes, no mixed-source cores.</p>
              </div>
              <div style={{ borderTop: "1px solid var(--line)", paddingTop: "22px" }} data-reveal>
                <h3 className="h3" style={{ fontSize: "1.25rem" }}>Dealer &amp; project supply</h3>
                <p className="body" style={{ marginTop: "10px", fontSize: ".94rem" }}>We supply dealers, contractors and institutional projects directly from the factory gate, with pre-cut sizing for bulk orders.</p>
              </div>
              <div style={{ borderTop: "1px solid var(--line)", paddingTop: "22px" }} data-reveal>
                <h3 className="h3" style={{ fontSize: "1.25rem" }}>Visits welcome</h3>
                <p className="body" style={{ marginTop: "10px", fontSize: ".94rem" }}>Architects and bulk buyers are welcome to inspect the line and the lab before they order. Seeing is believing — call ahead and come through.</p>
              </div>
            </div>

            <div data-reveal style={{ marginTop: "clamp(28px,3.4vw,44px)" }}>
              <a className="link-line" href="/process">Walk the production line <span className="btn__arr">→</span></a>
            </div>
          </div>
        </section>

        {/* statement */}
        <section style={{ position: "relative", overflow: "hidden", background: "#EDE7DA", borderTop: "1px solid #DDD7CB", padding: "clamp(88px,12vw,160px) 0", textAlign: "center" }}>
          <div aria-hidden="true" style={{ position: "absolute", left: "clamp(-160px,-8vw,-40px)", top: "50%", transform: "translateY(-50%)", width: "clamp(380px,50vw,660px)", height: "clamp(380px,50vw,660px)", background: "url('/assets/brand/mark-black.png') no-repeat center/contain", opacity: 0.09, pointerEvents: "none" }}></div>
          <div className="shell" style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(2.4rem,5.5vw,4.4rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#0D0C0A", maxWidth: "22ch", margin: "0 auto", textAlign: "center" }}>
              Put the Lennor mark<br />on your <em style={{ fontStyle: "italic", color: "#8C4B1A" }}>next</em> project.
            </h2>
            <p style={{ margin: "28px auto 0", maxWidth: "50ch", fontSize: "clamp(1rem,1.4vw,1.22rem)", lineHeight: 1.65, color: "#52504A", textAlign: "center" }}>
              Talk to us about grades, dealer pricing, institutional supply or a walk through the factory floor.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "clamp(32px,4vh,52px)" }}>
              <a href="/contact" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "15px 34px", borderRadius: "99px", background: "#0D0C0A", color: "#fff", border: "1px solid #0D0C0A", fontWeight: 700, fontSize: ".95rem", textDecoration: "none", transition: ".3s" }}>Contact us <span>→</span></a>
              <a href="tel:+917760778886" style={{ display: "inline-flex", alignItems: "center", padding: "15px 34px", borderRadius: "99px", background: "transparent", color: "#0D0C0A", border: "1px solid #0D0C0A", fontWeight: 600, fontSize: ".95rem", textDecoration: "none", transition: ".3s" }}>+91 77607 78886</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
