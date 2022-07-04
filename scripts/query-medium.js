require('dotenv').config()

const axios = require('axios').default
const fs = require('fs')

const baseUrl = `https://${process.env.RAPID_API_HOST}`

const headers = {
  'x-rapidapi-host': process.env.RAPID_API_HOST,
  'x-rapidapi-key': process.env.RAPID_API_KEY,
}

const username = 'alex.streza'

const request = (endpoint) =>
  axios
    .request({
      method: 'GET',
      url: baseUrl + endpoint,
      headers: headers,
    })
    .then((response) => response.data)

const get_article_ids = async () => {
  const data = await request('/user/id_for/' + username)
  const user_id = data.id

  request('/user/' + user_id + '/articles').then(async (data) => {
    const article_ids = data.associated_articles

    const articles = []
    for (const article_id of article_ids) {
      await request('/article/' + article_id).then((data) => {
        articles.push(data)
      })
    }

    const medium_data = { user_id, articles }
    fs.writeFileSync('./scripts/medium_data.json', JSON.stringify(medium_data, null, 2))
  })
}

get_article_ids()
