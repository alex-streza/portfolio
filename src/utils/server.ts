import spacetime from 'spacetime'

export const getPosts = (allPosts) => {
  return allPosts
    .sort((a, b) => {
      const d1 = spacetime(a.frontmatter.publishDate)
      const d2 = spacetime(b.frontmatter.publishDate)
      return d1.isAfter(d2) ? -1 : 1
    })
    .map((post) => ({
      ...post,
      frontmatter: {
        ...post.frontmatter,
        publishDate: spacetime(post.frontmatter.publishDate).format(
          '{mo  nth-short} {date-ordinal}, {year}',
        ),
      },
    }))
}
