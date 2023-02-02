// pages/server-sitemap.xml/index.tsx

import { getAllPosts } from '@/lib/notion';
import { getServerSideSitemap } from 'next-sitemap';
import BLOG from '@/blog.config';

export const getServerSideProps = async (ctx) => {
  // Method to source urls from cms
  const posts = await getAllPosts({ includePages: true });

  const urls = posts.map((post) => {
    if (post?.type?.[0] === 'Page') {
      return `${BLOG.link}/${post.slug}`;
    } else {
      return `${BLOG.link}/blog/${post.slug}`;
    }
  });

  const fields = urls.map((url) => {
    return {
      loc: url,
      lastmod: new Date().toISOString(),
    };
  });

  return getServerSideSitemap(ctx, fields);
};

// Default export to prevent next.js errors
export default function Sitemap() {}
