import type { MetadataRoute } from "next";

import { siteConfig } from "@/lib/site-config";

const routes = [
  "",
  "/projects",
  "/case-studies",
  "/about",
  "/resume",
  "/contact",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();
  return routes.map((route) => ({
    url: `${siteConfig.siteUrl}${route}`,
    lastModified,
    changeFrequency: "weekly",
    priority: route === "" ? 1 : 0.8,
  }));
}
