import { Router } from 'express'
import * as buyerCtrl from '../controllers/buyer.js'

const router = Router()

router.get('/', buyerCtrl.index)

export {
  router
}