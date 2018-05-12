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

const surveySeed = [
  {
    title: "Issue A",
    questions: [],
  },

  {
    title: "Issue B",
    questions: [],
  },

  {
    title: "Issue C",
    questions: [],
  },
];

const questionSeed = [
  {
    question: "Question A-1",
    answer: "Ans-A1",
  },

  {
    question: "Question A-2",
    answer: "Ans-A2",
  },

  {
    question: "Question A-3",
    answer: "Ans-A3",
  },

  ]

db.User
  .remove({})
  .then(() => db.User.collection.insertMany(userSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Survey
  .remove({})
  .then(() => db.Survey.collection.insertMany(surveySeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

  db.Question
  .remove({})
  .then(() => db.Question.collection.insertMany(questionSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    db.Question.find({})
      .then((results) => {
          results.forEach((question) => {
            console.log(question._id);
            db.Survey.findOneAndUpdate(
              { title: "Issue A"},
              { $push: { questions: question._id } },
              { safe: true, upsert: true },
            );
          })
      });
  });

