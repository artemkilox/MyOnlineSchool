const Router = require('express')
const router = new Router()
const paymentsController = require('../controllers/paymentsController')

router.post('/', paymentsController.insert)
router.post('/', paymentsController.update)
router.get('/', paymentsController.getById)
router.get('/', paymentsController.getAll)

module.exports = router