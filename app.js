const express = require("express");
const graphqlHTTP = require("express-graphql");
const schema = require("./schema/schema");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb://sazzad1111:1234@gql-sazzad-shard-00-00-wnxsm.mongodb.net:27017,gql-sazzad-shard-00-01-wnxsm.mongodb.net:27017,gql-sazzad-shard-00-02-wnxsm.mongodb.net:27017/test?ssl=true&replicaSet=gql-sazzad-shard-0&authSource=admin&retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);

mongoose.connection.once("open", () => {
  console.log("mongoose is connected");
});
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true
  })
);

app.listen(4000, () => {
  console.log("listen port 4000");
});
