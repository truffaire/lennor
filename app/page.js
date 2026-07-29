import SiteHeader from "@/components/SiteHeader";

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://lennorply.com/#org",
      name: "Lennor Ply",
      url: "https://lennorply.com/",
      logo: "https://lennorply.com/assets/brand/logo-black-1200.png",
      slogan: "Ply · Board · Door · Laminates",
      email: "lennorply@gmail.com",
      telephone: "+91 77607 78886",
    },
    {
      "@type": "LocalBusiness",
      "@id": "https://lennorply.com/#factory",
      name: "Lennor Ply — Factory & Head Office",
      parentOrganization: { "@id": "https://lennorply.com/#org" },
      image: "https://lennorply.com/assets/img/factory-wide.jpg",
      telephone: "+91 77607 78886",
      email: "lennorply@gmail.com",
      address: {
        "@type": "PostalAddress",
        streetAddress: "KIADB Industrial Growth Centre",
        addressLocality: "Hassan",
        addressRegion: "Karnataka",
        postalCode: "573201",
        addressCountry: "IN",
      },
      geo: { "@type": "GeoCoordinates", latitude: 12.97, longitude: 76.1 },
      openingHours: "Mo-Sa 09:00-18:00",
    },
  ],
};

const seals = [
  {
    id: "sealpath1",
    ring: "Calibrated · uniform · full sheet · Lennor standard · ",
    no: "01",
    title: "Calibrated thickness",
    body: "Uniform thickness across the full sheet — no thick ends, no thin middles.",
    d: null,
  },
  {
    id: "sealpath2",
    ring: "Borer proof · termite proof · treated for life · ",
    no: "02",
    title: "ACC treatment",
    body: "Dipped in ACC preservative for lifelong resistance against borers, termites and fungal decay.",
    d: ".08s",
  },
  {
    id: "sealpath3",
    ring: "IS:303 · IS:710 · every batch tested · signed off · ",
    no: "03",
    title: "In-house laboratory",
    body: "Every batch tested against IS:303 and IS:710 — glue shear, moisture and water-resistance — before dispatch.",
    d: ".16s",
  },
  {
    id: "sealpath4",
    ring: "Cut to your list · nested · zero waste · delivered · ",
    no: "04",
    title: "Pre-cut bulk sizing",
    body: "Panels cut to your dimensions, cutting your wastage and your labour cost on site.",
    d: ".24s",
  },
];

