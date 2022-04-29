const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(express.json());

app.use('/api', require('./routes/api'));

app.listen(5000, () => {
  console.log(`Server listening on 5000`);
});