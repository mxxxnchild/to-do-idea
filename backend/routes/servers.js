import { Router } from 'express'
import { getAll, create, deleteElem, updateElem } from '../controllers/controller.js'

const router = Router()

router.get('/api/works', getAll)

router.post('/api/works', create)

router.delete('/api/works/:id', deleteElem)

router.put('/api/works/:id', updateElem)

export default router