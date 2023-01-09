const Router = require('express')
const router = new Router()
const DatabaseController = require('../controllers/addingsController')

router.post('/', DatabaseController.insert)
router.post('/', DatabaseController.update)
router.get('/:name', DatabaseController.getById)
router.get('/', DatabaseController.getAll)

module.exports = router