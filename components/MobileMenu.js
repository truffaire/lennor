
// Full-screen overlay menu, toggled by the burger via main.js.
export default function MobileMenu() {
  return (
    <div className="menu" id="menu">
      <nav aria-label="Menu">
        <ul className="menu__list">
          <li className="menu__item" style={{ "--i": 0 }}>
            <a className="menu__link" href="/products"><span className="index">01</span><span>Products</span></a>
          </li>
          <li className="menu__item" style={{ "--i": 1 }}>
            <a className="menu__link" href="/process"><span className="index">02</span><span>Process</span></a>
          </li>
          <li className="menu__item" style={{ "--i": 2 }}>
            <a className="menu__link" href="/about"><span className="index">03</span><span>About</span></a>
          </li>
          <li className="menu__item" style={{ "--i": 3 }}>
            <a className="menu__link" href="/contact"><span className="index">04</span><span>Contact</span></a>
          </li>
        </ul>
      </nav>
      <div className="menu__foot">
        <a className="link-line" href="tel:+917760778886">+91 77607 78886</a>
        <a className="link-line" href="mailto:lennorply@gmail.com">lennorply@gmail.com</a>
        <span className="label">Karnataka</span>
      </div>
    </div>
  );
}
