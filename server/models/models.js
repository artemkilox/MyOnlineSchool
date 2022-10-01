const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Teacher = sequelize.define('teacher', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fio: {type: DataTypes.STRING},
    personalAcc: {type: DataTypes.INTEGER},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING}
})

const Student = sequelize.define('student', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    fio: {type: DataTypes.STRING},
    login: {type: DataTypes.STRING, unique: true},
    password: {type: DataTypes.STRING}
})

const Specialists = sequelize.define('specialists', {
    lessonPrice: {type: DataTypes.INTEGER}
})

const Specialization = sequelize.define('specialization', {
    specId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    specName: {type: DataTypes.STRING}
})

const TeacherContact = sequelize.define('teacher_contact',{
    contactData: {type: DataTypes.STRING}
})

const StudentContact = sequelize.define('student_contact',{
    contactData: {type: DataTypes.STRING}
})

const ContactTypes = sequelize.define('contact_types', {
    contactId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    contactName: {type: DataTypes.STRING}
})

const StudentTrainingGoal = sequelize.define('student_training_goal',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const LearningGoal = sequelize.define('learning_goal',{
    learningGoalId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    learningGoalName: {type: DataTypes.STRING}
})

const StudentsAndTeachers = sequelize.define('students_wallet',{
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true}
})

const Timetable = sequelize.define('timetable',{
    lessonId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true, allowNull: false},
    dateTime: {type: DataTypes.DATE}
})

const LessonType = sequelize.define('lesson_type',{
    lessonTypeId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    lessonTypeName: {type: DataTypes.STRING}
})

const TeachersWallet = sequelize.define('teachers_wallet',{
    lessonId: {type: DataTypes.INTEGER, primaryKey: true},
    dateTime: {type: DataTypes.DATE},
    bid: {type: DataTypes.INTEGER}
})

const LessonStatus = sequelize.define('lesson_status',{
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    lessonStatusName: {type: DataTypes.STRING}
})

const EduMaterials = sequelize.define('edu_materials',{
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    eduMaterialURL: {type: DataTypes.STRING}
})

const Exercise = sequelize.define('exercise',{
    exerciseId: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    level: {type: DataTypes.INTEGER},
    theme: {type: DataTypes.INTEGER},
    exerciseURL: {type: DataTypes.STRING}
})

const LessonThemes = sequelize.define('lesson_themes',{
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    themeName: {type: DataTypes.STRING}
})

const LessonLevels = sequelize.define('lesson_levels',{
    Id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    levelName: {type: DataTypes.STRING}
})

// Teachers

Teacher.belongsToMany(Specialization, {through: Specialists})
Specialization.belongsToMany(Teacher, {through: Specialists})

Teacher.belongsToMany(ContactTypes, {through: TeacherContact})
ContactTypes.belongsToMany(Teacher, {through: TeacherContact})

Teacher.belongsToMany(Specialization, {through: StudentsAndTeachers})
Specialization.belongsToMany(Teacher, {through: StudentsAndTeachers})

Teacher.belongsToMany(Student, {through: StudentsAndTeachers})
Student.belongsToMany(Teacher, {through: StudentsAndTeachers})

Teacher.hasMany(Timetable)
Timetable.belongsTo(Teacher)

// Students

Student.belongsToMany(Teacher, {through: StudentsAndTeachers})
Teacher.belongsToMany(Student, {through: StudentsAndTeachers})

Student.belongsToMany(Specialization, {through: StudentsAndTeachers})
Specialization.belongsToMany(Student, {through: StudentsAndTeachers})

Student.belongsToMany(ContactTypes, {through: StudentContact})
ContactTypes.belongsToMany(Student, {through: StudentContact})

Student.belongsToMany(LearningGoal, {through: StudentTrainingGoal})
LearningGoal.belongsToMany(Student, {through: StudentTrainingGoal})

Student.hasMany(Timetable)
Timetable.belongsTo(Student)

// Timetable

TeachersWallet.belongsToMany(Teacher, {through: Timetable})
Teacher.belongsToMany(TeachersWallet, {through: Timetable})

Timetable.hasMany(LessonType)
LessonType.belongsTo(Timetable)

Timetable.hasMany(LessonStatus)
LessonStatus.belongsTo(Timetable)

Timetable.hasMany(EduMaterials)
EduMaterials.belongsTo(Timetable)

Timetable.hasMany(Exercise)
Exercise.belongsTo(Timetable)

// Exercise

Exercise.hasMany(LessonThemes)
LessonThemes.belongsTo(Exercise)

Exercise.hasMany(LessonLevels)
LessonLevels.belongsTo(Exercise)


module.exports = {
    Teacher,
    Student,
    Specialists,
    Specialization,
    TeacherContact,
    StudentContact,
    ContactTypes,
    StudentTrainingGoal,
    LearningGoal,
    StudentsAndTeachers,
    Timetable,
    LessonType,
    TeachersWallet,
    LessonStatus,
    EduMaterials,
    Exercise,
    LessonThemes,
    LessonLevels
}