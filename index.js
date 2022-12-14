import express from "express";
import router from "./routes/index.js";
import db from "./config/db.js"
import dotenv from "dotenv/config" 

const app = express()

//Conectar la base de datos
db.authenticate()
    .then( () => console.log("Base de datos conectada"))
    .catch( error => console.log(error) )

//Habilitar Pug
app.set("view engine", "pug")

app.use( (req, res, next) => { 
    const year = new Date()

    res.locals.actualYear = year.getFullYear()
    res.locals.nombresitio = "Agencia de Viajes | "
    return next()
})
//Este es un middleware de express, es decir de la linea 12 a 17. .use de ejecuta siempre, ya que se ejecuta por cada termino (get, post...)
//res, es la respuesta del servidor de express, y podemos acceder a sus variables como tambien crearlas con "locals"
//En este caso estamos creando la varuable actualYear que contienen el año actual, esta variable la podemos usar directamente desde pug, porque esta variable se pasa automaticamente a la <vista>
//usamos next() para ir al siguiente middleware, pero con return estamos forzando a que se vaya al siguiente por si ocurre un error.

//Agregar body parser para leer los datos del formulario
app.use(express.urlencoded({extended:true}))

//Definir la carpeta publica
app.use(express.static("public"))

//Agregar router
app.use("/", router) //use contiene todos los verbos: get, post... ; y a la ruta / estamos agregandole todas las demas rutas.

app.listen(process.env.PORT || 7015, () => {
    console.log("El servidor esta funcionando en el puerto", process.env.PORT || 7015)
})