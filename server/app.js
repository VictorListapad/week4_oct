// imports
const express = require('express');
const app = express();

// connect to db

// middlewares
app.use(express.static('public'));

// routes
app.get("/", (req, res) => {
  return res.sendFile(__dirname + '/views/index.html')
})

//                 req, res
app.get('/about', (dog, cat) => {
  return cat.sendFile(__dirname + '/views/about.html')
});

app.get('/contact', (req, res) => {
  return res.sendFile(__dirname + '/views/contact.html')
})

// app.get("/about", (req, res) => {
//   return res.send(`
//   <!doctype html>
//   <html>
//     <head>
//       <meta charset="utf-8">
//       <title>Cat</title>
//       <link rel="stylesheet" href="/stylesheets/style.css" />
//     </head>
//     <body>
//       <h1>Cat</h1>
//       <p>This is my second route</p>
//       <img src="/images/cool-cat.jpg" />
//     </body>
//   </html>
//   `)
// })


const port = 5000;
// listen to clients (remember server and client at restaurant)
app.listen(port, () => {
  console.log("Server running...⚡")
})

// 
//
//
//