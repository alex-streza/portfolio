import spacetime from 'spacetime'

export const getPosts = (allPosts) => {
  return allPosts
    .sort((a, b) => {
      const d1 = spacetime(a.frontmatter.pubDate)
      const d2 = spacetime(b.frontmatter.pubDate)
      return d1.isAfter(d2) ? -1 : 1
    })
    .map((post) => ({
      ...post,
      frontmatter: {
        ...post.frontmatter,
        pubDate: spacetime(post.frontmatter.pubDate).format(
          '{month-short} {date-ordinal}, {year}',
        ),
      },
    }))
}
