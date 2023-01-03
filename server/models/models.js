const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Teacher = sequelize.define('teacher', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fio: {type: DataTypes.STRING},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    paymentAccount:{type: DataTypes.INTEGER},
    balance: {type: DataTypes.FLOAT},
    info: {type: DataTypes.TEXT},
    avatar: {type: DataTypes.STRING},
    achievements: {type: DataTypes.STRING}
})

const Student = sequelize.define('student', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fio: {type: DataTypes.STRING},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING},
    age: {type: DataTypes.DATE},
    class: {type: DataTypes.INTEGER},
    balance: {type: DataTypes.FLOAT},
    info: {type: DataTypes.TEXT}
})

const Specialization = sequelize.define('specialization', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    specialName: {type: DataTypes.STRING},
    price: {type: DataTypes.FLOAT}
})

const Payments = sequelize.define('payments', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    amount: {type: DataTypes.FLOAT}
})

const Adding = sequelize.define('adding', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    amount: {type: DataTypes.FLOAT}
})

const UserContact = sequelize.define('user_contact',{
    contactData: {type: DataTypes.STRING}
})

const ContactTypes = sequelize.define('contact_types', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    contactName: {type: DataTypes.STRING}
})

const Courses = sequelize.define('courses',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Timetable = sequelize.define('timetable',{
    classId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
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

const Subjects = sequelize.define('subjects', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
})

////////////////////////////////////////////////

const TestCourse = sequelize.define('test_course',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    theme: {type: DataTypes.INTEGER},
})

const TestingTask = sequelize.define('testing_task',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    level: {type: DataTypes.STRING},
    eduMaterialURL: {type: DataTypes.STRING}
})

const TestingType = sequelize.define('testing_type',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING}
})

const Test = sequelize.define('test',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    attach: {type: DataTypes.STRING},
    text: {type: DataTypes.STRING},
    value: {type: DataTypes.STRING},
    correctAnswer: {type: DataTypes.STRING}
})

const Results = sequelize.define('results',{
    result: {type: DataTypes.STRING},
})
///////////////////////////////////////////////////////

const Manager = sequelize.define('manager',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fio: {type: DataTypes.STRING},
    phone: {type: DataTypes.STRING},
})

const Appeal = sequelize.define('appeal',{
    name: {type: DataTypes.STRING},
})

const AppealStatus = sequelize.define('appeal_status',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING},
})

const Chat = sequelize.define('chat',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
})

const Message = sequelize.define('message',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    value: {type: DataTypes.TEXT},
    dateTime: {type: DataTypes.DATE},
})

// Students

Student.hasMany(UserContact)
UserContact.belongsTo(Student)

Student.hasMany(Adding)
Adding.belongsTo(Student)

Student.hasMany(LearningGoal)
LearningGoal.belongsTo(Student)

Student.hasMany(Courses)
Courses.belongsTo(Student)

Student.hasMany(Message)
Message.belongsTo(Student)

Student.hasMany(Results)
Results.belongsTo(Student)

// LearningGoal

LearningGoalTypes.hasMany(LearningGoal)
LearningGoal.belongsTo(LearningGoalTypes)

Subjects.hasMany(LearningGoal)
LearningGoal.belongsTo(Subjects)

// ContactTypes

ContactTypes.hasMany(UserContact)
UserContact.belongsTo(ContactTypes)

// Timetable

Courses.hasMany(Timetable)
Timetable.belongsTo(Courses)

LessonStatus.hasMany(Timetable)
Timetable.belongsTo(LessonStatus)

// Teachers

Teacher.hasMany(Payments)
Payments.belongsTo(Teacher)

Teacher.hasMany(Message)
Message.belongsTo(Teacher)

Teacher.hasMany(Specialization)
Specialization.belongsTo(Teacher)

Teacher.hasMany(UserContact)
UserContact.belongsTo(Teacher)

Teacher.hasMany(TestingTask)
TestingTask.belongsTo(Teacher)

// Specialization

Specialization.hasMany(Courses)
Courses.belongsTo(Specialization)

// TestCourse

TestCourse.hasMany(TestingTask)
TestingTask.belongsTo(TestCourse)

// TestingTask

TestingTask.hasMany(Results)
Results.belongsTo(TestingTask)

// TestingType

TestingType.hasMany(TestingTask)
TestingTask.belongsTo(TestingType)

// Test

Test.hasMany(TestingTask)
TestingTask.belongsTo(Test)

// Chat

Chat.hasMany(Message)
Message.belongsTo(Chat)

// Manager

Manager.hasMany(Message)
Message.belongsTo(Manager)

Manager.hasMany(Appeal)
Appeal.belongsTo(Manager)

// Appeal

AppealStatus.hasMany(Appeal)
Appeal.belongsTo(AppealStatus)

Appeal.hasOne(Chat)
Chat.belongsTo(Appeal)


module.exports = {
    Teacher,
    Student,
    Specialization,
    Payments,
    Adding,
    UserContact,
    ContactTypes,
    Courses,
    Timetable,
    LessonStatus,
    LearningGoal,
    LearningGoalTypes,
    Subjects,
    TestCourse,
    TestingTask,
    TestingType,
    Test,
    Results,
    Manager,
    Appeal,
    AppealStatus,
    Chat,
    Message
}