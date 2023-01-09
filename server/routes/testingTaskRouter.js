const Router = require('express')
const router = new Router()
const testingTaskController = require('../controllers/testingTaskController')

router.post('/', testingTaskController.insert)
router.post('/', testingTaskController.update)
router.get('/', testingTaskController.getById)
router.get('/', testingTaskController.getByCreatorId)
router.get('/', testingTaskController.getByCourseId)
router.get('/', testingTaskController.getAll)

module.exports = router