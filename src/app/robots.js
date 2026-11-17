import { site } from '@/data/websiteData';
export default function robots() {
  return { rules: { userAgent: '*', allow: '/' }, sitemap: `${site.url}/sitemap.xml` };
}
