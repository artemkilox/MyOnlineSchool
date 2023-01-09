const Router = require('express')
const router = new Router()
const courseController = require('../controllers/coursesController')

router.post('/', courseController.insert)
router.post('/', courseController.update)
router.get('/', courseController.getByTeachId)
router.get('/', courseController.getByStudId)
router.get('/', courseController.getAll)

module.exports = router