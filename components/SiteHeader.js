// Top navigation. `overDark` adds the light-on-dark treatment used on pages
// whose hero sits under the header (e.g. the home hero). `darkPage` keeps the
// scrolled state dark too, for pages that stay dark all the way down (process).
// `active` marks the current page's link with aria-current.
export default function SiteHeader({ overDark = false, darkPage = false, active }) {
  const links = [
    { href: "/products", label: "Products", key: "products" },
    { href: "/process", label: "Process", key: "process" },
    { href: "/about", label: "About", key: "about" },
    { href: "/contact", label: "Contact", key: "contact" },
  ];
  return (
    <header
      className={`nav${overDark ? " nav--overdark" : ""}${darkPage ? " nav--darkpage" : ""}`}
      id="nav"
    >
      <div className="shell nav__inner">
        <a className="nav__brand" href="/" aria-label="Lennor Ply — home">
          <img
            src="/assets/brand/wordmark-black-640.png"
            alt="LENNOR"
            width="640"
            height="101"
          />
        </a>
        <nav aria-label="Primary">
          <ul className="nav__links">
            {links.map((l) => (
              <li key={l.key}>
                <a
                  className="nav__link"
                  href={l.href}
                  aria-current={active === l.key ? "page" : undefined}
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a className="btn nav__cta" href="/contact" data-magnetic="0.18">
          <span>Get a quote</span>
          <span className="btn__arr">→</span>
        </a>
        <button
          className="nav__burger"
          id="burger"
          aria-label="Open menu"
          aria-expanded="false"
          aria-controls="menu"
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
