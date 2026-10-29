import { Router } from "express"
import { crearServicio, prueba } from "../controllers/servicios.controllers.js"

const router =Router()

router.route('/test').get(prueba)
router.route('/').post(crearServicio)
export default router