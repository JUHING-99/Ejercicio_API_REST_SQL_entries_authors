const express = require('express')
const cowsay = require('cowsay')
const app = express()
const port = 3000

//middelwares
//const checkApiKey = require('./middlewares/auth_api_key')
const error404 = require('./middlewares/error404')
const morgan = require('./middlewares/morgan')

// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

//rutas
const entriesApiRoutes = require('./routes/entriesAPI_routes')
const authorsApiRoutes = require('./routes/authorsAPI_routes')


app.use(express.json()); // Habilito recepción de JSON en servidor

//app.use(checkApiKey)//si lo ponemos aquí protegemos TODO incluso el get. Sin apikey no se navega. 


//Ruta de Template
app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  // Rutas
  app.use('/',entriesApiRoutes);
  app.use('/',authorsApiRoutes);
  // opciones: /api/entries te da todo y /api/entries?email="correo" te da solo lo de ese correo
  

  //para rutas no existentes
app.use('*',error404)

app.listen(port, () => {
  console.log(
      cowsay.say({
          text: `Nos vamos a por tortilla (si queda) Example app listening on port http://localhost:${port}`,
          e: "oO",
          T: "U "
      }))
})

//para hacer algo en thunderclient tiene que estar iniciado el server
