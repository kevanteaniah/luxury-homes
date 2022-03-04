import { Router } from 'express'
import * as homesCtrl from '../controllers/homes.js'

const router = Router()

router.get('/', homesCtrl.index )

export {
  router
}