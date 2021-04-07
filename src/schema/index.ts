import { makeExecutableSchema } from 'graphql-tools';
import { GraphQLSchema } from 'graphql';
import 'graphql-import-node';

import typeDefs from './schema.gql';

import { resolvers } from '../resolvers/resolver';

export const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs,
  resolvers,
});
