import { getBlogPosts } from 'app/blog/utils'

export const baseUrl = 'https://portfolio-starter-kit-pi-woad.vercel.app/'

export default async function sitemap() {
  const blogs = getBlogPosts().map((post) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: post.metadata.publishedAt,
  }))

  const staticRoutes = [
    { url: `${baseUrl}/`, lastModified: new Date().toISOString().split('T')[0] },
    { url: `${baseUrl}/blog`, lastModified: new Date().toISOString().split('T')[0] },
  ]

  return [...staticRoutes, ...blogs]
}
