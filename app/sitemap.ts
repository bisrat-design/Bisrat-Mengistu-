import type { MetadataRoute } from "next";
import { projects, site } from "@/lib/data";
export default function sitemap(): MetadataRoute.Sitemap {
  return [{ url: site.url }, ...projects.map((p) => ({ url: `${site.url}/work/${p.slug}` }))];
}
