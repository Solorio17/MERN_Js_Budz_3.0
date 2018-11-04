const { GraphQLServer } = require('graphql-yoga');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/jsbudz');

//Budz model
//bud is the collection name

const Bud = mongoose.model('bud', {
  budStrain: String,
  budType: String,
  budTHC: String,
  budCBD: String,
  budImage: String
})

const Dab = mongoose.model('dab', {
  dabStrain: String,
  dabType: String,
  dabTHC: String,
  dabCBD: String,
  dabImage: String
})


//Below is the schema
//type Query meaning View/Read
//type Mutation meaning Create/Delete/Update
//type budType, you can specify in the second code block whay you want to see returned (In Playground)
/* the createBudz inside Mutation specifies what keys need to have a value*/
const typeDefs = `
  type Query{
    hello(name: String): String!
    budList: [budType],
    dabList: [dabType]
  }

  type budType{
    id: ID!
    budStrain: String!
    budType: String!
    budTHC: String!
    budCBD: String!
    budImage: String!
  }

  type dabType{
    id: ID!
    dabStrain: String!
    dabType: String!
    dabTHC: String!
    dabCBD: String!
    dabImage: String!
  }



  type Mutation{
    createBud(budStrain: String!, budType: String!, budTHC: String!, budCBD: String!, budImage: String!): budType
    updateBud(id: ID!, budImage: String!): Boolean
    removeBud(id: ID!): Boolean

    createDab(dabStrain: String!, dabType: String!, dabTHC: String!, dabCBD: String!, dabImage: String!): dabType
    updateDab(id: ID!, dabImage: String!): Boolean
    removeDab(id: ID!): Boolean
  }
`

const resolvers = {
  Query: {
    hello: (_, { name}) => `Hello ${name || 'World!'}`,
    budList: () => Bud.find(),
    dabList: () => Dab.find()
  },
  //After specifying in Mutation we need to write it below twice, once in the createBudz and once in the const you made
  Mutation: {
    createBud: async (_, { budStrain, budType, budTHC, budCBD, budImage}) =>{
      const budz = new Bud({ budStrain, budType, budTHC, budCBD, budImage});
      await budz.save();
      return budz;
    },
    updateBud: async (_, {id, budImage}) =>{
      await Bud.findByIdAndUpdate(id, {Image});
      return true;
    },
    removeBud: async (_, { id }) =>{
      await Bud.findByIdAndRemove(id);
      return true;
    },
    createDab: async (_, {  dabStrain,  dabType,  dabTHC,  dabCBD,  dabImage}) =>{
      const dabz = new Dab({  dabStrain,  dabType,  dabTHC,  dabCBD,  dabImage});
      await dabz.save();
      return dabz;
    },
    updateDab: async (_, {id, image}) =>{
      await Dab.findByIdAndUpdate(id, { dabImage});
      return true;
    },
    removeDab: async (_, { id }) =>{
      await Dab.findByIdAndRemove(id);
      return true;
    }
  }
}

const server = new GraphQLServer({typeDefs, resolvers})

mongoose.connection.once('open', () =>{
  server.start(() => console.log("Server is running on port 4000"))
})
