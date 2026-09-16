import type { MetadataRoute } from "next";

const siteUrl = "https://www.brainwarrioracademy.org"; // TODO: replace with real production domain

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: "/api/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
