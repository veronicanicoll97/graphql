const { getTypeDefs } = require("../common")
const { gql } = require('graphql-tag');
const enums = require('./enums');
const types = require('./types');
const interfaces = require('./interfaces')
const unions = require('./unions')

module.exports = gql`
    ${enums}
    ${interfaces}
    ${types}
    ${unions}
    type Query
    ${getTypeDefs(__dirname, 'query')}
`;