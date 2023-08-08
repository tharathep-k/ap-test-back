require("dotenv").config();
const express = require("express")
const cors = require("cors")

const paymentroute = require("./routes/payment-route")

const app = express()

app.use(cors())

app.use(express.json());

app.use("/payment", paymentroute)

const port = process.env.PORT || 8000
app.listen(port, () => console.log(`Server running on port ${port}`));