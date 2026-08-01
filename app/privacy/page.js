import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Privacy Policy",
  description: "How Lennor Ply collects, uses and protects the information you share through this website.",
  alternates: { canonical: "/privacy" },
  robots: { index: true, follow: true },
};

export default function Privacy() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <section className="band legal">
          <div className="shell legal__wrap">
            <div className="sect-head__bar">
              <div className="sect-head__lead"><span className="index">—</span><span className="label label--ink">Legal</span></div>
            </div>
            <h1 className="h2 legal__title">Privacy Policy</h1>
            <p className="small legal__meta">Last updated: August 2026</p>

            <div className="legal__body">
              <p>This Privacy Policy explains how Oakmore Private Limited — the company behind the Lennor brand (&ldquo;Lennor&rdquo;, &ldquo;we&rdquo;, &ldquo;us&rdquo;) — handles the information you share when you use this website (<strong>lennorply.com</strong>). We keep data collection to a minimum and we do not sell your information to anyone.</p>

              <h2>1. Information we collect</h2>
              <p>We only collect the information you choose to give us:</p>
              <ul>
                <li><strong>Enquiry details</strong> — when you submit the quote form, you provide your name and phone number, and optionally your email, city, areas of interest and message. This is used solely to respond to your enquiry.</li>
                <li><strong>WhatsApp messages</strong> — if you contact us via the WhatsApp link, your message and phone number are shared with us through WhatsApp.</li>
                <li><strong>Basic technical logs</strong> — like most websites, our hosting provider automatically records standard technical data (such as IP address and browser type) for security and reliability. We do not use this to identify you.</li>
              </ul>
              <p>We do <strong>not</strong> use advertising cookies, analytics trackers or profiling of any kind on this site.</p>

              <h2>2. How we use your information</h2>
              <ul>
                <li>To reply to your quote requests and enquiries.</li>
                <li>To provide pricing, product information and arrange factory visits or deliveries.</li>
                <li>To keep the website secure and working correctly.</li>
              </ul>

              <h2>3. Service providers</h2>
              <p>A few trusted services help us run the site. They only process data as needed to provide their service:</p>
              <ul>
                <li><strong>Formspree</strong> — delivers your submitted quote form to our email inbox.</li>
                <li><strong>Vercel</strong> — hosts the website.</li>
                <li><strong>OpenStreetMap</strong> — provides the map shown on the Contact page.</li>
                <li><strong>WhatsApp (Meta)</strong> — used only if you choose to message us there.</li>
              </ul>

              <h2>4. Data retention</h2>
              <p>We keep enquiry information only for as long as needed to respond to you and to maintain our business records, after which it is deleted.</p>

              <h2>5. Your rights</h2>
              <p>Under India&rsquo;s Digital Personal Data Protection Act, 2023, you may ask us to access, correct or delete the personal information you have shared with us. To make a request, email us at <a className="link-line" href="mailto:lennorply@gmail.com">lennorply@gmail.com</a>.</p>

              <h2>6. Children</h2>
              <p>This website is intended for business and trade enquiries and is not directed at children.</p>

              <h2>7. Changes to this policy</h2>
              <p>We may update this policy from time to time. The latest version will always be available on this page with a revised &ldquo;Last updated&rdquo; date.</p>

              <h2>8. Contact us</h2>
              <p>
                Oakmore Private Limited (Lennor)<br />
                Plot No. 353, KIADB, Hosakoppalu Road,<br />
                Hassan Growth Centre, Hassan &mdash; 573201, Karnataka, India<br />
                Email: <a className="link-line" href="mailto:lennorply@gmail.com">lennorply@gmail.com</a><br />
                Phone: <a className="link-line" href="tel:+917760778886">+91 77607 78886</a>
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
