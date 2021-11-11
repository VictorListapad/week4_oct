const express = require('express');
const mongoose = require('mongoose');
const app = express();

// db connection
mongoose.connect('mongodb://localhost/marvel')
  .then(() => console.log("Connected to db...🔌"))
  .catch(() => console.log("Error connecting to db ❌"))


// middlewares


// routes
app.get("/", (req, res) => {
  res.send(`<h2>Hello World</h2>`)
});

app.get("/about", (req, res) => {
  res.sendFile(__dirname + '/views/index.html')
})

// port & starting to listen to clients (remember server in restaurant and clients)
const port = 5000;
app.listen(port, () => {
  console.log("Server working...⚡")
})