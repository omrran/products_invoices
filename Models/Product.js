const sequelizeInstance = require('../Config/database');
const { DataTypes } = require('sequelize');

const ProductModel = sequelizeInstance.define('Product', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER
    },
    invoiceID: {
        type: DataTypes.INTEGER,
        allowNull: true,
    },
}, {
    tableName: 'products'
})

ProductModel.sync().then(() => {
    console.log('table created');
}).catch((err) => {
    console.log("CCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCCC");
    console.log(err);
})

module.exports = ProductModel;