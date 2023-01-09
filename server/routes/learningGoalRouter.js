const Router = require('express')
const router = new Router()
const learningGoalController = require('../controllers/learningGoalController')

router.post('/', learningGoalController.insert)
router.post('/', learningGoalController.update)
router.get('/', learningGoalController.getAll)
router.get('/:id', learningGoalController.getById)

module.exports = router