const Router = require('express')
const router = new Router()
const timetableController = require('../controllers/timetableController')

router.post('/', timetableController.insert)
router.post('/', timetableController.update)
router.get('/', timetableController.getByStatusId)
router.get('/', timetableController.getByDate)
router.get('/', timetableController.getByCourseId)
router.get('/', timetableController.getAll)

module.exports = router