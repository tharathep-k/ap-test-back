const { PrismaClient } = require("@prisma/client");

const prisma = new PrismaClient();

const { paymentRegister } = require("../validator/payment-validate");

exports.createPayment = async (req, res, next) => {
  try {
    const data = paymentRegister(req.body);
    console.log(data);

    await prisma.payment.create({ data: data });

    res.status(200).json("success");
  } catch (error) {
    next(error);
  }
};

exports.getAllData = async (req, res, next) => {
  try {
    const data = await prisma.payment.findMany()

    res.status(200).json(data)
  } catch (error) {
    next(error);
  }
};
