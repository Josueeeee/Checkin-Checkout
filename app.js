console.clear();
require('dotenv').config();
const express = require('express');
const app = express();

//routes
const { registratioRouter } = require('./routes/registrations.routes');

//middlewares
app.use(express.json());

//definition of endpointss
app.use('/api/v1/registrations', registratioRouter);

app.all('*', (req, res) => {
  res.status(404).json({
    estatus: 'error',
    message: `${req.method} and ${req.url} NON-EXISTING ENDPOINTS ON THE SERVER`,
  });
});
//server initialization
module.exports = { app };
