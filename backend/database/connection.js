const { Sequelize } = require("sequelize");
const dotenv = require('dotenv');

dotenv.config();

// const sequelize = new Sequelize("railway", "root", "Geggd1C5d2116e3d6AAebHFd6hehFb2G", {
//     host: "roundhouse.proxy.rlwy.net",
//     dialect: "mysql",
//     port: 10775,
//     define: {
//         timestamps: false,
//       },
// });

//console.log("Connecting to: ");
//console.log("Host:\t" + process.env.DATABASE_HOST + "\nName:\t" + process.env.DATABASE_NAME + "\nPort:\t" + process.env.DATABASE_PORT + "\nUser:\t" + process.env.DATABASE_USER)


const sequelize = new Sequelize(process.env.DATABASE_NAME, process.env.DATABASE_USER, process.env.DATABASE_PASSWORD, {
  host: process.env.DATABASE_HOST,
  dialect: "mysql",
  port: process.env.DATABASE_PORT,
  define: {
      timestamps: false,
    },
});

const connection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } 
    catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}

module.exports = {
    connection,
    sequelize
}