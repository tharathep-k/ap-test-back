const express = require("express")

const paymentController = require("../controller/payment-controller")

const router = express.Router()

router.get("/getalldata" ,paymentController.getAllData)
router.get("/filterdata", paymentController.filterData)
router.post("/createpayment", paymentController.createPayment)


module.exports = router