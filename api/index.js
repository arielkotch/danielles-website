const cheerio = require('cheerio')
const { get } = require('imdb-scraper')
const { isEqual } = require('lodash')

const baseUrl = 'https://www.imdb.com/'
const siteUrl = 'https://www.imdb.com/name/nm2714832/?ref_=nv_sr_srsg_0'
const axios = require('axios')
const fetchData = async () => {
    const result = await axios.get(siteUrl)
    const $ = cheerio.load(result.data)
    var movieLinks = []
    $('#filmography > div:nth-child(2)')
        .find('b > a')
        .each(function (index, element) {
            movieLinks.push($(element).attr('href'))
        })

    const movies = movieLinks.map(async (link) => {
        const movie = `${baseUrl}${link}`
        const result = await axios.get(movie)
        const $ = cheerio.load(result.data)
        const title = $('.title_wrapper > h1').contents().first().text()
        //TODO not all the years come back due to a different format fix
        const year = $('#titleYear > a').text()

        const image = $('#main_top').find('img').attr('src')
        const desc = $('.summary_text')
            .text()
            .replace(/(\r\n|\n|\r)/gm, '')
            .replace(/^\s+|\s+$/g, '')
            .replace('See full summary »', '')

        $('#filmography > div:nth-child(2)')
            .find('b > a')
            .each(function (index, element) {
                movieLinks.push($(element).attr('href'))
            })
        var movieImages = []
        $('.mediastrip')
            .find('a > img')
            .each(function (index, element) {
                movieImages.push($(element).attr('src'))
            })

        var stars = []
        $('.credit_summary_item:last-child')
            .find('a')
            .each(function (index, element) {
                stars.push($(element).text())
            })
        return {
            title,
            year,
            desc,
            image,
            stars: stars.filter(
                (star) => !isEqual(star, 'See full cast & crew')
            ),
            media: movieImages,
        }
    })
    return Promise.all(movies)
}

var express = require('express')
const { graphqlHTTP } = require('express-graphql')
var { buildSchema } = require('graphql')

var schema = buildSchema(`
  type Movie {
    title: String!,
    year: String!,
    desc: String!,
    image: String!,
    stars: [String!]!,
    media: [String!]!
  }
  type Query {
    getMovies:[Movie]
  }
`)
var root = {
    getMovies: async () => {
        return await fetchData()
    },
}

var app = express()
app.use(
    '/graphql',
    graphqlHTTP({
        schema: schema,
        rootValue: root,
        graphiql: true,
    })
)

app.listen(4000, () => console.log('Now browse to localhost:4000/graphql'))
