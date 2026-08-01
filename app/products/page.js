import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Products — MR, BWR, BWP, Marine & FR Grade Plywood",
  description:
    "Lennor Ply's full range: MR, BWR, BWP, Marine and FR grade plywood in 7 thicknesses and 3 sheet sizes, plus block boards, flush doors and laminates. Pre-cut sizing for bulk orders.",
  alternates: { canonical: "/products" },
  openGraph: {
    title: "Products — Lennor Ply | MR, BWR, BWP, Marine & FR Grade Plywood",
    description:
      "Five ISI-certified plywood grades, seven thicknesses, three sheet sizes — plus block boards and flush doors.",
    url: "https://lennorply.com/products",
    images: ["/assets/img/stack.jpg"],
  },
};

const grades = [
  {
    grade: "mr", watermark: "MR", is: "IS:303", abbr: "MR",
    name: "Moisture Resistant", tier: "Interior grade",
    body: "MUF-bonded plywood for dry interiors — wardrobes, beds, TV units, panelling and living spaces where the only enemy is everyday humidity.",
    chips: ["Bedroom", "Living", "Panelling", "Wardrobe"],
    specs: [["Bond", "Melamine-Urea-Formaldehyde"], ["Lab test", "Moisture & glue shear"]],
    w: 0.25,
  },
  {
    grade: "bwr", watermark: "BWR", is: "IS:303 · 2024", abbr: "BWR",
    name: "Boiling Water Resistant", tier: "Kitchen & semi-exposed",
    body: "Phenolic-bonded and certified to the updated 2024 standard. The right choice for kitchens, bathroom vanities, balconies and utility areas.",
    chips: ["Kitchen", "Vanity", "Balcony", "Utility"],
    specs: [["Bond", "Phenol-formaldehyde"], ["Lab test", "Boiling water resistance"]],
    w: 0.55,
  },
  {
    grade: "bwp", watermark: "BWP", is: "IS:303 / IS:710", abbr: "BWP",
    name: "Boiling Water Proof", tier: "Heavy-duty",
    body: "Survives 72 hours of continuous boiling without delaminating. For wet areas, outdoor furniture and projects that meet real weather.",
    chips: ["Wet areas", "Outdoor", "Terrace", "Commercial"],
    specs: [["Bond", "Phenol-formaldehyde"], ["Lab test", "72-hour continuous boil"]],
    w: 0.8,
  },
  {
    grade: "marine", watermark: "710", is: "IS:710", abbr: "Marine",
    name: "Marine Grade Plywood", tier: "The flagship benchmark",
    body: "Undiluted phenolic resin and dense, gap-free core construction. Specified where water is constant — and where failure is not an option.",
    chips: ["Boat build", "Submersion", "Marine", "Industrial"],
    specs: [["Bond", "Undiluted phenolic"], ["Lab test", "72-hour continuous boil"]],
    w: 1, dark: true,
  },
  {
    grade: "fr", watermark: "FR", is: "IS:5509", abbr: "FR",
    name: "Fire Resistant Plywood", tier: "Commercial & safety-rated",
    body: "Treated with fire-retardant chemicals that slow ignition and limit flame spread. Specified for public buildings, hotels, hospitals and any space where fire safety codes apply.",
    chips: ["Hotels", "Hospitals", "Schools", "Public spaces"],
    specs: [["Treatment", "Fire-retardant salts"], ["Lab test", "Flame spread & ignitability"]],
    w: 0.9, fr: true, meterLabels: ["Standard", "Fire rated"],
  },
];

const thicknesses = [4, 6, 9, 12, 16, 19, 25];

const beyond = [
  { img: "block-boards.png", alt: "Plywood block boards stacked in workshop showing raw timber grain on edges", title: "Block Boards", ix: "A", d: null,
    body: "Seasoned hardwood battens sandwiched between veneers — the stiff, sag-free choice for long shelves, wardrobe shutters and panels over 5 feet. Available in the same sheet sizes as our plywood." },
  { img: "flush-doors.png", alt: "Flush door in a real residential corridor with natural daylight", title: "Flush Doors", ix: "B", d: ".1s",
    body: "Solid-core flush doors built with the same ACC-treated, hot-pressed construction as our boards — dimensionally stable, borer-proof and ready for any finish your project demands." },
  { img: "laminates.png", alt: "Decorative laminate samples in wood grain and solid finishes fanned out", title: "Laminates", ix: "C", d: ".2s",
    body: "Decorative laminates to finish what the line produces — pair your boards, doors and surfaces at one counter, under one mark, in one delivery." },
];

