const enums = require('./enums')
const interfaces = require('./interfaces')
const unions = require('./unions')
const Query = require('./queries')

module.exports = {
    ... enums,
    ... interfaces,
    ... unions,
    Query
}