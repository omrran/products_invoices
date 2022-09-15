const express = require('express')
const cors = require("cors");
const employeeRouter = require('./Routes/employeeRouter')
const invoiceRouter = require('./Routes/invoiceRouter')
const productRouter = require('./Routes/productRouter')
const sequelizeInstance = require('./Config/database');

require('dotenv').config()

let port = process.env.PORT || 6000;

const app = express();

app.use(cors());

// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

app.use('/api/employees', employeeRouter);
app.use('/api/invoices', invoiceRouter);
app.use('/api/products', productRouter);

app.listen(port, () => {
    console.log(`SERVER STARTED ON PORT ${port}`);
})
