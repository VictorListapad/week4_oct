/**
 * GET -> gets the data
 * 
 * POST -> creates new data
 * 
 * PUT -> Updates data
 * 
 * DELETE -> Deletes data
 */

// CRUD -> CREATE, READ, UPDATE, DETELE
const express = require('express');
const app = express();

// GET request
// req = request
// res = response
app.get("/", (req, res) => {
  return res.json({message: "index route"})
})

app.get("/about", (req, res) => {
  return res.json({message: "You are in the about page route"})
})

const port = 3000;
app.listen(port, () => {
  console.log("Server running")
})