export default function Home() {
  return (
    <>
      <SiteHeader overDark />

      <main id="main">
        {/* hero */}
        <section className="hero hero--dark hero--focus">
          <div className="hero__bg" data-parallax="7">
            <img src="/assets/img/hero-dark.jpg?v=39" alt="Modern oak interior with cove lighting" width="2560" height="1429" fetchPriority="high" />
          </div>
          <div className="hero__veil" aria-hidden="true"></div>

          <div className="shell hero__inner">
            <h1 className="display hero__h1 hero__h1--focus">The board beneath every <em className="it">beautiful</em> thing.</h1>

            <p className="lede hero__lede" data-reveal data-gate style={{ "--d": ".3s" }}>
              Composed, calibrated, and lab-tested.
            </p>

            <div className="hero__cta" data-reveal data-gate style={{ "--d": ".45s" }}>
              <a className="btn btn--paper" href="/products" data-magnetic="0.22"><span>Explore the range</span><span className="btn__arr">→</span></a>
            </div>
          </div>
        </section>

        {/* spec ribbon bar */}
        <div className="spec-bar rule-top bg-bone" data-reveal>
          <div className="shell">
            <dl className="spec-bar__grid">
              <div><dt>Grades</dt><dd>MR · BWR · BWP · Marine · FR</dd></div>
              <div><dt>Standards</dt><dd>IS:303 · IS:710 · IS:5509</dd></div>
              <div><dt>The line</dt><dd>16 stations, one roof</dd></div>
              <div><dt>Origin</dt><dd>Karnataka</dd></div>
            </dl>
          </div>
        </div>

        {/* anatomy · cutaway */}
        <section className="band rule-top" id="anatomy">
          <div className="shell">
            <div className="sect-head">
              <div className="sect-head__bar" data-reveal>
                <div className="sect-head__lead"><span className="index">02</span><span className="label label--ink">Anatomy of a board</span></div>
                <span className="index sect-head__meta">Five layers · one bond</span>
              </div>
              <h2 className="h2" data-mask>
                <span className="mask-line"><span>Built layer</span></span>
                <span className="mask-line" style={{ "--d": ".1s" }}><span>by <em className="it">layer</em>.</span></span>
              </h2>
              <p className="lede" data-reveal style={{ "--d": ".15s" }}>
                Cross-laid veneers, composed edge-to-edge and pressed into one
                rigid structure. Here is a Lennor board in section — every ply,
                and the job it does.
              </p>
            </div>

            <div className="cut" id="cut" style={{ marginTop: "clamp(44px,5.5vw,80px)" }}>
              <div className="cut__stage" data-reveal>
                <div className="cut__caliper"><span>6.0 mm · 5 ply</span></div>
                <div className="cut__board">
                  <div className="cut__ply" data-h="face" data-i="0"></div>
                  <div className="cut__ply" data-h="cross" data-i="1"></div>
                  <div className="cut__ply" data-h="core" data-i="2"></div>
                  <div className="cut__ply" data-h="cross" data-i="3"></div>
                  <div className="cut__ply" data-h="face" data-i="4"></div>
                </div>
                <div className="cut__scan" style={{ top: 0 }}></div>
              </div>

              <div className="cut__rows" data-reveal style={{ "--d": ".1s" }}>
                <div className="cut__row" data-i="0">
                  <span className="mm">0.6 mm</span>
                  <span><span className="nm">Face veneer</span><span className="ds">Selected hardwood, grain-matched by hand</span></span>
                  <span className="ix">01</span>
                </div>
                <div className="cut__row" data-i="1">
                  <span className="mm">1.2 mm</span>
                  <span><span className="nm">Cross-band</span><span className="ds">Grain laid perpendicular for lateral strength</span></span>
                  <span className="ix">02</span>
                </div>
                <div className="cut__row" data-i="2">
                  <span className="mm">2.4 mm</span>
                  <span><span className="nm">Composed core</span><span className="ds">Multiple layers of core veneer, jointed edge-to-edge — no gaps, no voids</span></span>
                  <span className="ix">03</span>
                </div>
                <div className="cut__row" data-i="3">
                  <span className="mm">1.2 mm</span>
                  <span><span className="nm">Cross-band</span><span className="ds">Grain laid perpendicular for lateral strength</span></span>
                  <span className="ix">04</span>
                </div>
                <div className="cut__row" data-i="4">
                  <span className="mm">0.6 mm</span>
                  <span><span className="nm">Face veneer</span><span className="ds">Calibrated flat, sanded ready for finish</span></span>
                  <span className="ix">05</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* grades */}
        <section className="band rule-top">
          <div className="shell">
            <div className="sect-head">
              <div className="sect-head__bar" data-reveal>
                <div className="sect-head__lead"><span className="index">03</span><span className="label label--ink">The range</span></div>
                <span className="index sect-head__meta">Choose your water line</span>
              </div>
              <h2 className="h2" data-mask>
                <span className="mask-line"><span>Five grades.</span></span>
                <span className="mask-line" style={{ "--d": ".1s" }}><span>Every <em className="it">room</em> covered.</span></span>
              </h2>
              <p className="lede" data-reveal style={{ "--d": ".15s" }}>
                From dry bedroom interiors to fire-rated commercial spaces — each
                grade is bonded, treated and tested for the exact conditions it
                will meet.
              </p>
            </div>

            <div className="grades__list" style={{ marginTop: "clamp(44px,5.5vw,80px)" }}>

              <article className="grade" data-reveal>
                <span className="grade__no">01</span>
                <h3 className="grade__name">MR</h3>
                <div className="grade__meta">
                  <span className="grade__tier">Moisture Resistant — interior grade</span>
                  <span className="grade__is">IS:303</span>
                </div>
                <button className="grade__cue" aria-expanded="false" aria-label="Toggle MR details">
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M7 1v12M1 7h12" /></svg>
                </button>
                <div className="grade__panel">
                  <div className="grade__panel-inner">
                    <div className="grade__detail">
                      <div>
                        <p className="body">UF-bonded plywood for dry interiors — wardrobes, beds, TV units, panelling and living spaces where the only enemy is everyday humidity.</p>
                        <div className="grade__rooms">
                          <span className="chip">Bedroom</span><span className="chip">Living</span><span className="chip">Panelling</span><span className="chip">Wardrobe</span>
                        </div>
                      </div>
                      <div>
                        <div className="grade__specs">
                          <div className="grade__spec"><span className="k">Bond</span><span className="v">Melamine-Urea-Formaldehyde</span></div>
                          <div className="grade__spec"><span className="k">Lab test</span><span className="v">Moisture &amp; glue shear</span></div>
                          <div className="grade__spec"><span className="k">Standard</span><span className="v">IS:303</span></div>
                        </div>
                        <div className="meter" style={{ "--w": 0.25 }}>
                          <div className="meter__track"><div className="meter__fill"></div></div>
                          <div className="meter__bar"><span className="index">Dry interiors</span><span className="index">Submerged</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="grade" data-reveal style={{ "--d": ".06s" }}>
                <span className="grade__no">02</span>
                <h3 className="grade__name">BWR</h3>
                <div className="grade__meta">
                  <span className="grade__tier">Boiling Water Resistant — kitchen &amp; semi-exposed</span>
                  <span className="grade__is">IS:303 · 2024</span>
                </div>
                <button className="grade__cue" aria-expanded="false" aria-label="Toggle BWR details">
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M7 1v12M1 7h12" /></svg>
                </button>
                <div className="grade__panel">
                  <div className="grade__panel-inner">
                    <div className="grade__detail">
                      <div>
                        <p className="body">Phenolic-bonded and certified to the updated 2024 standard. The right choice for kitchens, bathroom vanities, balconies and utility areas.</p>
                        <div className="grade__rooms">
                          <span className="chip">Kitchen</span><span className="chip">Vanity</span><span className="chip">Balcony</span><span className="chip">Utility</span>
                        </div>
                      </div>
                      <div>
                        <div className="grade__specs">
                          <div className="grade__spec"><span className="k">Bond</span><span className="v">Phenol-formaldehyde</span></div>
                          <div className="grade__spec"><span className="k">Lab test</span><span className="v">Boiling water resistance</span></div>
                          <div className="grade__spec"><span className="k">Standard</span><span className="v">IS:303 · 2024</span></div>
                        </div>
                        <div className="meter" style={{ "--w": 0.55 }}>
                          <div className="meter__track"><div className="meter__fill"></div></div>
                          <div className="meter__bar"><span className="index">Dry interiors</span><span className="index">Submerged</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="grade" data-reveal style={{ "--d": ".12s" }}>
                <span className="grade__no">03</span>
                <h3 className="grade__name">BWP</h3>
                <div className="grade__meta">
                  <span className="grade__tier">Boiling Water Proof — heavy-duty</span>
                  <span className="grade__is">IS:303 / IS:710</span>
                </div>
                <button className="grade__cue" aria-expanded="false" aria-label="Toggle BWP details">
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M7 1v12M1 7h12" /></svg>
                </button>
                <div className="grade__panel">
                  <div className="grade__panel-inner">
                    <div className="grade__detail">
                      <div>
                        <p className="body">Survives 72 hours of continuous boiling without delaminating. For wet areas, outdoor furniture and projects that meet real weather.</p>
                        <div className="grade__rooms">
                          <span className="chip">Wet areas</span><span className="chip">Outdoor</span><span className="chip">Terrace</span><span className="chip">Commercial</span>
                        </div>
                      </div>
                      <div>
                        <div className="grade__specs">
                          <div className="grade__spec"><span className="k">Bond</span><span className="v">Phenol-formaldehyde</span></div>
                          <div className="grade__spec"><span className="k">Lab test</span><span className="v">72-hour continuous boil</span></div>
                          <div className="grade__spec"><span className="k">Standard</span><span className="v">IS:303 / IS:710</span></div>
                        </div>
                        <div className="meter" style={{ "--w": 0.8 }}>
                          <div className="meter__track"><div className="meter__fill"></div></div>
                          <div className="meter__bar"><span className="index">Dry interiors</span><span className="index">Submerged</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="grade" data-reveal style={{ "--d": ".18s" }}>
                <span className="grade__no">04</span>
                <h3 className="grade__name">Marine</h3>
                <div className="grade__meta">
                  <span className="grade__tier">Marine grade — the flagship benchmark</span>
                  <span className="grade__is">IS:710</span>
                  <span className="grade__flag">Flagship</span>
                </div>
                <button className="grade__cue" aria-expanded="false" aria-label="Toggle Marine details">
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M7 1v12M1 7h12" /></svg>
                </button>
                <div className="grade__panel">
                  <div className="grade__panel-inner">
                    <div className="grade__detail">
                      <div>
                        <p className="body">Undiluted phenolic resin and dense, gap-free core construction. Specified where water is constant — and where failure is not an option.</p>
                        <div className="grade__rooms">
                          <span className="chip">Boat build</span><span className="chip">Submersion</span><span className="chip">Marine</span><span className="chip">Industrial</span>
                        </div>
                      </div>
                      <div>
                        <div className="grade__specs">
                          <div className="grade__spec"><span className="k">Bond</span><span className="v">Undiluted phenolic</span></div>
                          <div className="grade__spec"><span className="k">Lab test</span><span className="v">72-hour continuous boil</span></div>
                          <div className="grade__spec"><span className="k">Standard</span><span className="v">IS:710</span></div>
                        </div>
                        <div className="meter" style={{ "--w": 1 }}>
                          <div className="meter__track"><div className="meter__fill"></div></div>
                          <div className="meter__bar"><span className="index">Dry interiors</span><span className="index">Submerged</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

              <article className="grade grade--fr" data-reveal style={{ "--d": ".24s" }}>
                <span className="grade__no">05</span>
                <h3 className="grade__name" style={{ color: "var(--timber)" }}>FR</h3>
                <div className="grade__meta">
                  <span className="grade__tier">Fire Resistant — commercial &amp; safety-rated</span>
                  <span className="grade__is">IS:5509</span>
                  <span className="grade__flag">Fire Rated</span>
                </div>
                <button className="grade__cue" aria-expanded="false" aria-label="Toggle FR details">
                  <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true"><path d="M7 1v12M1 7h12" /></svg>
                </button>
                <div className="grade__panel">
                  <div className="grade__panel-inner">
                    <div className="grade__detail">
                      <div>
                        <p className="body">Treated with fire-retardant chemicals that slow ignition and limit flame spread. Specified for public buildings, hotels, hospitals and any space where fire safety codes apply.</p>
                        <div className="grade__rooms">
                          <span className="chip">Hotels</span><span className="chip">Hospitals</span><span className="chip">Schools</span><span className="chip">Public spaces</span>
                        </div>
                      </div>
                      <div>
                        <div className="grade__specs">
                          <div className="grade__spec"><span className="k">Treatment</span><span className="v">Fire-retardant salts</span></div>
                          <div className="grade__spec"><span className="k">Lab test</span><span className="v">Flame spread &amp; ignitability</span></div>
                          <div className="grade__spec"><span className="k">Standard</span><span className="v">IS:5509</span></div>
                        </div>
                        <div className="meter" style={{ "--w": 0.9 }}>
                          <div className="meter__track"><div className="meter__fill"></div></div>
                          <div className="meter__bar"><span className="index">Standard</span><span className="index">Fire rated</span></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

            </div>

            <div data-reveal style={{ marginTop: "clamp(28px,3.4vw,44px)" }}>
              <a className="link-line" href="/products">See the full range — thicknesses, sizes, boards &amp; doors <span className="btn__arr">→</span></a>
            </div>
          </div>
        </section>

        {/* standard */}
        <section className="band rule-top bg-bone">
          <div className="shell">
            <div className="sect-head">
              <div className="sect-head__bar" data-reveal>
                <div className="sect-head__lead"><span className="index">04</span><span className="label label--ink">The Lennor standard</span></div>
                <span className="index sect-head__meta">On every board · no exceptions</span>
              </div>
              <h2 className="h2" data-mask>
                <span className="mask-line"><span>What every board gets.</span></span>
                <span className="mask-line" style={{ "--d": ".1s" }}><span>No <em className="it">exceptions</em>.</span></span>
              </h2>
            </div>

            <div className="seals" style={{ marginTop: "clamp(48px,6vw,88px)" }}>
              {seals.map((s) => (
                <div className="seal" data-reveal key={s.id} style={s.d ? { "--d": s.d } : undefined}>
                  <div className="seal__mark">
                    <svg className="seal__ring" viewBox="0 0 200 200" aria-hidden="true">
                      <defs><path id={s.id} d="M100,100 m-78,0 a78,78 0 1,1 156,0 a78,78 0 1,1 -156,0" /></defs>
                      <text><textPath href={`#${s.id}`} startOffset="0">{s.ring}</textPath></text>
                    </svg>
                    <div className="seal__core"><span>{s.no}</span></div>
                  </div>
                  <h3>{s.title}</h3>
                  <p>{s.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* the line, as a rule */}
        <section className="band rule-top">
          <div className="shell">
            <div className="sect-head">
              <div className="sect-head__bar" data-reveal>
                <div className="sect-head__lead"><span className="index">05</span><span className="label label--ink">From log to board</span></div>
                <span className="index sect-head__meta">Sixteen stations · one roof</span>
              </div>
              <h2 className="h2" data-mask>
                <span className="mask-line"><span>Walk the <em className="it">line</em>.</span></span>
              </h2>
            </div>

            <div className="prail" id="prail" style={{ marginTop: "clamp(44px,5.5vw,78px)" }} data-reveal>
              <div className="prail__readout">
                <span className="prail__num" id="prailNum">01</span>
                <span className="prail__meta">
                  <span className="prail__name" id="prailName">Log Selection</span>
                  <span className="prail__sub" id="prailSub">Manual · trained graders</span>
                </span>
              </div>

              <div className="prail__track" id="prailTrack"></div>

              <div className="prail__scale">
                <span className="index">Timber yard</span>
                <span className="index">Press</span>
                <span className="index">Laboratory</span>
              </div>

              <p className="small prail__fallback">
                Sixteen stations, from a grader’s hands in the timber yard to
                the final signature in our laboratory.
              </p>
            </div>

            <div data-reveal style={{ marginTop: "clamp(28px,3.4vw,44px)" }}>
              <a className="link-line" href="/process">Every station, in detail <span className="btn__arr">→</span></a>
            </div>
          </div>
        </section>

        {/* applications */}
        <section className="band rule-top">
          <div className="shell">
            <div className="sect-head">
              <div className="sect-head__bar" data-reveal>
                <div className="sect-head__lead"><span className="index">06</span><span className="label label--ink">Where Lennor lives</span></div>
                <span className="index sect-head__meta">Applications</span>
              </div>
              <h2 className="h2" data-mask>
                <span className="mask-line"><span>From kitchens</span></span>
                <span className="mask-line" style={{ "--d": ".1s" }}><span>to <em className="it">coastlines</em>.</span></span>
              </h2>
            </div>

            <div className="feat" style={{ marginTop: "clamp(44px,5.5vw,80px)" }}>
              <article className="feat__row" data-reveal>
                <div className="feat__media plate plate--hover" data-plate>
                  <img src="/assets/img/feat-interior.png" alt="Minimal warm living room with oak plywood wall panelling and a linen sofa" width="1376" height="768" loading="lazy" />
                </div>
                <div className="feat__text">
                  <span className="index feat__ix">A · Interiors</span>
                  <h3 className="h3">Interiors</h3>
                  <p className="body">Wall panels, wardrobes and built-ins — calibrated boards that sit flush and stay true, room after room.</p>
                </div>
              </article>

              <article className="feat__row feat__row--rev" data-reveal>
                <div className="feat__media plate plate--hover" data-plate>
                  <img src="/assets/img/gallery/app-14.png" alt="Minimal oak pivot flush door in a calm interior" width="1600" height="1050" loading="lazy" />
                </div>
                <div className="feat__text">
                  <span className="index feat__ix">B · Doors</span>
                  <h3 className="h3">Doors</h3>
                  <p className="body">Solid-core flush doors, ACC-treated and hot-pressed — dimensionally stable and ready for any finish.</p>
                </div>
              </article>

              <article className="feat__row" data-reveal>
                <div className="feat__media plate plate--hover" data-plate>
                  <img src="/assets/img/feat-kitchen.png" alt="Minimal light oak kitchen with a matte stone island and integrated appliances" width="1376" height="768" loading="lazy" />
                </div>
                <div className="feat__text">
                  <span className="index feat__ix">C · Kitchens</span>
                  <h3 className="h3">Kitchens</h3>
                  <p className="body">BWR and BWP grades built for daily moisture — cabinetry that holds its shape through years of use.</p>
                </div>
              </article>
            </div>
          </div>
        </section>

        {/* precut */}
        <section className="band rule-top">
          <div className="shell">
            <div className="sect-head">
              <div className="sect-head__bar" data-reveal>
                <div className="sect-head__lead"><span className="index">07</span><span className="label label--ink">Bulk pre-cut service</span></div>
                <span className="index sect-head__meta">Cut at the factory · not on site</span>
              </div>
              <h2 className="h2" data-mask>
                <span className="mask-line"><span>Your cutting list,</span></span>
                <span className="mask-line" style={{ "--d": ".1s" }}><span>delivered as <em className="it">parts</em>.</span></span>
              </h2>
              <p className="lede" data-reveal style={{ "--d": ".15s" }}>
                Send the list — doors, panels, shelving, whatever the job calls
                for — and it comes back nested, cut and labelled at the factory:
                parts ready to install, not a spare sheet for you to cut down.
              </p>
            </div>

            <div className="precut2" style={{ marginTop: "clamp(44px,5.5vw,80px)" }}>
              <div className="precut2__steps">
                <div className="precut2__step" data-reveal><span className="n">01</span><div><h3>Your cutting list</h3><p>Doors, panels, shelving — sizes you send us.</p></div></div>
                <div className="precut2__step" data-reveal style={{ "--d": ".07s" }}><span className="n">02</span><div><h3>Nested for zero waste</h3><p>Parts tiled tightly across each full sheet.</p></div></div>
                <div className="precut2__step" data-reveal style={{ "--d": ".14s" }}><span className="n">03</span><div><h3>Cut at the factory</h3><p>Panel saw, not a site hand-saw.</p></div></div>
                <div className="precut2__step" data-reveal style={{ "--d": ".21s" }}><span className="n">04</span><div><h3>Stacked &amp; labelled</h3><p>Each part tagged to your list.</p></div></div>
                <div className="precut2__step" data-reveal style={{ "--d": ".28s" }}><span className="n">05</span><div><h3>Delivered ready</h3><p>Arrives as parts, not offcuts.</p></div></div>
              </div>

              <div className="precut2__visual" data-reveal style={{ "--d": ".2s" }}>
                <div className="ply-stage" id="plyStage">
                  <canvas id="plyCutCanvas"></canvas>
                </div>
                <div className="precut2__readout"><span>Now cutting</span><span id="plyStatus">Door set · 3 parts</span></div>
              </div>
            </div>
          </div>
        </section>

        {/* manifesto */}
        <section className="band manifesto rule-top">
          <div className="shell">
            <div className="sect-head">
              <div className="sect-head__bar" data-reveal>
                <div className="sect-head__lead"><span className="index">01</span><span className="label label--ink">The invisible promise</span></div>
                <span className="index sect-head__meta">Why Lennor exists</span>
              </div>
              <h2 className="h2" data-mask>
                <span className="mask-line"><span>Plywood is a promise</span></span>
                <span className="mask-line" style={{ "--d": ".1s" }}><span>you can’t <em className="it">see</em>.</span></span>
              </h2>
            </div>

            <div className="mpillars">
              <article className="mpillar" data-reveal>
                <span className="mpillar__num">01</span>
                <h3 className="mpillar__title">The hidden core</h3>
                <p className="body mpillar__body">What holds a board together — veneers, glue lines, borer treatment — is invisible to the buyer. A carpenter screwing a hinge, a family loading a shelf for twenty years, they are trusting something they will never see.</p>
              </article>
              <article className="mpillar" data-reveal style={{ "--d": ".1s" }}>
                <span className="mpillar__num">02</span>
                <h3 className="mpillar__title">Own the process</h3>
                <p className="body mpillar__body">We compose every core ourselves, mix our own resin, calibrate every board on our own sixteen-station line. Nothing is outsourced, because trust can’t be.</p>
              </article>
              <article className="mpillar" data-reveal style={{ "--d": ".2s" }}>
                <span className="mpillar__num">03</span>
                <h3 className="mpillar__title">Test everything</h3>
                <p className="body mpillar__body">Every batch is lab-tested against IS:303 and IS:710 in our own laboratory before it earns the Lennor mark. If it didn’t survive all sixteen stations, it isn’t a Lennor.</p>
              </article>
            </div>
          </div>
        </section>

        {/* statement */}
        <section className="rule-top statement">
          <img className="statement__mark" src="/assets/brand/mark-black.svg" alt="" width="488" height="488" loading="lazy" aria-hidden="true" />
          <div className="shell">
            <h2 className="h2" data-mask>
              <span className="mask-line"><span>Let’s build</span></span>
              <span className="mask-line" style={{ "--d": ".1s" }}><span>something</span></span>
              <span className="mask-line" style={{ "--d": ".2s" }}><span>that <em className="it">lasts</em>.</span></span>
            </h2>
            <p className="lede" data-reveal style={{ "--d": ".25s" }}>
              Dealers, contractors and architects — talk to us about grades,
              dealer pricing, bulk pre-cut sizing or a walk through the line.
            </p>
            <div className="statement__cta" data-reveal style={{ "--d": ".35s" }}>
              <a className="btn" href="/contact" data-magnetic="0.2"><span>Request a quote</span><span className="btn__arr">→</span></a>
              <a className="btn btn--ghost" href="tel:+917760778886"><span>+91 77607 78886</span></a>
            </div>
            <div className="statement__contact" data-reveal style={{ "--d": ".45s" }}>
              <div><span className="label">Email</span><p style={{ marginTop: "8px" }}><a className="link-line" href="mailto:lennorply@gmail.com">lennorply@gmail.com</a></p></div>
              <div><span className="label">Factory</span><p className="body" style={{ marginTop: "8px" }}>Karnataka</p></div>
              <div><span className="label">Hours</span><p className="body" style={{ marginTop: "8px" }}>Monday – Saturday<br />9:00 AM – 6:00 PM</p></div>
            </div>
          </div>
        </section>
      </main>

      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
    </>
  );
}
