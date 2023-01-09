const Router = require('express')
const router = new Router()
const appealStatusController = require('../controllers/appealStatusesController')

router.post('/', appealStatusController.insert)
router.post('/', appealStatusController.update)
router.get('/', appealStatusController.getAll)

module.exports = router