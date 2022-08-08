const express = require('express');
const mongoose = require('mongoose');
const path = require('path');

const app = express();

const userRoutes = require('./routes/user');
const stuffRoutes = require('./routes/stuff');

mongoose
  .connect('mongodb+srv://<USERNAME>:<PASSWORD>@<MongoAtlasCluster>', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Login to mongodb successful !'))
  .catch(() => console.log('Login to mongodb failed !'));

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization'
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS'
  );
  next();
});

app.use('/api/stuff', stuffRoutes);
app.use('/api/auth', userRoutes);
app.use('/api', express.static(path.join(__dirname, 'docs')));
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
