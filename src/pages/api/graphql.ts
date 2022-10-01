import { NextApiRequest, NextApiResponse } from 'next';
import { ApolloServer } from 'apollo-server-micro';
import { readFileSync } from 'fs';
import { join } from 'path';

import { Resolvers } from '../../../graphql/dist/generated-server';

const path = join(process.cwd(), 'graphql', 'schema.graphql');
const typeDefs = readFileSync(path).toString('utf-8');

const resolvers: Resolvers = {};

const apolloServer = new ApolloServer({ typeDefs, resolvers });

const startServer = apolloServer.start();

// @url: https://numb86-tech.hatenablog.com/entry/2022/03/14/203723
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  await startServer;
  await apolloServer.createHandler({
    path: '/api/graphql',
  })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
