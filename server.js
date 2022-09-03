const { app } = require('./app');
const { db } = require('./utilis/database.utils');
require('dotenv').config();
const startServer = async () => {
  try {
    await db.authenticate();
    await db.sync();

    // Set server to listen
    PORT = process.env.PORT || 3001;

    app.listen(PORT, () => {
      console.log(`Server raised in the port ${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

startServer();
