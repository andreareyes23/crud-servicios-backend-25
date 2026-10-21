import Server from "./src/server/config.js"
import router from "./src/routes/index.routes.js"

// Crear el server

const server = new Server()

// Leer las rutas
//http://localhost:3000/api/servicios
server.app.use('/api', router)

// Escuchar el puerto

server.listen()


