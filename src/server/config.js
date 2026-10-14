import express from "express";
import cors from "cors";
import morgan from "morgan";
import { dirname } from "path";
import { fileURLToPath } from "url";

class Server {
  constructor() {
    //definen las propiedades
    this.app = express();
    this.port = process.env.PORT || 3000;
    this.middlewares();
  }
  // métodos de la clase
  middlewares() {
    // localhost:5173 localhost:3000
    // configuramos CORS
    this.app.use(cors()); //configuramos CORS para permitir la comunicación de distintos dominios
    this.app.use(morgan("dev")); //muestra por terrminal información de la comunicación HTTP
    this.app.use(express.json()); //podemos lee los datos en formato JSON que llegan en el BODY del request
    //configurar un archivo estático
    const __dirname = dirname(fileURLToPath(import.meta.url));
    // console.log(__dirname + "/../../public");
    this.app.use(express.static(__dirname + "/../../public")); //Configuramos un archivo estático
  }

  listen() {
    this.app.listen(this.port, () => {
      console.info(`Servidor activo en el http://localhost:${this.port}`);
    });
  }
}

export default Server;
