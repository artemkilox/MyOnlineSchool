const Router = require('express')
const router = new Router()
const contactTypesController = require('../controllers/contactTypesController')

router.post('/', contactTypesController.insert)
router.post('/', contactTypesController.update)
router.get('/', contactTypesController.getAll)

module.exports = router