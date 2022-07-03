const mediumToMarkdown = require('medium-to-markdown')
const fs = require('fs')

const generateHeaders = () => {
  const headers = [
    '---',
    'setup: |',
    "   import Layout from '../../layouts/BlogPost.astro'",
    'title: Hello world!',
    'publishDate: 12 Sep 2021',
    'name: Nate Moore',
    'value: 128',
    'description: Just a Hello World Post!',
    '---\n',
  ]

  return headers.join('\n')
}

const generateArticleMD = async (url) => {
  mediumToMarkdown.convertFromUrl(url).then(function (md) {
    const markdown = generateHeaders() + md
    let title = url.split('/')
    title = title[title.length - 1]
    title = title.split('-').slice(0, -1).join('-')

    fs.writeFileSync(`./src/pages/posts/${title}.md`, markdown)
  })
}

const generateMDs = async () => {
  const { articles } = require('./medium_data.json')

  for (const { url } of articles) {
    generateArticleMD(url)
    break
  }
}

generateMDs()
