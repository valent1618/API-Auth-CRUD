require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const swaggerUi = require('swagger-ui-express');
const yaml = require('yamljs');
const swaggerDocs = yaml.load('./docs/openapi.yaml');

const app = express();

const userRoutes = require('./routes/user');
const stuffRoutes = require('./routes/stuff');

mongoose
  .connect(process.env.MONGODB_URL, {
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
app.use('/api', swaggerUi.serve, swaggerUi.setup(swaggerDocs));
app.use('/images', express.static(path.join(__dirname, 'images')));

module.exports = app;
