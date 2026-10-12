import type { APIRoute } from 'astro';
import { pageDates } from '../lib/pages';
export const GET: APIRoute = ({ site }) => {
  const urls = Object.entries(pageDates).map(([path, { modified }]) => `<url><loc>${new URL(path, site!)}</loc><lastmod>${modified}</lastmod></url>`).join('');
  return new Response(`<?xml version="1.0" encoding="UTF-8"?><urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${urls}</urlset>`, { headers: { 'Content-Type': 'application/xml; charset=utf-8' } });
};
