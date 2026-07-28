export const metadata = {
  title: "Page not found",
  robots: { index: false },
};

export default function NotFound() {
  return (
    <main style={{ minHeight: "100svh", display: "flex", flexDirection: "column", alignItems: "flex-start", justifyContent: "center", padding: "var(--shell-pad)", maxWidth: "var(--shell-max)", marginInline: "auto" }}>
      <img src="/assets/brand/mark-black-256.png" alt="" width="256" height="256" style={{ height: "64px", width: "auto" }} />
      <p className="label label--timber" style={{ marginTop: "34px" }}>Error 404 — off the line</p>
      <h1 className="display" style={{ marginTop: "18px", maxWidth: "12ch" }}>This board doesn’t <em className="it">exist</em>.</h1>
      <p className="lede" style={{ marginTop: "24px" }}>The page you’re looking for was never pressed, or has been moved to a new address.</p>
      <a className="btn" href="/" style={{ marginTop: "38px" }}><span>Back to the overview</span><span className="btn__arr">→</span></a>
    </main>
  );
}
