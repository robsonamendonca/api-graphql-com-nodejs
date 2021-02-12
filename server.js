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

app.use('/', express.static(__dirname + '/public/apidoc'));


/**
 * @api {get} /graphql?query:query Graphql Simples
 * @apiVersion 0.0.1
 * @apiGroup Graphql
 * @apiDescription API de Graphql Simples
 * 
 * @apiHeader {string} Query Query para execução no Graphql
 * 
 * @apiHeaderExample {json} Request-Example:
 * {
 *    hello,
 * }
 * @apiSuccess {String} data Mensagem de sucesso
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 * 	  {
 * 		  "data": {
 * 			  "hello": "Hello World!"
 * 		  }
 * 	  }
 * 
 * @apiError {String} errors Mensagem de erro
 * 
 * @apiErrorExample {json} Error
 *    HTTP/1.1 406 Not Acceptable
 *	  {
 *		  "errors": [
 *	  		{
 *	  		  "message": "Must provide query string."
 *			}
 *		  ]
 *	  }
 *
 */
app.use("/graphql", graphqlHTTP({
schema,
rootValue,
graphiql: false
}));


/**
 * @api {get} /play Graphql Playground
 * @apiVersion 0.0.1
 * @apiGroup Graphql
 * @apiDescription API de Graphql usando o playground Simples
 * 
 * @apiHeader {string} Query Query para execução no Graphql
 * 
 * @apiHeaderExample {json} Request-Example:
 * {
 *    hello,
 * }
 * @apiSuccess {String} data Mensagem de sucesso
 * 
 * @apiSuccessExample {json} Sucesso
 *    HTTP/1.1 200 OK
 * 	  {
 * 		  "data": {
 * 			  "hello": "Hello World!"
 * 		  }
 * 	  }
 * 
 * @apiError {String} errors Mensagem de erro
 * 
 * @apiErrorExample {json} Error
 *    HTTP/1.1 406 Not Acceptable
 *	  {
 *		  "errors": [
 *	  		{
 *	  		  "message": "Must provide query string."
 *			}
 *		  ]
 *	  }
 *
 */
app.use("/play", graphqlHTTP({
schema,
rootValue,
graphiql: true
}));

app.listen(porta , () => console.log("Express GraphQL Server Now Running On localhost:"+porta +"/graphql"));
