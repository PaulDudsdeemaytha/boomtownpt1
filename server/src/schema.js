import { makeExecutableSchema } from "graphql-tools";
import resolvers from "./resolvers";

const typeDefs = `
  type Item {
    id: ID!
    title: String!
    description: String!
    imageurl: String!
    tags: [String]!
    itemowner: User!
    created: String!
    available: Boolean!
    borrower: User
  }
  type User {
    id: ID!
    email: String!
    fullname: String!
    bio: String
    owneditems: [Item]
    borroweditems: [Item]
  } 
  type Query {
    items: [Item]
    users: [User]
    item(id: ID!): Item
    user(id: ID!): User
  }

  type Mutation {
    addItem (
      title: String!
      description: String!
      imageurl: String!
      tags: [String]
      itemowner: String!
      created: String!
      available: Boolean!
      borrower: String
    ): Item
  }
`;

export default makeExecutableSchema({
  typeDefs,
  resolvers
});
