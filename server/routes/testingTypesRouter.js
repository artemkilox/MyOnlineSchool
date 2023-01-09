const Router = require('express')
const router = new Router()
const testingTypeController = require('../controllers/testingTypesController')

router.post('/', testingTypeController.insert)
router.post('/', testingTypeController.update)
router.get('/', testingTypeController.getAll)

module.exports = router