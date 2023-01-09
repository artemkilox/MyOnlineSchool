const Router = require('express')
const router = new Router()
const testController = require('../controllers/testsController')

router.post('/', testController.insert)
router.post('/', testController.update)
router.get('/:id', testController.getById)
router.get('/', testController.getAll)

module.exports = router