export interface Frontmatter {
  title: string
  description: string
  publishDate: string
  readTime: string
}

export interface Post {
  title: string
  url: string
  frontmatter: Frontmatter
}
