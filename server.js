const express = require("express");
const graphqlHTTP = require('express-graphql').graphqlHTTP;
const { buildSchema } = require("graphql");

const schema = buildSchema(`

              type Query {

                     hello: String

              }

       `);

 const rootValue = {

              hello: () => "Hello World!"

       };


const app = express();

app.use("/graphql", graphqlHTTP({
schema,
rootValue,
graphiql: false
}));

app.listen(3333, () => console.log("Express GraphQL Server Now Running On localhost:3333/graphql"));
