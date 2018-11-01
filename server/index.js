const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jsbudz');

//Budz model
//bud is the collection name
const Bud = mongoose.model('bud', {
  strain: String,
  type: String,
  thc: String,
  cbd: String,
  image: String
})

//Below is the schema
//type Query meaning View/Read
//type Mutation meaning Create/Delete/Update
//type budType, you can specify in the second code block whay you want to see returned (In Playground)
/* the createBudz inside Mutation specifies what keys need to have a value*/
const typeDefs = `
  type Query{
    hello(name: String): String!
    budList: [budType]
  }

  type budType{
    id: ID!
    strain: String!
    type: String!
    thc: String!
    cbd: String!
    image: String
  }

  type Mutation{
    createBud(strain: String!, type: String!, thc: String!, cbd: String!, image: String): budType
    updateBud(id: ID!, strain: String!): Boolean
    removeBud(id: ID!): Boolean
  }
`

const resolvers = {
  Query: {
    hello: (_, { name}) => `Hello ${name || 'World!'}`,
    budList: () => Bud.find()
  },
  //After specifying in Mutation we need to write it below twice, once in the createBudz and once in the const you made
  Mutation: {
    createBud: async (_, { strain, type, thc, cbd, image}) =>{
      const budz = new Bud({ strain, type, thc, cbd, image});
      await budz.save();
      return budz;
    },
    updateBud: async (_, {id, strain}) =>{
      await Bud.findByIdAndUpdate(id, {strain});
      return true;
    },
    removeBud: async (_, { id }) =>{
      await Bud.findByIdAndRemove(id);
      return true;
    }
  }
}

const server = new GraphQLServer({typeDefs, resolvers})

mongoose.connection.once('open', () =>{
  server.start(() => console.log("Server is running on port 4000"))
})
