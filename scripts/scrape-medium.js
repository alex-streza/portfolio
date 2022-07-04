const puppeteer = require('puppeteer')
const fs = require('fs')
const TurndownService = require('turndown')
const spacetime = require('spacetime')
const turndownService = new TurndownService()
const cliProgress = require('cli-progress')

const generateHeaders = ({ date, title, description, readTime }) => {
  const headers = [
    '---',
    'setup: |',
    "   import Layout from '../../layouts/BlogPost.astro'",
    `publishDate: ${date}`,
    `description: ${description}`,
    `title: ${title}`,
    `readTime: ${readTime}`,
    'name: Alex Streza',
    '---\n',
  ]

  return headers.join('\n')
}

;(async function () {
  const { articles } = require('./medium_data.json')
  const bar = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic)
  bar.start(articles.length, 0)

  for (const { url } of articles) {
    // Launch browser instance
    const browser = await puppeteer.launch()

    // Open new page
    const page = await browser.newPage()
    await page.goto(url, {
      waitUntil: 'networkidle2',
    })

    const { html, title, description, readTime, date } = await page.evaluate(
      () => {
        // The content of this function is executed inside the browser,
        // so we need to declare utility functions inside this code block.
        // Otherwise, they'll be undefined when executing the code.

        return {
          description: document.querySelectorAll(
            "head > meta[name='description']",
          )[0].content,
          title: document.querySelectorAll(
            "head > meta[property='og:title']",
          )[0].content,
          readTime: document.querySelectorAll(
            "head > meta[name='twitter:data1']",
          )[0].content,
          date: document.querySelectorAll(
            "head > meta[property='article:published_time']",
          )[0].content,
          html: document.getElementsByTagName('section')[0].innerHTML,
        }
      },
    )

    const markdown =
      generateHeaders({
        title,
        description,
        readTime,
        date: spacetime(date).format('nice').split(',')[0],
      }) + turndownService.turndown(html)
    const filename = title.replace(/\s/g, '-').replace(/’/g, '').toLowerCase()

    fs.writeFileSync(`./raw/${filename}.md`, markdown)
    console.log('\nSAVED - ', filename)
    bar.increment()

    await browser.close()
  }

  bar.stop()
})()
