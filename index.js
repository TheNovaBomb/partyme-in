const express = require("express")
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', function(req, res) {
  res.sendFile("index.html");
})

app.get('/index', function(req, res) {
  res.sendFile("public/index.html", { root: __dirname })
})

app.get('/about', function(req, res) {
  res.sendFile("public/about.html", { root: __dirname });
})

app.get('/contact', function(req, res) {
  res.sendFile("public/contact.html", { root: __dirname })
})

app.listen(port, () => console.log('Lyric App listening at http://localhost:3000'))
