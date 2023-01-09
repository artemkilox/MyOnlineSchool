const Router = require('express')
const router = new Router()
const learningGoalTypeController = require('../controllers/learningGoalTypeController')

router.post('/', learningGoalTypeController.insert)
router.post('/', learningGoalTypeController.update)
router.get('/', learningGoalTypeController.getAll)

module.exports = router