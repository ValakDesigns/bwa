import type { MetadataRoute } from "next";

const siteUrl = "https://www.brainwarrioracademy.org"; // TODO: replace with real production domain

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/about", "/tutor-application", "/student-registration"];
  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly",
    priority: route === "" ? 1 : 0.8,
  }));
}
