const express = require('express');
const bodyParser = require ('body-parser');
const { graphiqlExpress, graphqlExpress } = require('apollo-server-express');
const { makeExecutableSchema } = require('graphql-tools');
const mongoose = require('mongoose');
const typeDefs = require('./schema');
const resolvers = require('./resolvers');
const FlightInfo = require ('./models');
const PORT = 3000;
const app = express();
const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

mongoose.connect('mongodb://localhost:27017/flights');

app.use('/graphql', bodyParser.json(), graphqlExpress({ schema, context: { FlightInfo } }));
app.use('/graphiql', graphiqlExpress({ endpointURL: '/graphql' }));

app.listen(PORT);
console.log('GraphQL started on: ' + PORT);