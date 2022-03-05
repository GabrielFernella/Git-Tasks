const { ApolloServer } = require('apollo-server');

function startServer({ typeDefs, resolvers, config }) {
  // mongoose.connect('mongodb://localhost:27017/graphql', {
  //   useNewUrlParser: true,
  //   useUnifiedTopology: true, // para não mostrar os warns quando iniciar a aplicação 
  // });

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    ...config
  });

  server.listen().then(({ url }) => console.log(`💥 Server started at ${url}`));
}

module.exports = { startServer };
