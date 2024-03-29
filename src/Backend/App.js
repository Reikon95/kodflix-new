const shows = require('./Shows')
const express = require('express')
const app = express()
const port = process.env.PORT || 3001;
const path = require('path');


app.get('/rest/shows', (req, res) => res.send(shows()));
app.get('/rest/shows/:id', (req, res) => res.send([shows()
	.find(show => show.id === req.params.id)]));

app.use(express.static(path.join(__dirname, '../../build')));
app.get('*', function(req, res) {
	res.sendFile(path.join(__dirname, '../../build', 'index.html'));
});
app.listen(port, () => console.log(`Example app listening on port ${port}!`))