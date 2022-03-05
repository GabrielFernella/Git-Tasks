const { startServer } = require("./startServer");

const { resolvers, typeDefs } = require('./graphql');
const config = require('./config');


startServer({ typeDefs, resolvers, config })
