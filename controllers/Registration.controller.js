const { RegistrationsModel } = require('../models/registrations.model');

const getRegistrations = async (req, res) => {
  try {
    const Registers = await RegistrationsModel.findAll();
    return res.status(200).json({
      status: 'sucess',
      data: {
        Registers,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const getUserRegistration = async (req, res) => {
  const { register } = req;
  try {
    return res.status(200).json({
      status: 'sucess',
      data: { register },
    });
  } catch (erorr) {
    console.log(erorr);
  }
};

const checkin = async (req, res) => {
  const { id_user, entranceTime } = req.body;
  try {
    if (!entranceTime)
      return res.status(401).json({
        status: 'error',
        message: 'incomplete information',
      });
    const newRegitration = await RegistrationsModel.create({
      id_user,
      entranceTime,
    });

    return res.status(201).json({
      satus: 'sucess',
      data: {
        newRegitration,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const checkout = async (req, res) => {
  const { register } = req;
  const { exitTime, status } = req.body;
  try {
    if ((!exitTime, !status))
      return res.satus(401).json({
        tatus: 'error',
        message: 'incomplete information',
      });

    register.update({
      exitTime,
      status,
    });
    return res.status(201).json({
      status: 'success',
      data: {
        register,
      },
    });
  } catch (error) {
    console.log(error);
  }
};

const cancelledRegister = async (req, res) => {
  const { register } = req;
  try {
    register.update({
      exitTime: null,
      status: 'cancell',
    });
    return res.status(201).json({
      message: 'success',
    });
  } catch (error) {
    console.log(error);
  }
};
module.exports = {
  getRegistrations,
  getUserRegistration,
  checkin,
  checkout,
  cancelledRegister,
};
