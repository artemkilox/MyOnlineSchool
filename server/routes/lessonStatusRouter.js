const Router = require('express')
const router = new Router()
const lessonStatusController = require('../controllers/lessonStatusController')

router.post('/', lessonStatusController.insert)
router.post('/', lessonStatusController.update)
router.get('/', lessonStatusController.getAll)

module.exports = router