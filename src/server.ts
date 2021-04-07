import express, { Application } from 'express';
import cors from 'cors';
import compression from 'compression';
import { ApolloServer } from 'apollo-server-express';
import { createServer } from 'http';
import { schema } from './schema';

const app: Application = express();

app.use(cors()).use(compression());

const server = new ApolloServer({
  schema,
  introspection: true,
  context: ({ req }) => ({
    headers: req.headers,
  }),
});

server.applyMiddleware({ app });

const PORT = 5000;

const httpServer = createServer(app);

httpServer.listen(PORT, () => console.log(`Server running in http://localhost:${PORT}/graphql`));
