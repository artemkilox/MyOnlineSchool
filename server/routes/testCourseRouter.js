const Router = require('express')
const router = new Router()
const testCourseController = require('../controllers/testCourseController')

router.post('/', testCourseController.insert)
router.post('/', testCourseController.update)
router.get('/', testCourseController.getAll)

module.exports = router