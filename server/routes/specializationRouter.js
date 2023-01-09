const Router = require('express')
const router = new Router()
const specializationController = require('../controllers/specializationController')

router.post('/', specializationController.insert)
router.post('/', specializationController.update)
router.get('/', specializationController.getById)
router.get('/', specializationController.getAll)

module.exports = router