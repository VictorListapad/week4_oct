const express = require('express');
const app = express();

app.get("/", (req, res) => {
  return res.sendFile(__dirname + '/views/index.html');
})

app.get("/about", (req, res) => {
  return res.sendFile(__dirname + '/views/about.html')
})

const port = 5000;
app.listen(port, () => {
  console.log("Server running...⚡")
})