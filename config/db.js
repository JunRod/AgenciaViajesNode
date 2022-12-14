//Este arcxhivo es unicamente codigo que tiene que ver con la db.js
import Sequelize from "sequelize";
import dotenv from "dotenv/config" //Con dotenv, cuando el usuario entre a este archivo desde github, solo podrá ver el nombre de las variables pero no las credenciales originales, es decir los valores.

const db = new Sequelize(process.env.DB_NAME , process.env.DB_USER, process.env.DB_PASS, {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    dialect: "mysql",
    define: {
        timestamps: false
    },
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle:10000
    },
    operatorAliases: false
})

export default db