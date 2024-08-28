import express from 'express'
import userController from '../controllers/userController.js'
const router = express.Router()

router.get('/',userController.register_page)
router.post('/',userController.register_user)
router.get('/login',userController.login_page)
router.post('/login',userController.login_user)
router.get('/home',userController.home_page)

export default router