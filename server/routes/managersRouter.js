const Router = require('express')
const ManagersController = require("../controllers/studentsController");
const router = new Router()

router.post('/registration', ManagersController.registration)
router.post('/login', ManagersController.login)
router.get('/auth', ManagersController.check)

module.exports = router