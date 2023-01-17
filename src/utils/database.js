const {Sequelize} = require('sequelize');

//crear una instancia con configuracion de nuestra base de datos
//un objeto de configuracion -> credenciales de mi base de datos
const db = new Sequelize({
    database: "todoapp",
    username: "postgres",
    host: "localhost",//127.0.0.1
    port: "5432",
    password:"root",
    dialect:"postgres", //la base de datos que estamos usando
    logging: false,
});
module.exports = db;