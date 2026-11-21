import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'

// Schema: describes the data and the available queries
const typeDefs = `#graphql
  type Book { title: String, author: String }
  type Query { books: [Book] }
`

const books = [
    { title: 'Clean Code', author: 'Robert C. Martin' },
    { title: 'Hello GraphQL', author: 'Student' },
]

// Resolvers: functions that return the data for each query
const resolvers = { Query: { books: () => books } }

const server = new ApolloServer({ typeDefs, resolvers })
const { url } = await startStandaloneServer(server, { listen: { port: 4000 } })
console.log(`Server ready at ${url}`)