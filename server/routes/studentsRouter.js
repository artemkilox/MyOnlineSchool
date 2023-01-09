const Router = require('express')
const router = new Router()
const StudentsController = require('../controllers/studentsController')
const authMiddleware = require('../middleware/authMiddleware')

router.post('/registration', StudentsController.registration)
router.post('/login', StudentsController.login)
router.get('/auth', authMiddleware, StudentsController.check)
router.get('/list', StudentsController.getAll)
router.get('/:id', StudentsController.getOne)

module.exports = router