const Router = require('express')
const router = new Router()
const appealsController = require('../controllers/appealsController')

router.post('/', appealsController.insert)
router.post('/', appealsController.update)
router.get('/', appealsController.getAll)
router.get('/', appealsController.getById)

module.exports = router