const Router = require('express')
const router = new Router()
const userContactController = require('../controllers/userContactController')

router.post('/', userContactController.insert)
router.post('/', userContactController.update)
router.get('/', userContactController.getById)
router.get('/', userContactController.getAll)

module.exports = router