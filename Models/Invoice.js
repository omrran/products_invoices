const sequelizeInstance = require('../Config/database');
const { DataTypes } = require('sequelize');

const InvoiceModel = sequelizeInstance.define('Invoice', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    empID: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
    totalPrice: {
        type: DataTypes.INTEGER,
        allowNull: false
    },
}, {
    tableName: 'invoices'
})

InvoiceModel.sync().then(() => {
    console.log('table created');
}).catch((err) => {
    console.log("BBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBB");
    console.log(err);
})

module.exports = InvoiceModel;