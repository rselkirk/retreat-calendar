const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const publicPath = path.join(__dirname, '..','public');
const port = process.env.PORT || 3000;
const db = require('./queries')

app.use(express.static(publicPath));
app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

// app.get('/api/express_backend', (req, res) => {
//   res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
// });

app.get('/api/users', db.getUsers);

app.listen(port, () => {
  console.log('Server is up!');
});
