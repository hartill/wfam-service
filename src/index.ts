import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import { resolvers } from './graphql/resolvers'
import { typeDefs } from './graphql/schema'

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

async function startServer() {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
  })

  console.log(`🚀  Server listening at: ${url}`)
}

startServer()
