const sequelizeInstance = require('../Config/database');
const { DataTypes } = require('sequelize');
const InvoiceModel = require('./Invoice');

const EmployeeModel = sequelizeInstance.define('Employee', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    lastName: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,
        }
    },
    phone: {
        type: DataTypes.INTEGER,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    }

}, {
    tableName: 'employees'
})

//relations ?
// EmployeeModel.hasMany(InvoiceModel,{
//     foreignKey: 'empId'
// });
// InvoiceModel.belongsTo(EmployeeModel);


EmployeeModel.sync().then(() => {
    console.log('table created');
}).catch((err) => {
    console.log("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
    console.log(err);
})

module.exports = EmployeeModel;