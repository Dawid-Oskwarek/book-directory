const express = require('express');
const bodyParser = require('body-parser');
const routes = require('./src/routes/booksRoute');
const cors = require('cors');

const PORT = 3001;
const app = express();
app.use(bodyParser.json());
app.use(cors());
app.use('/', routes);

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});