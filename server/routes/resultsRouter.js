const Router = require('express')
const router = new Router()
const resultsController = require('../controllers/resultsController')

router.post('/', resultsController.insert)
router.post('/', resultsController.update)
router.get('/', resultsController.getById)
router.get('/', resultsController.getAll)

module.exports = router