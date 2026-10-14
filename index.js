import Server from "./src/server/config.js"

// Crear el server

const server = new Server()
// Leer las rutas
// Escuchar el puerto
server.listen()
console.log('Primer mensaje del backend')