const { getTypeDefs } = require("../../common")
const { gql } = require("graphql-tag")

module.exports = gql`
    ${getTypeDefs(__dirname, "TipoPersona")}
    ${getTypeDefs(__dirname, "ActividadEconomica")}
    ${getTypeDefs(__dirname, "Sexo")}
    ${getTypeDefs(__dirname, "EstadoCivil")}
`
