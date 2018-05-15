const express = require('express');
const graphqlHTTP = require('express-graphql');
const { buildSchema } = require('graphql');

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
  type Query {
    hello: String
  }
`);

// The root provides a resolver function for each API endpoint
var root = {
   hello: () => {
      return 'Hello world!';
   }
};

//set up the express app
const app = express();
app.use(
   '/graphql',
   graphqlHTTP({
      schema: schema,
      rootValue: root,
      graphiql: true,
      pretty: true
   })
);

//port setup
const PORT = process.env.port || 4000;

//listenting to the port
app.listen(PORT, () => {
   console.log(`server running on the port ${PORT}`);
});
