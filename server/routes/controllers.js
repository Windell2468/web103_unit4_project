import express from 'express'

import {
    getControllers,
    getControllerById,
    createController,
    updateController,
    deleteController
} from '../controllers/controllers.js'

const router = express.Router()

router.get('/', getControllers)
router.get('/:id', getControllerById)
router.post('/', createController)
router.put('/:id', updateController)
router.delete('/:id', deleteController)

export default router