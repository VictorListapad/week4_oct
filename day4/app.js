// imports
const express = require('express');
const mongoose = require('mongoose');

const app = express();

// connect to db
mongoose.connect("mongodb://localhost/marvel")
  .then(() => console.log("Connected to db 🔌"))
  .catch(() => console.log("Not so fast Mr. Anderson...❌"));

// middlwares
app.use(express.json());

// -------------- NOTES ---------------
// MVC => Model, View, Controller
//          |       |       |
//        Schemas   |       route
//                  |
//                 HTML/ -> Reacts

// routes
app.use("/api/heros", require('./routes/superhero'));
app.use("/api/villains", require("./routes/villain"));

// port & listent to clients
const port = 5000;
app.listen(port, () => {
  console.log("Server running...⚡")
})