import { ApolloServer } from 'apollo-server';
// import { express } from 'express';
import { typeDefs } from './schema/schema';
import 'dotenv/config';

import { RunsAPI } from './datasources/runs';
import { InstancesAPI } from './datasources/instances';
import { resolvers } from './resolvers';

import { PORT } from './config';

// https://github.com/apollographql/apollo-server/issues/1908#issuecomment-488656301
// const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    runsAPI: new RunsAPI(),
    instancesAPI: new InstancesAPI()
  }),
  playground: {
    endpoint: process.env.SORRY_CYPRESS_GRAPHQL_SCHEMA_URL
  }
});

server.listen({ port: PORT }).then(({ url }) => {
  console.log(`🚀 Apollo server ready at ${url}`);
});