const mongoose = require("mongoose");
const db = require("../models");

// This file empties the Books collection and inserts the books below

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/candiMatch");

const userSeed = [
  {
    firstName: "LeAnn",
    lastName: "Sawatzky",
    surveys: [],
    email: "test@test.com",
    password: "abcdefg",
    candidate: false,
  },

   {
    firstName: "Bob",
    lastName: "Williams",
    surveys: [],
    email: "test1@test1.com",
    password: "abcdefg",
    candidate: false,
  },

   {
    firstName: "Jo",
    lastName: "Kotval",
    surveys: [],
    email: "test2@test2.com",
    password: "abcdefg",
    candidate: false,
  },

  {
    firstName: "Rene",
    lastName: "Kaluza",
    surveys: [],
    email: "test3@test3.com",
    password: "abcdefg",
    candidate: true,
  },
];

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
