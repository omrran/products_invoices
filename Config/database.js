const sequelize = require('sequelize');
require('dotenv').config()

const sequelizeInstance = new sequelize(
    process.env.DB_DATABASE,
    process.env.DB_USERNAME,
    process.env.DB_PASSWORD,
    {
        dialect: process.env.DIALECT
    }

)

// //test connenction
// sequelizeInstance.authenticate().then(() => {
//     console.log('database connction done');
// }).catch(err => console.log(err))

module.exports = sequelizeInstance;
