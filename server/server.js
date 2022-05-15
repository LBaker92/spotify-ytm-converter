const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const corsConfig = {
  credentials: true,
  origin: 'http://localhost:3000'
};

const app = express();

app.use(cors(corsConfig));

app.use(express.json());
app.use(cookieParser());

app.use('/api', require('./routes/api'));

app.listen(5000, () => {
  console.log(`Server listening on 5000`);
});