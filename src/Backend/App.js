const shows = require('./Shows')
const express = require('express')
const app = express()
const port = 3001

app.get('/', (req, res) => res.send('Hello WAA#orld!'))
app.get('/rest/shows', (req, res) => res.send(shows()))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))