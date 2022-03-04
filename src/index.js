const {startServer} = require("./startServer");

const {resolvers,typeDefs} = require('./graphql');
const services = require('./services');


startServer({typeDefs, resolvers, services})
