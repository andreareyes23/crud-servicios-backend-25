import mongoose, { Schema } from "mongoose";

const servicioSchema = new Schema(
  {
    nombreServicio: {
      type: String,
      required: true,
      unique: true,
      minLength: 5,
      maxLength: 100,
      trim: true,
    },
    precio: {
      type: Number,
      required: true,
      min: 50,
    },
    descripcion: {
      type: String,
      required: true,
      minLength: 10,
      maxLength: 500,
    },
    imagen: {
      type: String,
      required: true,
      validate: {
        validator: (valor) => {
          return /\.(jpg|jpeg|png|webp|avif|svg)$/.test(valor);
        },
      },
    },
    categoria: {
      type: String,
      required: true,
      enum: ["Desarrollo web", "Backend & API", "Consultoria"],
    },
  },
  {
    timestamps: true,
  },
);

const Servicio =mongoose.model('servicio', servicioSchema)
export default Servicio