// queries for terminal

// to get all the documents in a collection
db.superheros.find();

// get superhero with name Thor
db.superheros.find({ name: "Thor" });

// project and find
db.superheros.find({ name: "Thor" }, { _id: 0, age: 0 }).pretty();

// filter by range in asc order
db.superheros
  .find({ age: { $gte: 30, $lte: 50 } })
  .sort({ age: 1 })
  .pretty();

// sort by age asc
db.superheros.find().sort({ age: 1 }).limit(3).skip(3).pretty();

// insert a document
db.superheros.insert({
  name: "Spiderman",
  superpower: "Spider Sense, spider webs",
  suit: "red and blue suit",
  age: 58,
});

db.superheros.insertMany([
  {
    name: "Wolverine",
    superpower: "Healing, Retractable blades",
    suit: "yellow & blue",
    age: 220,
  },
  {
    name: "Rougue",
    superpower: "Steals",
    age: 23,
  },
]);

// update
db.superheros.updateOne(
  { _id: ObjectId("618c206dfebec3f258976b2b") },
  { $set: { name: "Rogue" } }
);

db.superheros.deleteOne({_id: ObjectId("618bfe23e613497e9d335568")})

db.companies.find()