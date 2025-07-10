import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = 5173;

// Middleware to enforce iframe-only access for preview mode
const enforceIframeFromContentful = (req, res, next) => {
  if (req.query.preview === "true") {
    const secFetchDest = req.get("Sec-Fetch-Dest");

    // Block if not loaded in an iframe
    if (secFetchDest !== "iframe") {
      return res.status(403).send("Forbidden: Must be loaded in an iframe.");
    }

    // Set CSP to allow embedding only in Contentful
   res.setHeader(
      "Content-Security-Policy",
      "frame-ancestors https://app.contentful.com"
    );
  }
  next();
};

app.use(enforceIframeFromContentful);

// Serve static files
app.use(express.static(path.join(__dirname, "../dist")));

// Serve index.html for React Router paths
app.get(["/", "/product/:productSlug"], (req, res) => {
  res.sendFile(path.join(__dirname, "../dist/index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
