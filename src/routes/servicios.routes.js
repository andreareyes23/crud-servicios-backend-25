import { Router } from "express"
import { borrarServicio, crearServicio, editarServicio, listarServicios, prueba, servicioBuscado } from "../controllers/servicios.controllers.js"

const router =Router()

// router.route('/test').get(prueba)
router.route('/').post(crearServicio).get(listarServicios)
router.route('/:id').get(servicioBuscado).delete(borrarServicio).put(editarServicio)

export default router