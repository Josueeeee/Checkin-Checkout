const { db, DataTypes } = require('../utilis/database.utils');

const RegistrationsModel = db.define('registrations', {
  id_registrions: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
    allowNull: false,
  },
  id_user: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  entranceTime: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  exitTime: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  status: {
    type: DataTypes.STRING,
    defaultValue: 'working',
  },
});

module.exports = {
  RegistrationsModel,
};
