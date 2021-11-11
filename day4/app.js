// imports
const express = require('express');
const mongoose = require('mongoose');
const SuperHero = require('./models/SuperHero');
const app = express();

// connect to db
mongoose.connect("mongodb://localhost/marvel")
  .then(() => console.log("Connected to db 🔌"))
  .catch(() => console.log("Not so fast Mr. Anderson...❌"));

// middlwares

// CRUD
// Create Read Update Delete

// routes
app.get("/", async (req, res) => {
  const superheroes = await SuperHero.find();
  try {
    res.json({data: superheroes})
  } catch (error) {
    res.json({error: error});
  }
});



// port & listent to clients
const port = 5000;
app.listen(port, () => {
  console.log("Server running...⚡")
})