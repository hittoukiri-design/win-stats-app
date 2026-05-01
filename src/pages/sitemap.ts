import type { APIRoute } from "astro";

const siteUrl = "https://www.dostwinapp.co";
const lastmod = "2026-05-01";

const pages = [
  { path: "/", changefreq: "daily", priority: "1.0" },
  { path: "/login", changefreq: "weekly", priority: "0.9" },
  { path: "/register", changefreq: "weekly", priority: "0.9" },
  { path: "/download", changefreq: "weekly", priority: "0.9" },
  { path: "/games", changefreq: "weekly", priority: "0.8" },
  { path: "/how-to-play", changefreq: "weekly", priority: "0.8" },
  { path: "/bonuses", changefreq: "weekly", priority: "0.8" },
  { path: "/faqs", changefreq: "monthly", priority: "0.7" },
  { path: "/blog", changefreq: "weekly", priority: "0.7" },
  { path: "/contact", changefreq: "monthly", priority: "0.6" },
  { path: "/about-us", changefreq: "monthly", priority: "0.6" },
  { path: "/responsible-gaming", changefreq: "monthly", priority: "0.6" },
  { path: "/privacy-policy", changefreq: "monthly", priority: "0.5" },
  { path: "/terms-and-conditions", changefreq: "monthly", priority: "0.5" },
  { path: "/disclaimer", changefreq: "monthly", priority: "0.5" },
];

const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map(
    (page) => `  <url>
    <loc>${siteUrl}${page.path}</loc>
    <lastmod>${lastmod}</lastmod>
    <changefreq>${page.changefreq}</changefreq>
    <priority>${page.priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>
`;

export const GET: APIRoute = () => {
  return new Response(sitemap, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
};
