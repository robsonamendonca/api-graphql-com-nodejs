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
var porta = process.env.PORT || 3333;

app.use("/graphql", graphqlHTTP({
schema,
rootValue,
graphiql: false
}));

app.listen(porta , () => console.log("Express GraphQL Server Now Running On localhost:"+porta +"/graphql"));
