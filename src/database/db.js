import mongoose from "mongoose";

const conectarDB = async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI);
        console.info("Conexión con la BD exitosa")
    } catch (error){
        console.error(error)
    }
};

conectarDB() //ejecutamos la conexión con la base de datos