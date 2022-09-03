const express = require('express');
const {
  getRegistrations,
  getUserRegistration,
  checkin,
  checkout,
  cancelledRegister,
} = require('../controllers/Registration.controller');

const { registerExist } = require('../middlewares/register.middleware');

const registratioRouter = express.Router();

registratioRouter.get('/', getRegistrations);

registratioRouter.get('/:id', registerExist, getUserRegistration);

registratioRouter.post('/', checkin);

registratioRouter.patch('/:id', registerExist, checkout);

registratioRouter.delete('/:id', registerExist, cancelledRegister);

module.exports = {
  registratioRouter,
};
