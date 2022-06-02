const express = require('express')
const port = 3000

const app = express()

app.use(express.static('public'))

// Home
app.get('/', (req, res) => {
  res.sendFile('index.html', {root: __dirname + '/public'})
})

// 404
app.all('*', (req, res) => {
    res.sendFile('404.html', {root: __dirname + '/public/html'})
})

app.listen(port)