export interface Frontmatter {
  title: string
  description: string
  pubDate: string
  readTime: string
}

export interface Post {
  title: string
  url: string
  frontmatter: Frontmatter
}
