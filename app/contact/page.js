import SiteHeader from "@/components/SiteHeader";
import ContactMap from "@/components/ContactMap";
import "./contact.css";

export const metadata = {
  title: "Contact — Get a Quote",
  description:
    "Contact Lennor Ply for quotes, dealer enquiries and bulk pre-cut orders. KIADB Industrial Growth Centre, Hassan — 573201. Call +91 77607 78886.",
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact — Lennor Ply | Get a Quote",
    description:
      "Quotes, dealer enquiries, bulk pre-cut orders or a factory visit — one call does it.",
    url: "https://lennorply.com/contact.html",
    images: ["/assets/img/ribbon.jpg"],
  },
};

const interests = [
  "MR Plywood", "BWR Plywood", "BWP Plywood", "Marine Plywood",
  "Block Boards", "Flush Doors", "Bulk pre-cut order", "Dealership enquiry",
];

export default function Contact() {
  return (
    <>
      <SiteHeader active="contact" />

      <main id="main">
        {/* page hero */}
        <section className="phero">
          <div className="phero__bg" data-parallax="6">
            <img src="/assets/img/ribbon.jpg?v=38" alt="Lennor Ply branded sample deck on warm wooden desk" width="2200" height="1228" fetchPriority="high" />
          </div>
          <div className="shell">
            <h1 className="display" data-mask>
              <span className="mask-line"><span>Let’s talk</span></span>
              <span className="mask-line" style={{ "--d": ".12s" }}><span><em className="it">boards</em>.</span></span>
            </h1>
            <p className="lede phero__lede" data-reveal style={{ "--d": ".3s" }}>
              Quotes, dealer enquiries, bulk pre-cut orders or a walk through the
              factory — one call does it.
            </p>
          </div>
        </section>

        {/* contact grid */}
        <section className="band rule-top" id="quote">
          <div className="shell contact-grid">
            <div>
              <div className="sect-head__bar" data-reveal>
                <div className="sect-head__lead"><span className="index">01</span><span className="label label--ink">Direct lines</span></div>
              </div>

              <div className="dlines" style={{ marginTop: "clamp(26px,3.4vh,44px)" }}>
                <div className="dline" data-reveal>
                  <span className="label">Phone / WhatsApp</span>
                  <a className="dline__value" href="tel:+917760778886">+91 77607 78886</a>
                  <a className="link-line" href="https://wa.me/917760778886" target="_blank" rel="noopener noreferrer">Message on WhatsApp <span className="btn__arr">→</span></a>
                </div>
                <div className="dline" data-reveal style={{ "--d": ".07s" }}>
                  <span className="label">Email</span>
                  <a className="dline__value" href="mailto:lennorply@gmail.com">lennorply@gmail.com</a>
                </div>
                <div className="dline" data-reveal style={{ "--d": ".14s" }}>
                  <span className="label">Factory &amp; head office</span>
                  <address>KIADB Industrial Growth Centre,<br />Hassan — 573201, Karnataka</address>
                </div>
                <div className="dline" data-reveal style={{ "--d": ".21s" }}>
                  <span className="label">Working hours</span>
                  <address>Monday – Saturday, 9:00 AM – 6:00 PM</address>
                </div>
              </div>

              <p className="small" data-reveal style={{ "--d": ".26s", marginTop: "26px", maxWidth: "36ch" }}>
                Architects and bulk buyers are welcome to inspect the line and
                the laboratory before ordering. Call ahead and we’ll walk
                you through it.
              </p>
            </div>

            <div>
              <div className="sect-head__bar" data-reveal>
                <div className="sect-head__lead"><span className="index">02</span><span className="label label--ink">Request a quote</span></div>
                <span className="index sect-head__meta">Reply within 1 working day</span>
              </div>

              <form className="qform" id="qform" style={{ marginTop: "clamp(26px,3.4vh,44px)" }} noValidate data-reveal>
                <div className="qform__grid">
                  <div className="field">
                    <label htmlFor="f-name">Your name *</label>
                    <input type="text" id="f-name" name="name" autoComplete="name" placeholder="Full name" required />
                    <span className="err">Please enter your name.</span>
                  </div>
                  <div className="field">
                    <label htmlFor="f-phone">Phone *</label>
                    <input type="tel" id="f-phone" name="phone" autoComplete="tel" placeholder="+91 ..." required />
                    <span className="err">Please enter a valid phone number.</span>
                  </div>
                  <div className="field field--full">
                    <label htmlFor="f-city">City / project location</label>
                    <input type="text" id="f-city" name="city" autoComplete="address-level2" placeholder="e.g. Hassan, Bengaluru, Mysuru" />
                  </div>
                  <div className="field field--full">
                    <label id="interest-label">I’m interested in</label>
                    <div className="ichips" role="group" aria-labelledby="interest-label">
                      {interests.map((i) => (
                        <button type="button" className="ichip" aria-pressed="false" key={i}>{i}</button>
                      ))}
                    </div>
                  </div>
                  <div className="field field--full">
                    <label htmlFor="f-msg">Project details</label>
                    <textarea id="f-msg" name="message" placeholder="Quantities, sizes, timelines — anything that helps us quote faster."></textarea>
                  </div>
                </div>
                <div className="qform__foot">
                  <button type="submit" className="btn" data-magnetic="0.15"><span>Send via WhatsApp</span><span className="btn__arr">→</span></button>
                  <p className="small qform__note">Opens WhatsApp with your enquiry pre-filled — nothing is stored on this site.</p>
                  <noscript><p className="small" style={{ marginTop: "12px" }}>This form requires JavaScript. Please call <a href="tel:+917760778886">+91 77607 78886</a> or <a href="https://wa.me/917760778886">message us on WhatsApp</a> directly.</p></noscript>
                </div>
                <p className="qform__success body" role="status">
                  <strong>Thank you.</strong> Your enquiry has opened in WhatsApp —
                  press send there and we’ll reply within one working day. Prefer
                  email? Write to <a className="link-line" href="mailto:lennorply@gmail.com">lennorply@gmail.com</a>.
                </p>
              </form>
            </div>
          </div>

          {/* map section */}
          <div className="shell" style={{ marginTop: "clamp(48px,6vw,88px)" }}>
            <div
              style={{ position: "relative", width: "100%", height: "clamp(340px, 42vw, 480px)", borderRadius: "14px", overflow: "hidden", border: "1px solid var(--line)", boxShadow: "0 8px 30px rgba(0,0,0,0.06)", zIndex: 1 }}
              id="contact-map"
              data-reveal
            ></div>
          </div>
        </section>

        {/* statement */}
        <section style={{ position: "relative", overflow: "hidden", background: "#EDE7DA", borderTop: "1px solid #DDD7CB", padding: "clamp(88px,12vw,160px) 0", textAlign: "center" }}>
          <div aria-hidden="true" style={{ position: "absolute", left: "clamp(-160px,-8vw,-40px)", top: "50%", transform: "translateY(-50%)", width: "clamp(380px,50vw,660px)", height: "clamp(380px,50vw,660px)", background: "url('/assets/brand/mark-black.png') no-repeat center/contain", opacity: 0.09, pointerEvents: "none" }}></div>
          <div className="shell" style={{ position: "relative", zIndex: 1 }}>
            <h2 style={{ fontSize: "clamp(2.4rem,5.5vw,4.4rem)", fontWeight: 700, lineHeight: 1.08, letterSpacing: "-0.03em", color: "#0D0C0A", maxWidth: "22ch", margin: "0 auto", textAlign: "center" }}>
              Prefer to see it<br /><em style={{ fontStyle: "italic", color: "#8C4B1A" }}>before</em> you buy?
            </h2>
            <p style={{ margin: "28px auto 0", maxWidth: "50ch", fontSize: "clamp(1rem,1.4vw,1.22rem)", lineHeight: 1.65, color: "#52504A", textAlign: "center" }}>
              Good. That&apos;s exactly the kind of buyer we build for. Come walk the sixteen stations, watch the boil test, and take a board home to saw open.
            </p>
            <div style={{ display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "center", gap: "16px", marginTop: "clamp(32px,4vh,52px)" }}>
              <a href="tel:+917760778886" style={{ display: "inline-flex", alignItems: "center", gap: "10px", padding: "15px 34px", borderRadius: "99px", background: "#0D0C0A", color: "#fff", border: "1px solid #0D0C0A", fontWeight: 700, fontSize: ".95rem", textDecoration: "none", transition: ".3s" }}>Call the factory <span>→</span></a>
              <a href="/process" style={{ display: "inline-flex", alignItems: "center", padding: "15px 34px", borderRadius: "99px", background: "transparent", color: "#0D0C0A", border: "1px solid #0D0C0A", fontWeight: 600, fontSize: ".95rem", textDecoration: "none", transition: ".3s" }}>Preview the line</a>
            </div>
          </div>
        </section>
      </main>

      <ContactMap />
    </>
  );
}
