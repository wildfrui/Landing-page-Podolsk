import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import express from "express";
import cors from "cors";
import { json } from "body-parser";
import { typeDefs, resolvers } from "./schema/index.js";

const app = express();
const server = new ApolloServer({
  typeDefs,
  resolvers,
});
await server.start();
app.use(
  "/graphql",
  cors(),
  json(),
  expressMiddleware(server, {
    context: async ({ req }) => ({ token: req.headers.token }),
  })
);

await new Promise((resolve) => httpServer.listen({ port: 4000 }, resolve));
console.log(`🚀 Server ready at http://localhost:4000/graphql`);
