import {Viaje} from "../models/Viaje.js"
import {Testimonial} from "../models/Testimoniales.js"

const paginaInicio = async (req, res) => {

    //Consultar 3 viajes del modelo Viaje
    const promiseDB = []

    promiseDB.push( Viaje.findAll({limit: 3}) )
    promiseDB.push( Testimonial.findAll({limit: 3}) )

    try {

        const resultado = await Promise.all( promiseDB )

        res.render("inicio", {
            pagina: "Inicio",
            clase: "home",
            viajes: resultado[0] ,
            testimoniales: resultado[1]
        })
    } catch (error) {
        console.log(error)
    }
  
}

const paginaNosotros = (req, res) => {

    //Vista
    res.render("nosotros", {
        pagina: "Nosotros"
    })
}

const paginaTestimoniales = async (req, res) => {

    try {
        const testimoniales = await Testimonial.findAll()

        res.render("testimoniales", {
          pagina: "Testimoniales",
          testimoniales
        })

    } catch (error) {
        console.log(error)
    }
    
}

const paginaViajes = async (req, res) => {

    //Consultar DB
    const viajes = await Viaje.findAll();

    //Vista
    res.render("viajes", {
        pagina: "Viajes",
        viajes
    })
}

const paginaDetalleViaje = async (req, res) => {
    
    const {viaje} = req.params

    try {
        //Consultar DB
        const resultado = await Viaje.findOne({where: {slug: viaje}})

        //Vista
        res.render("viaje", {
            pagina: "Información Viaje",
            resultado
        })
    } catch (error) {
        console.log(error)
    }
}

export {
    paginaInicio,
    paginaNosotros,
    paginaTestimoniales,
    paginaViajes,
    paginaDetalleViaje
}