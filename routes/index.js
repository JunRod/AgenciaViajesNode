import express from "express"
import { paginaInicio, 
    paginaNosotros, 
    paginaTestimoniales, 
    paginaViajes,
    paginaDetalleViaje
} from "../controllers/paginasControllers.js"

import {
    guardarTestimonial
} from "../controllers/testimonialesController.js"

const router = express.Router()

router.get("/", paginaInicio)
//Estamos creando una variable "pagina" con el valor "Inicio" desde el routeen principal.

router.get("/nosotros", paginaNosotros)

router.get("/testimoniales", paginaTestimoniales)

router.post("/testimoniales", guardarTestimonial)

router.get("/viajes", paginaViajes)

router.get("/viajes/:viaje", paginaDetalleViaje)

//render: se usa para mostrar una vista

export default router;