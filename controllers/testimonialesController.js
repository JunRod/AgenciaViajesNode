import { Testimonial } from "../models/Testimoniales.js"

const guardarTestimonial = async (req, res) => {

    //Validar
    const {nombre, correo, mensaje} = req.body;

    const errores = []

    if(nombre.trim() === "") {
        errores.push({mensaje: "El nombre esta vacio"})
    }

    if(correo.trim() === "") {
        errores.push({mensaje: "El correo esta vacio"})
    }

    if(mensaje.trim() === "") {
        errores.push({mensaje: "El email esta vacio"})
    }

    if(errores.length > 0) { //Vista que se carga cuando hay errores.

        const testimoniales = await Testimonial.findAll()

        //Mostrar la vista con errores
        res.render("testimoniales", {
            pagina: "Testimoniales",
            errores,
            nombre,
            correo,
            mensaje,
            testimoniales
        })

    } else {
        try {
            await Testimonial.create({
                nombre,
                correo,
                mensaje
            })

            res.redirect("/testimoniales")
        } catch (error) {
            console.log(error)
        }

    }

}


export {
    guardarTestimonial
}