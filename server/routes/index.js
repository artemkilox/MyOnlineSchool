const Router = require('express')
const router = new Router()
const courseRouterRouter = require('./courseRouter')
const eduMaterialsRouter = require('./eduMaterialsRouter')
const learningGoalsRouter = require('./learningGoalsRouter')
const learningGoalTypesRouter = require('./learningGoalTypesRouter')
const lessonStatusRouter = require('./lessonStatusRouter')
const paymentsRouter = require('./paymentsRouter')
const specializationRouter = require('./specializationRouter')
const studentContactRouter = require('./studentContactRouter')
const studentsAndTeachersRouter = require('./studentsAndTeachersRouter')
const studentsRouter = require('./studentsRouter')
const teacherAccountRouter = require('./teacherAccountsRouter')
const teacherContactRouter = require('./teacherContactRouter')
const teacherRouter = require('./teachersRouter')
const testingTaskRouter = require('./testingTaskRouter')
const testingTypesRouter = require('./testingTypesRouter')
const testRouter = require('./testRouter')
const timetableRouter = require('./timetableRouter')

router.use('/course', courseRouterRouter)
router.use('/eduMaterials', eduMaterialsRouter)
router.use('/learningGoals', learningGoalsRouter)
router.use('/learningGoalTypes', learningGoalTypesRouter)
router.use('/lessonStatus', lessonStatusRouter)
router.use('/payments', paymentsRouter)
router.use('/specialization', specializationRouter)
router.use('/studentContact', studentContactRouter)
router.use('/studentsAndTeachers', studentsAndTeachersRouter)
router.use('/students', studentsRouter)
router.use('/teacherAccount', teacherAccountRouter)
router.use('/teacherContact', teacherContactRouter)
router.use('/teacher', teacherRouter)
router.use('/testingTask', testingTaskRouter)
router.use('/testingTypes', testingTypesRouter)
router.use('/test', testRouter)
router.use('/timeTable', timetableRouter)


module.exports = router