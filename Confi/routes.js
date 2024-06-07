import {Router} from "express"
import infoController from "../Contrl/infoController.js"


const router = new Router()

//Obtiene toda la información disponible
router.get('/info',infoController.index)

//crea un nuevo info
router.post('/info',infoController.store)

//obtiene detalles del info por id
router.get('/info/:id',infoController.details)

export default router