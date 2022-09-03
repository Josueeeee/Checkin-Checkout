const { RegistrationsModel } = require('../models/registrations.model');

const registerExist = async (req, res, next) => {
  const { id } = req.params;
  const register = await RegistrationsModel.findOne({
    where: { id_registrions: id },
  });
  if (!register)
    return res.status(404).json({
      status: 'error',
      message: 'Registe not Exist',
    });
  req.register = register;
  next();
};

module.exports = {
  registerExist,
};
