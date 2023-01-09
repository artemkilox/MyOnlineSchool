const Router = require('express')
const router = new Router()
const addingController = require('../controllers/addingsController')

router.post('/', addingController.insert)
router.post('/', addingController.update)
router.get('/', addingController.getById)
router.get('/', addingController.getAll)

module.exports = router