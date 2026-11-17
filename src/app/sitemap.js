import { site } from '@/data/websiteData';
export default function sitemap() {
  return [{ url: site.url, lastModified: new Date(), changeFrequency: 'monthly', priority: 1 }];
}
