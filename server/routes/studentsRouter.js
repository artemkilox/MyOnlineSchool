const Router = require('express')
const router = new Router()
const StudentsController = require('../controllers/studentsController')

router.post('/registration', StudentsController.registration)
router.post('/login', StudentsController.login)
router.get('/auth', StudentsController.check)

module.exports = router