import rss from '@astrojs/rss'

export const get = () =>
  rss({
    // `<title>` field in output xml
    title: 'Blog | Alex Streza',
    // `<description>` field in output xml
    stylesheet: '/rss/styles.xsl',
    description:
      "Everything JavaScript, Typescript and Web Development. I sometimes tackle AI, Web3 and have a massive soft spot for 3D and CGI. I also think I'm funny at times.'",
    // base URL for RSS <item> links
    // SITE will use "site" from your project's astro.config.
    site: import.meta.env.SITE,
    // list of `<item>`s in output xml
    // simple example: generate items for every md file in /src/pages
    // see "Generating items" section for required frontmatter and advanced use cases
    items: import.meta.glob('./posts/*.mdx'),
    // (optional) inject custom xml
    customData: `<language>en-us</language>`,
  })
