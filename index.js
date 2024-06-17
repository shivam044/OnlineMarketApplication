const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const mongoURL = 'mongodb://localhost:27017';

mongoose.connect(mongoURL,{ useNewUrlParser: true, useUnifiedTopology: true });

app.get('/', (req, res) => {
  res.json({ message: 'Welcome to DressStore application.' });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
