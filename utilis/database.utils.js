const { DataTypes, Sequelize } = require('sequelize');

const db = new Sequelize({
  dialect: `postgres`,
  host: `localhost`,
  username: 'postgres',
  password: 'admin*123',
  port: 5432,
  database: 'Checkin/Checkout',
  logging: true,
});
//database authentication
db.authenticate()
  .then(() => {
    console.log('Authenticated database');
  })
  .catch((error) => console.log(error));
db.sync()
  .then(() => console.log('table created in database'))
  .catch((err) => console.log(err));

module.exports = {
  db,
  DataTypes,
};
