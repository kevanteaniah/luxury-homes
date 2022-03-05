import { Router } from 'express'
import * as homesCtrl from '../controllers/homes.js'
import { isLoggedIn } from '../middleware/middleware.js'

const router = Router()

router.get('/', homesCtrl.index)

router.get('/:id', isLoggedIn, homesCtrl.show)

router.get('/:id/edit', isLoggedIn, homesCtrl.edit)

router.post('/', isLoggedIn, homesCtrl.create)




export {
  router
}