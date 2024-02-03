const { sequelize } = require ("../database/connection");
const { Model, DataTypes } = require("sequelize");

class Note extends Model {}

Note.init(
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
        },
        title: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
    {
        sequelize,
        modelName: "Note",
    }
);

module.exports = Note;

// async function testConnection() {
//     try {
//         await sequelize.authenticate();
//         console.log("All Good!!")
//     } catch (err) {
//         console.error("All Bad!!", err)
//     }
// }

// testConnection();
