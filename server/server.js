const path = require('path');
const express = require('express');
const app = express();
const publicPath = path.join(__dirname, '..','public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('/api/express_backend', (req, res) => {
  res.send({ express: 'YOUR EXPRESS BACKEND IS CONNECTED TO REACT' });
});

app.listen(port, () => {
  console.log('Server is up!');
});
