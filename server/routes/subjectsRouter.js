const Router = require('express')
const router = new Router()
const subjectsController = require('../controllers/subjectsController')

router.post('/', subjectsController.insert)
router.post('/', subjectsController.update)
router.get('/', subjectsController.getAll)

module.exports = router