/* ============================================================================
   LENNOR PLY — Express (Node.js) server
   Serves the static site with clean URLs and a custom 404.
   Local:   npm start   ->   http://localhost:4620
   ========================================================================= */

const path = require("path");
const express = require("express");

const app = express();
const ROOT = __dirname;
const PORT = process.env.PORT || 4620;

// Serve every static asset from the project root.
// `extensions: ["html"]` gives clean URLs: /products -> products.html, etc.
app.use(
  express.static(ROOT, {
    extensions: ["html"],
    setHeaders(res, filePath) {
      // Long-cache fingerprinted assets; the site already uses ?v= busters.
      if (/\.(css|js|woff2|jpg|png|svg)$/.test(filePath)) {
        res.setHeader("Cache-Control", "public, max-age=3600");
      }
    },
  })
);

// Anything unmatched falls through to the custom 404 page.
app.use((req, res) => {
  res.status(404).sendFile(path.join(ROOT, "404.html"));
});

// Run a real server locally (npm start). On Vercel the app is imported and
// invoked as a serverless function, so we only listen when run directly.
if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Lennor Ply running on http://localhost:${PORT}`);
  });
}

module.exports = app;
