const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const publicPath = path.join(__dirname, '..','public');
const port = 3000;
const db = require('./queries')

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/api/', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.get('/api/guests', db.getGuests);

app.post('/api/guests', db.createGuestInfo)

app.listen(port, () => {
  console.log(`App running on port ${port}!`);
});
