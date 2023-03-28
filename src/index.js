const { ApolloServer } = require('@apollo/server');
const { startStandaloneServer } = require('@apollo/server/standalone');
const typeDefs = require("./typesDefs")
const resolvers = require("./resolvers")
const data = require("./data")

const server = new ApolloServer({
    typeDefs,
    resolvers
});


const servidorEn = startStandaloneServer(
    server, { 
        listen: { port: 3000 },
        context: ({ req, res }) => ({
            req,
            data
        })
    }
);
console.log(`🚀 Server listening at port 3000`);
servidorEn.then(ser => console.log(`🚀 ${ser.url}`))
