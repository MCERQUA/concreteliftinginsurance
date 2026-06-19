import type { MetadataRoute } from "next";
import { getAllPostSlugs } from "@/lib/blog-posts";
import { getAllCoverageSlugs } from "@/lib/coverages";

const base = "https://concreteliftinginsurance.com";
const now = new Date("2026-06-15");

export default function sitemap(): MetadataRoute.Sitemap {
  const blogEntries: MetadataRoute.Sitemap = getAllPostSlugs().map((slug) => ({
    url: `${base}/blog/${slug}/`,
    lastModified: now,
    changeFrequency: "yearly",
    priority: 0.6,
  }));

  const coverageEntries: MetadataRoute.Sitemap = getAllCoverageSlugs().map((slug) => ({
    url: `${base}/coverages/${slug}/`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  return [
    { url: `${base}/`, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${base}/services/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/coverages/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/quote/`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/about/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/contact/`, lastModified: now, changeFrequency: "monthly", priority: 0.7 },
    { url: `${base}/blog/`, lastModified: now, changeFrequency: "weekly", priority: 0.8 },
    ...coverageEntries,
    ...blogEntries,
  ];
}
