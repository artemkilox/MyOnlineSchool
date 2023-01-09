const Router = require('express')
const router = new Router()
const teacherController = require('../controllers/teachersController')

router.post('/registration', teacherController.registration)
router.post('/login', teacherController.login)
router.get('/auth', teacherController.check)

module.exports = router