export default function Products() {
  return (
    <>
      <SiteHeader active="products" />

      <main id="main">
        {/* page hero */}
        <section className="phero">
          <div className="phero__bg" data-parallax="6">
            <img src="/assets/img/kitchen.jpg?v=50" alt="Modern kitchen with warm oak plywood cabinetry, open shelving and wicker pendant lights" width="1500" height="1875" fetchPriority="high" />
          </div>
          <div className="shell">
            <h1 className="display" data-mask>
              <span className="mask-line"><span>One range. Built</span></span>
              <span className="mask-line" style={{ "--d": ".12s" }}><span>for every <em className="it">room</em>.</span></span>
            </h1>
            <p className="lede phero__lede" data-reveal style={{ "--d": ".3s" }}>
              Five ISI-certified plywood grades, block boards and flush doors —
              all manufactured on one line, under one mark. No sub-brands, no
              quiet downgrades.
            </p>
            <div className="phero__aside" data-reveal style={{ "--d": ".45s" }}>
              <a className="btn" href="/contact#quote" data-magnetic="0.2"><span>Request pricing</span><span className="btn__arr">→</span></a>
              <a className="btn btn--ghost" href="/brochure"><span>Download brochure</span><span className="btn__arr">↓</span></a>
            </div>
          </div>
        </section>

        {/* grade cards */}
        <section className="band rule-top">
          <div className="shell">
            <div className="sect-head">
              <div className="sect-head__bar" data-reveal>
                <div className="sect-head__lead"><span className="index">01</span><span className="label label--ink">The five grades</span></div>
                <span className="index sect-head__meta">IS:303 · IS:710 · IS:5509</span>
              </div>
              <h2 className="h2" data-mask>
                <span className="mask-line"><span>Graded by how much</span></span>
                <span className="mask-line" style={{ "--d": ".1s" }}><span>water — and <em className="it">fire</em> — it can take.</span></span>
              </h2>
            </div>

            <div className="gstrip" data-reveal style={{ marginTop: "clamp(44px,5.5vw,80px)" }}>
              <div className="gstrip__track">
                {grades.map((g) => (
                  <article
                    key={g.grade}
                    className={`gstrip__card${g.dark ? " gstrip__card--dark" : ""}${g.fr ? " gstrip__card--fr" : ""}`}
                    data-grade={g.grade}
                  >
                    <span className="gstrip__watermark" aria-hidden="true">{g.watermark}</span>
                    <span className="gstrip__gloss" aria-hidden="true"></span>
                    <span className="gstrip__is">{g.is}</span>
                    <h3 className="gstrip__abbr">{g.abbr}</h3>
                    <p className="gstrip__name">{g.name}</p>
                    <p className="gstrip__tier">{g.tier}</p>
                    <p className="body gstrip__body">{g.body}</p>
                    <div className="gstrip__chips">
                      {g.chips.map((c) => <span className="chip" key={c}>{c}</span>)}
                    </div>
                    <div className="gstrip__foot">
                      <div className="gstrip__specs">
                        {g.specs.map(([k, v]) => (
                          <div className="grade__spec" key={k}><span className="k">{k}</span><span className="v">{v}</span></div>
                        ))}
                      </div>
                      <div className="meter" style={{ "--w": g.w }}>
                        <div className="meter__track"><div className="meter__fill"></div></div>
                        <div className="meter__bar">
                          <span className="index">{g.meterLabels ? g.meterLabels[0] : "Dry interiors"}</span>
                          <span className="index">{g.meterLabels ? g.meterLabels[1] : "Submerged"}</span>
                        </div>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* thickness */}
        <section className="band rule-top bg-coal">
          <div className="shell">
            <div className="sect-head">
              <div className="sect-head__bar" data-reveal>
                <div className="sect-head__lead"><span className="index">02</span><span className="label">Seven thicknesses</span></div>
                <span className="index sect-head__meta">More layers · more strength</span>
              </div>
              <h2 className="h2" data-mask>
                <span className="mask-line"><span>Pick a thickness.</span></span>
                <span className="mask-line" style={{ "--d": ".1s" }}><span>Watch it <em className="it">stack</em>.</span></span>
              </h2>
              <p className="lede" data-reveal style={{ "--d": ".15s" }}>
                Every thickness is built from an odd count of cross-laid veneers,
                pressed and bonded under heat — the more layers, the stiffer the
                board. Choose one to see how it’s actually built.
              </p>
            </div>

            <div className="thick-picker" data-reveal style={{ "--d": ".2s", marginTop: "clamp(36px,4vw,52px)" }}>
              {thicknesses.map((mm) => (
                <button className="thick-btn" data-mm={mm} key={mm}>{mm} mm</button>
              ))}
            </div>

            <div className="stack-stage" id="stackStage">
              <div className="stack-view"><div className="stack" id="plyStack" aria-live="polite"></div></div>
              <div className="stack-data">
                <div className="sd-row"><span className="k">Thickness</span><span className="v" id="sdThick">—</span></div>
                <div className="sd-row"><span className="k">Construction</span><span className="v" id="sdLayers">—</span></div>
                <div className="sd-row"><span className="k">Typical use</span><span className="v sd-use" id="sdUse">—</span></div>
                <div className="sd-row"><span className="k">Bond line</span><span className="v sd-bond"><span className="sd-accent">Grade-matched</span> resin at every layer</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* sizes */}
        <section className="band rule-top">
          <div className="shell">
            <div className="sect-head">
              <div className="sect-head__bar" data-reveal>
                <div className="sect-head__lead"><span className="index">03</span><span className="label label--ink">Sheet sizes</span></div>
                <span className="index sect-head__meta">To scale</span>
              </div>
              <h2 className="h2" data-mask>
                <span className="mask-line"><span>Three sizes. Or</span></span>
                <span className="mask-line" style={{ "--d": ".1s" }}><span>exactly <em className="it">yours</em>.</span></span>
              </h2>
            </div>

            <div className="sizes" style={{ marginTop: "clamp(44px,5.5vw,80px)" }}>
              <div className="size" data-reveal>
                <div className="size__rect" style={{ "--w": 8 }}><span>8 × 4 ft</span></div>
                <div className="size__meta"><span className="index">2440 × 1220 mm</span><span className="label label--timber">Standard</span></div>
              </div>
              <div className="size" data-reveal style={{ "--d": ".08s" }}>
                <div className="size__rect" style={{ "--w": 7 }}><span>7 × 4 ft</span></div>
                <div className="size__meta"><span className="index">2135 × 1220 mm</span></div>
              </div>
              <div className="size" data-reveal style={{ "--d": ".16s" }}>
                <div className="size__rect" style={{ "--w": 6 }}><span>6 × 4 ft</span></div>
                <div className="size__meta"><span className="index">1830 × 1220 mm</span></div>
              </div>
            </div>

            <p className="body" data-reveal style={{ "--d": ".2s", marginTop: "clamp(28px,3.4vw,44px)", maxWidth: "56ch" }}>
              Bulk order? We also cut panels to your exact dimensions on the
              factory panel saw — nested for zero waste, stacked and labelled to
              your cutting list.
            </p>
          </div>
        </section>

        {/* beyond */}
        <section className="band rule-top" id="beyond">
          <div className="shell">
            <div className="sect-head">
              <div className="sect-head__bar" data-reveal>
                <div className="sect-head__lead"><span className="index">04</span><span className="label label--ink">Beyond plywood</span></div>
                <span className="index sect-head__meta">Same line · same standard</span>
              </div>
              <h2 className="h2" data-mask>
                <span className="mask-line"><span>Beyond</span></span>
                <span className="mask-line" style={{ "--d": ".1s" }}><span>the <em className="it">board</em>.</span></span>
              </h2>
            </div>

            <div className="beyond" style={{ marginTop: "clamp(44px,5.5vw,80px)" }}>
              {beyond.map((b) => (
                <article className="bcard" data-reveal key={b.title} style={b.d ? { "--d": b.d } : undefined}>
                  <div className="plate plate--hover" data-plate style={b.d ? { "--d": b.d } : undefined}>
                    <img src={`/assets/img/${b.img}`} alt={b.alt} width="1600" height="1050" loading="lazy" style={{ aspectRatio: "4/4.6" }} />
                  </div>
                  <div className="bcard__head"><h3 className="h3">{b.title}</h3><span className="index">{b.ix}</span></div>
                  <p className="body">{b.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* statement */}
        <section style={{ position: "relative", overflow: "hidden", background: "#EDE7DA", borderTop: "1px solid #DDD7CB", padding: "clamp(88px,12vw,160px) 0", textAlign: "center" }}>
          <div aria-hidden="true" style={{ position: "absolute", left: "clamp(-160px,-8vw,-40px)", top: "50%", transform: "translateY(-50%)", width: "clamp(380px,50vw,660px)", height: "clamp(380px,50vw,660px)", background: "url('/assets/brand/mark-black.png') no-repeat center/contain", opacity: 0.09, pointerEvents: "none" }}></div>
          <div className="shell" style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(2.4rem,5.5vw,4.4rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#0D0C0A", maxWidth: "22ch", margin: "0 auto", textAlign: "center" }}>
              Need pre-cut panels<br />for a <em style={{ fontStyle: "italic", color: "#8C4B1A" }}>bulk</em> order?
            </h2>
            <p style={{ margin: "28px auto 0", maxWidth: "50ch", fontSize: "clamp(1rem,1.4vw,1.22rem)", lineHeight: 1.65, color: "#52504A", textAlign: "center" }}>
              Send us your cutting list — we&apos;ll deliver panels sized to your project, nested for zero waste and dispatched straight from the line in Karnataka.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "clamp(32px,4vh,52px)" }}>
              <a href="/contact#quote" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "15px 34px", borderRadius: "99px", background: "#0D0C0A", color: "#fff", border: "1px solid #0D0C0A", fontWeight: 700, fontSize: ".95rem", textDecoration: "none", transition: ".3s" }}>Request pricing <span>→</span></a>
              <a href="/process" style={{ display: "inline-flex", alignItems: "center", padding: "15px 34px", borderRadius: "99px", background: "transparent", color: "#0D0C0A", border: "1px solid #0D0C0A", fontWeight: 600, fontSize: ".95rem", textDecoration: "none", transition: ".3s" }}>See how it&apos;s made</a>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
