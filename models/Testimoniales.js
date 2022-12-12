import Sequelize from "sequelize";
import db from "../config/db.js"

export const Testimonial = db.define("testimoniales", { //=> Viaje es el modelo en Sequelize
    //Atributos del model
    nombre: {
        type: Sequelize.STRING
    },
    correo: {
        type: Sequelize.STRING
    },
    mensaje: {
        type: Sequelize.STRING
    }
});
