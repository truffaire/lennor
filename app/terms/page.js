import SiteHeader from "@/components/SiteHeader";

export const metadata = {
  title: "Terms & Conditions",
  description: "The terms that govern your use of the Lennor Ply website.",
  alternates: { canonical: "/terms" },
  robots: { index: true, follow: true },
};

export default function Terms() {
  return (
    <>
      <SiteHeader />

      <main id="main">
        <section className="band legal">
          <div className="shell legal__wrap">
            <div className="sect-head__bar">
              <div className="sect-head__lead"><span className="index">—</span><span className="label label--ink">Legal</span></div>
            </div>
            <h1 className="h2 legal__title">Terms &amp; Conditions</h1>
            <p className="small legal__meta">Last updated: August 2026</p>

            <div className="legal__body">
              <p>These Terms &amp; Conditions govern your use of the Lennor Ply website (<strong>lennorply.com</strong>). By using this website, you agree to these terms. If you do not agree, please do not use the site.</p>

              <h2>1. About us</h2>
              <p>This website is operated by Lennor Ply, a plywood manufacturer based at KIADB Industrial Growth Centre, Hassan &mdash; 573201, Karnataka, India.</p>

              <h2>2. Use of the website</h2>
              <p>You may use this website to learn about our products, view our process and contact us for enquiries. You agree not to misuse the site, attempt to disrupt it, or use it for any unlawful purpose.</p>

              <h2>3. Product information</h2>
              <p>We work to keep product details, grades, specifications and images accurate and up to date. However, some figures and illustrations (for example, per-ply thicknesses or renderings) are indicative and provided for general guidance. Final specifications, availability and pricing are confirmed at the time of order. Nothing on this website is a binding offer or a guarantee of any particular specification.</p>

              <h2>4. Intellectual property</h2>
              <p>All content on this website &mdash; including text, images, the Lennor Ply name, logo and marks, and the overall design &mdash; belongs to Lennor Ply and is protected by law. You may not copy, reproduce or reuse it without our written permission.</p>

              <h2>5. Enquiries and quotes</h2>
              <p>Submitting the quote form or contacting us does not create a contract. Any supply of goods is subject to a separate agreement, quotation or invoice agreed between you and Lennor Ply.</p>

              <h2>6. Third-party links and services</h2>
              <p>The site may link to third-party services (such as WhatsApp or map providers). We are not responsible for the content or practices of those third parties.</p>

              <h2>7. Limitation of liability</h2>
              <p>This website is provided on an &ldquo;as is&rdquo; basis. To the extent permitted by law, Lennor Ply is not liable for any loss arising from your use of, or reliance on, the information on this website.</p>

              <h2>8. Governing law</h2>
              <p>These terms are governed by the laws of India. Any disputes are subject to the exclusive jurisdiction of the courts at Hassan, Karnataka.</p>

              <h2>9. Changes to these terms</h2>
              <p>We may update these terms from time to time. The current version will always be available on this page.</p>

              <h2>10. Contact us</h2>
              <p>
                Lennor Ply<br />
                KIADB Industrial Growth Centre, Hassan &mdash; 573201, Karnataka, India<br />
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
