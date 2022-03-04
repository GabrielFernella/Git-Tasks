// ./graphql/typeDefs.js
const path = require('path')
const { loadFilesSync } = require('@graphql-tools/load-files')
const { mergeTypeDefs, mergeResolvers } = require('@graphql-tools/merge')

const typesArray = loadFilesSync(path.join(__dirname, 'modules', '**', '*.gql'), { extensions: ['gql'] })
const typeDefs = mergeTypeDefs(typesArray)

const resolversArray = loadFilesSync(path.join(__dirname, 'modules', '**', 'resolvers.js'))
const resolvers = mergeResolvers(resolversArray)

module.exports = {typeDefs, resolvers}
