import { siteUrl } from "@/lib/site-url";
import type { MetadataRoute } from "next";
import { pages } from "@/lib/content";
const base=siteUrl;
export default function sitemap():MetadataRoute.Sitemap{return [{url:base,changeFrequency:"monthly",priority:1},...Object.keys(pages).map(slug=>({url:`${base}/${slug}`,changeFrequency:"monthly" as const,priority:slug==="vidracaria-em-santos"?0.9:0.75}))]}
