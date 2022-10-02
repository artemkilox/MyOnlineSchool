const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Teacher = sequelize.define('teacher', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fio: {type: DataTypes.STRING},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    education: {type: DataTypes.STRING},
    about: {type: DataTypes.TEXT},
    capital: {type: DataTypes.INTEGER},
    role: {type: DataTypes.STRING, defaultValue: 'TEACHER'}
})

const Student = sequelize.define('student', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fio: {type: DataTypes.STRING},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    capital: {type: DataTypes.INTEGER},
})

const Specialization = sequelize.define('specialization', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    specialName: {type: DataTypes.INTEGER},
    price: {type: DataTypes.INTEGER}
})

const Payments = sequelize.define('payments', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    amount: {type: DataTypes.INTEGER}
})

const TeachersAccount = sequelize.define('teacher_account', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    personalAccount: {type: DataTypes.INTEGER}
})

const TeacherContact = sequelize.define('teacher_contact',{
    contactData: {type: DataTypes.STRING}
})

const StudentContact = sequelize.define('student_contact',{
    contactData: {type: DataTypes.STRING}
})

const ContactTypes = sequelize.define('contact_types', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    contactName: {type: DataTypes.STRING}
})

const StudentsAndTeachers = sequelize.define('students_and_teachers',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Timetable = sequelize.define('timetable',{
    dateTime: {type: DataTypes.DATE}
})

const LessonStatus = sequelize.define('lesson_status',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    lessonStatusName: {type: DataTypes.STRING}
})

const LearningGoal = sequelize.define('learning_goal',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const LearningGoalTypes = sequelize.define('learning_goal_types',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
})

/////////////////////////////////////


const EduMaterials = sequelize.define('edu_materials',{
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    eduMaterialURL: {type: DataTypes.STRING}
})

const Course = sequelize.define('course',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    theme: {type: DataTypes.INTEGER},
})

const TestingTask = sequelize.define('testing_task',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    level: {type: DataTypes.STRING}
})

const TestingType = sequelize.define('testing_type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

const Test = sequelize.define('test',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    text: {type: DataTypes.STRING},
    value: {type: DataTypes.STRING},
    correctAnswer: {type: DataTypes.STRING}
})

// Students

Student.hasMany(StudentContact)
StudentContact.belongsTo(Student)

Student.hasMany(LearningGoal)
LearningGoal.belongsTo(Student)

Student.hasMany(StudentsAndTeachers)
StudentsAndTeachers.belongsTo(Student)

// LearningGoal

LearningGoal.hasMany(LearningGoalTypes)
LearningGoalTypes.belongsTo(LearningGoal)

// ContactTypes

ContactTypes.hasMany(StudentContact)
StudentContact.belongsTo(ContactTypes)

ContactTypes.hasMany(TeacherContact)
TeacherContact.belongsTo(ContactTypes)

// StudentsAndTeachers

StudentsAndTeachers.hasMany(Timetable)
Timetable.belongsTo(StudentsAndTeachers)

// Timetable

Timetable.hasMany(LessonStatus)
LessonStatus.belongsTo(Timetable)

// Teachers

Teacher.hasOne(TeachersAccount)
TeachersAccount.belongsTo(Teacher)

Teacher.hasMany(Payments)
Payments.belongsTo(Teacher)

Teacher.hasMany(Specialization)
Specialization.belongsTo(Teacher)

// Specialization

Specialization.hasMany(StudentsAndTeachers)
StudentsAndTeachers.belongsTo(Specialization)

// Course

Course.hasMany(TestingTask)
TestingTask.belongsTo(Course)

// TestingTask

TestingTask.hasOne(Test)
Test.belongsTo(TestingTask)

// TestingType

TestingType.hasMany(TestingTask)
TestingTask.belongsTo(TestingType)


module.exports = {
    Teacher,
    Student,
    Specialization,
    Payments,
    TeachersAccount,
    TeacherContact,
    StudentContact,
    ContactTypes,
    StudentsAndTeachers,
    Timetable,
    LessonStatus,
    LearningGoal,
    LearningGoalTypes,
    EduMaterials,
    Course,
    TestingTask,
    TestingType,
    Test
}