import { Router } from "express"
import { crearServicio, listarServicios, prueba, servicioBuscado } from "../controllers/servicios.controllers.js"

const router =Router()

// router.route('/test').get(prueba)
router.route('/').post(crearServicio).get(listarServicios)
router.route('/:id').get(servicioBuscado)

export default router