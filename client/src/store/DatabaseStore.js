import {makeAutoObservable} from "mobx";

export default class DatabaseStore{
    constructor() {
        this._tables = [
            { name: "_appealStatuses", title: "Статусы обращения"},
            { name: "_managers", title: "Менеджеры"},
            { name: "_appeals", title: "Обращения"},
            { name: "_students", title: "Студенты"},
            { name: "_teachers", title: "Преподаватели"},
            { name: "_specializations", title: "Специализации"},
            { name: "_courses", title: "Курсы"},
            { name: "_lessonStatuses", title: "Статусы занятия"},
            { name: "_timetable", title: "Расписание"},
            { name: "_addings", title: "Пополнения"},
            { name: "_payments", title: "Выплаты"},
            { name: "_contactTypes", title: "Типы контактов"},
            { name: "_userContacts", title: "Контакты пользователей"},
            { name: "_learningGoalTypes", title: "Типы цели обучения"},
            { name: "_subjects", title: "Предметы"},
            { name: "_learningGoals", title: "Цели обучения"},
            { name: "_testCourses", title: "Курсы тестов"},
            { name: "_testingTypes", title: "Типы тестов"},
            { name: "_testingTasks", title: "Тесты"},
            { name: "_tests", title: "Задания"},
            { name: "_results", title: "Результаты"},
        ]
        this._appealStatuses = [
            {id: 1, name: "Новое обращение", active: 1, sort: 500},
            {id: 2, name: "Обращение принято", active: 1, sort: 500},
            {id: 3, name: "Обращение завершено", active: 1, sort: 500},
            {id: 4, name: "Обращение отклонено", active: 1, sort: 500}
        ]
        this._managers = [
            {id: 1, fio: "Менеджер 1", phone: "89898989898", sort: 500},
            {id: 2, fio: "Менеджер 2", phone: "89898989898", sort: 500},
            {id: 3, fio: "Менеджер 3", phone: "89898989898", sort: 500},
            {id: 4, fio: "Менеджер 4", phone: "89898989898", sort: 500}
        ]
        this._appeals = [
            {id: 1, name: "Ученик не добавляется", active: 1, sort: 500, managerId: 1, appealStatusId: 1},
            {id: 2, name: "Не могу провести занятие", active: 1, sort: 500, managerId: 2, appealStatusId: 2},
            {id: 3, name: "Не могу создать тест", active: 1, sort: 500, managerId: 3, appealStatusId: 3},
            {id: 4, name: "Расписание не работает", active: 1, sort: 500, managerId: 4, appealStatusId: 4},
            {id: 5, name: "Нет звука в видеозвонке", active: 1, sort: 500, managerId: 1, appealStatusId: 1}
        ]
        this._chats = [
            {id: 1, sort: 500},
            {id: 2, sort: 500},
            {id: 3, sort: 500},
            {id: 4, sort: 500},
            {id: 5, sort: 500},
            {id: 6, sort: 500},
            {id: 7, sort: 500},
            {id: 8, sort: 500},
            {id: 9, sort: 500}
        ]
        this._students = [
            {id: 1, fio: "Ученик 1", login: "1@mail.ru", password: "123", age: "12", class: "6", balance: 1500, info: "Ученик", avatar: "https://st3.depositphotos.com/14846838/18824/v/1600/depositphotos_188248886-stock-illustration-graduate-flat-vector-icon.jpg", active: 1, sort: 500},
            {id: 2, fio: "Ученик 2", login: "12@mail.ru", password: "123", age: "11", class: "7", balance: 1000, info: "Ученик", avatar: "https://st3.depositphotos.com/14846838/18824/v/1600/depositphotos_188248886-stock-illustration-graduate-flat-vector-icon.jpg", active: 1, sort: 500},
            {id: 3, fio: "Ученик 3", login: "13@mail.ru", password: "123", age: "14", class: "5", balance: 500, info: "Ученик", avatar: "https://st3.depositphotos.com/14846838/18824/v/1600/depositphotos_188248886-stock-illustration-graduate-flat-vector-icon.jpg", active: 1, sort: 500},
            {id: 4, fio: "Ученик 4", login: "14@mail.ru", password: "123", age: "15", class: "4", balance: 2000, info: "Ученик", avatar: "https://st3.depositphotos.com/14846838/18824/v/1600/depositphotos_188248886-stock-illustration-graduate-flat-vector-icon.jpg", active: 1, sort: 500},
            {id: 5, fio: "Ученик 5", login: "15@mail.ru", password: "123", age: "13", class: "8", balance: 1500, info: "Ученик", avatar: "https://st3.depositphotos.com/14846838/18824/v/1600/depositphotos_188248886-stock-illustration-graduate-flat-vector-icon.jpg", active: 1, sort: 500},
            {id: 6, fio: "Ученик 6", login: "16@mail.ru", password: "123", age: "10", class: "9", balance: 150, info: "Ученик", avatar: "https://st3.depositphotos.com/14846838/18824/v/1600/depositphotos_188248886-stock-illustration-graduate-flat-vector-icon.jpg", active: 1, sort: 500},
            {id: 7, fio: "Ученик 7", login: "17@mail.ru", password: "123", age: "16", class: "10", balance: 100, info: "Ученик", avatar: "https://st3.depositphotos.com/14846838/18824/v/1600/depositphotos_188248886-stock-illustration-graduate-flat-vector-icon.jpg", active: 1, sort: 500},
            {id: 8, fio: "Ученик 8", login: "18@mail.ru", password: "123", age: "17", class: "11", balance: 1800, info: "Ученик", avatar: "https://st3.depositphotos.com/14846838/18824/v/1600/depositphotos_188248886-stock-illustration-graduate-flat-vector-icon.jpg", active: 1, sort: 500},
            {id: 9, fio: "Ученик 9", login: "19@mail.ru", password: "123", age: "15", class: "8", balance: 1500, info: "Ученик", avatar: "https://st3.depositphotos.com/14846838/18824/v/1600/depositphotos_188248886-stock-illustration-graduate-flat-vector-icon.jpg", active: 1, sort: 500},
        ]
        this._teachers = [
            {id: 1, fio: "Преподаватель 1", login: "1@mail.ru", password: "123", paymentsAccount: 1, balance: 5000, info: "Преподаватель", avatar: "https://st3.depositphotos.com/14846838/18824/v/1600/depositphotos_188248886-stock-illustration-graduate-flat-vector-icon.jpg", achievements: "", active: 1, sort: 500},
            {id: 2, fio: "Преподаватель 2", login: "2@mail.ru", password: "123", paymentsAccount: 2, balance: 500, info: "Преподаватель", avatar: "https://st3.depositphotos.com/14846838/18824/v/1600/depositphotos_188248886-stock-illustration-graduate-flat-vector-icon.jpg", achievements: "", active: 1, sort: 500},
            {id: 3, fio: "Преподаватель 3", login: "3@mail.ru", password: "123", paymentsAccount: 3, balance: 6000, info: "Преподаватель", avatar: "https://st3.depositphotos.com/14846838/18824/v/1600/depositphotos_188248886-stock-illustration-graduate-flat-vector-icon.jpg", achievements: "", active: 1, sort: 500},
            {id: 4, fio: "Преподаватель 4", login: "4@mail.ru", password: "123", paymentsAccount: 4, balance: 7000, info: "Преподаватель", avatar: "https://st3.depositphotos.com/14846838/18824/v/1600/depositphotos_188248886-stock-illustration-graduate-flat-vector-icon.jpg", achievements: "", active: 1, sort: 500},
            {id: 5, fio: "Преподаватель 5", login: "5@mail.ru", password: "123", paymentsAccount: 5, balance: 8000, info: "Преподаватель", avatar: "https://st3.depositphotos.com/14846838/18824/v/1600/depositphotos_188248886-stock-illustration-graduate-flat-vector-icon.jpg", achievements: "", active: 1, sort: 500},
            {id: 6, fio: "Преподаватель 6", login: "6@mail.ru", password: "123", paymentsAccount: 6, balance: 5000, info: "Преподаватель", avatar: "https://st3.depositphotos.com/14846838/18824/v/1600/depositphotos_188248886-stock-illustration-graduate-flat-vector-icon.jpg", achievements: "", active: 1, sort: 500},
            {id: 7, fio: "Преподаватель 7", login: "7@mail.ru", password: "123", paymentsAccount: 7, balance: 4000, info: "Преподаватель", avatar: "https://st3.depositphotos.com/14846838/18824/v/1600/depositphotos_188248886-stock-illustration-graduate-flat-vector-icon.jpg", achievements: "", active: 1, sort: 500},
            {id: 8, fio: "Преподаватель 8", login: "8@mail.ru", password: "123", paymentsAccount: 8, balance: 3000, info: "Преподаватель", avatar: "https://st3.depositphotos.com/14846838/18824/v/1600/depositphotos_188248886-stock-illustration-graduate-flat-vector-icon.jpg", achievements: "", active: 1, sort: 500},
            {id: 9, fio: "Преподаватель 9", login: "9@mail.ru", password: "123", paymentsAccount: 9, balance: 500, info: "Преподаватель", avatar: "https://st3.depositphotos.com/14846838/18824/v/1600/depositphotos_188248886-stock-illustration-graduate-flat-vector-icon.jpg", achievements: "", active: 1, sort: 500},
            {id: 10, fio: "Преподаватель 10", login: "10@mail.ru", password: "123", paymentsAccount: 10, balance: 1000, info: "Преподаватель", avatar: "https://st3.depositphotos.com/14846838/18824/v/1600/depositphotos_188248886-stock-illustration-graduate-flat-vector-icon.jpg", achievements: "", active: 1, sort: 500},
        ]
        this._specializations = [
            {id: 1, specialName: "Математика 1-9кл", price: 500, active: 1, sort: 500, teacherId: 1},
            {id: 2, specialName: "Физика 10-11кл", price: 500, active: 1, sort: 500, teacherId: 2},
            {id: 3, specialName: "Математика 1-9кл", price: 500, active: 1, sort: 500, teacherId: 3},
            {id: 4, specialName: "Английский язык 1-9кл", price: 500, active: 1, sort: 500, teacherId: 4},
            {id: 5, specialName: "Русский язык 10-11кл", price: 500, active: 1, sort: 500, teacherId: 5},
            {id: 6, specialName: "Биология 1-9кл", price: 500, active: 1, sort: 500, teacherId: 6},
            {id: 7, specialName: "Математика 1-9кл", price: 500, active: 1, sort: 500, teacherId: 7},
            {id: 8, specialName: "Английский язык 10-11кл", price: 500, active: 1, sort: 500, teacherId: 8},
            {id: 9, specialName: "Физика 1-9кл", price: 500, active: 1, sort: 500, teacherId: 9},
            {id: 10, specialName: "Химия 10-11кл", price: 500, active: 1, sort: 500, teacherId: 10},
            {id: 11, specialName: "Физика 1-9кл", price: 500, active: 1, sort: 500, teacherId: 1},
            {id: 12, specialName: "Информатика 10-11кл", price: 500, active: 1, sort: 500, teacherId: 1}
        ]
        this._courses = [
            {id: 1, sort: 500, studentId: 1, specializationId: 1},
            {id: 2, sort: 500, studentId: 2, specializationId: 2},
            {id: 3, sort: 500, studentId: 3, specializationId: 3},
            {id: 4, sort: 500, studentId: 4, specializationId: 4},
            {id: 5, sort: 500, studentId: 5, specializationId: 5},
            {id: 6, sort: 500, studentId: 6, specializationId: 6},
            {id: 7, sort: 500, studentId: 7, specializationId: 7},
            {id: 8, sort: 500, studentId: 8, specializationId: 8},
            {id: 9, sort: 500, studentId: 9, specializationId: 9},
            {id: 10, sort: 500, studentId: 9, specializationId: 10},
        ]
        this._lessonStatuses = [
            {id: 1, lessonStatusName: "Не оплачено", active: 1, sort: 500},
            {id: 2, lessonStatusName: "Оплачено", active: 1, sort: 500},
            {id: 3, lessonStatusName: "Проведено", active: 1, sort: 500},
            {id: 4, lessonStatusName: "Отменено", active: 1, sort: 500},
        ]
        this._timetable = [
            {id: 1, dateTime: "10.01.2023", sort: 500, courseId: 1, lessonStatusId: 1},
            {id: 2, dateTime: "09.01.2023", sort: 500, courseId: 2, lessonStatusId: 1},
            {id: 3, dateTime: "10.01.2023", sort: 500, courseId: 3, lessonStatusId: 1},
            {id: 4, dateTime: "11.01.2023", sort: 500, courseId: 4, lessonStatusId: 1},
            {id: 5, dateTime: "12.01.2023", sort: 500, courseId: 5, lessonStatusId: 3},
            {id: 6, dateTime: "12.01.2023", sort: 500, courseId: 6, lessonStatusId: 2},
            {id: 7, dateTime: "10.01.2023", sort: 500, courseId: 7, lessonStatusId: 2},
            {id: 8, dateTime: "13.01.2023", sort: 500, courseId: 8, lessonStatusId: 2},
            {id: 9, dateTime: "13.01.2023", sort: 500, courseId: 9, lessonStatusId: 3},
            {id: 10, dateTime: "9.01.2023", sort: 500, courseId: 10, lessonStatusId: 2},
            {id: 11, dateTime: "10.01.2023", sort: 500, courseId: 1, lessonStatusId: 2},
            {id: 12, dateTime: "11.01.2023", sort: 500, courseId: 2, lessonStatusId: 1}
        ]
        this._messages = [
            {id: 1, value: "Сообщение 1", dateTime: "09.01.2023-15:30", sort: 500, studentId: 1, teacherId: null, chatId: 1, managerId: null},
            {id: 2, value: "Сообщение 2", dateTime: "09.01.2023-15:31", sort: 500, studentId: 2, teacherId: null, chatId: 2, managerId: null},
            {id: 3, value: "Сообщение 3", dateTime: "09.01.2023-15:32", sort: 500, studentId: 3, teacherId: null, chatId: 3, managerId: null},
            {id: 4, value: "Сообщение 4", dateTime: "09.01.2023-15:33", sort: 500, studentId: 4, teacherId: null, chatId: 4, managerId: null},
            {id: 5, value: "Сообщение 5", dateTime: "09.01.2023-15:34", sort: 500, studentId: 5, teacherId: null, chatId: 5, managerId: null},
            {id: 6, value: "Сообщение 6", dateTime: "09.01.2023-15:35", sort: 500, studentId: null, teacherId: 1, chatId: 1, managerId: null},
            {id: 7, value: "Сообщение 7", dateTime: "09.01.2023-15:36", sort: 500, studentId: null, teacherId: 2, chatId: 2, managerId: null},
            {id: 8, value: "Сообщение 8", dateTime: "09.01.2023-15:37", sort: 500, studentId: null, teacherId: 3, chatId: 3, managerId: null},
            {id: 9, value: "Сообщение 9", dateTime: "09.01.2023-15:38", sort: 500, studentId: null, teacherId: 4, chatId: 4, managerId: null},
            {id: 10, value: "Сообщение 10", dateTime: "09.01.2023-15:39", sort: 500, studentId: null, teacherId: 5, chatId: 5, managerId: null},
            {id: 11, value: "Сообщение 11", dateTime: "09.01.2023-15:40", sort: 500, studentId: null, teacherId: null, chatId: 6, managerId: 1},
            {id: 12, value: "Сообщение 12", dateTime: "09.01.2023-15:41", sort: 500, studentId: null, teacherId: null, chatId: 7, managerId: 2},
            {id: 13, value: "Сообщение 13", dateTime: "09.01.2023-15:42", sort: 500, studentId: null, teacherId: null, chatId: 8, managerId: 3},
            {id: 14, value: "Сообщение 14", dateTime: "09.01.2023-15:43", sort: 500, studentId: null, teacherId: null, chatId: 9, managerId: 4},
            {id: 15, value: "Сообщение 15", dateTime: "09.01.2023-15:44", sort: 500, studentId: null, teacherId: null, chatId: 10, managerId: 5},
            {id: 16, value: "Сообщение 16", dateTime: "09.01.2023-15:45", sort: 500, studentId: null, teacherId: null, chatId: 11, managerId: 6},
        ]
        this._addings = [
            {id: 1, amount: 500, sort: 500, studentId: 1},
            {id: 2, amount: 500, sort: 500, studentId: 2},
            {id: 3, amount: 500, sort: 500, studentId: 3},
            {id: 4, amount: 500, sort: 500, studentId: 4},
            {id: 5, amount: 500, sort: 500, studentId: 5},
            {id: 6, amount: 500, sort: 500, studentId: 6},
            {id: 7, amount: 500, sort: 500, studentId: 7},
            {id: 8, amount: 500, sort: 500, studentId: 8},
            {id: 9, amount: 500, sort: 500, studentId: 9},
            {id: 10, amount: 500, sort: 500, studentId: 1},
            {id: 11, amount: 500, sort: 500, studentId: 2},
            {id: 12, amount: 500, sort: 500, studentId: 3},
            {id: 13, amount: 500, sort: 500, studentId: 4},
            {id: 14, amount: 500, sort: 500, studentId: 5},
            {id: 15, amount: 500, sort: 500, studentId: 6},
        ]
        this._payments = [
            {id: 1, amount: 500, sort: 500, teacherId: 1},
            {id: 2, amount: 500, sort: 500, teacherId: 2},
            {id: 3, amount: 500, sort: 500, teacherId: 3},
            {id: 4, amount: 500, sort: 500, teacherId: 4},
            {id: 5, amount: 500, sort: 500, teacherId: 5},
            {id: 6, amount: 500, sort: 500, teacherId: 6},
            {id: 7, amount: 500, sort: 500, teacherId: 7},
            {id: 8, amount: 500, sort: 500, teacherId: 8},
            {id: 9, amount: 500, sort: 500, teacherId: 9},
            {id: 10, amount: 500, sort: 500, teacherId: 1},
            {id: 11, amount: 500, sort: 500, teacherId: 2},
            {id: 12, amount: 500, sort: 500, teacherId: 3},
            {id: 13, amount: 500, sort: 500, teacherId: 4},
            {id: 14, amount: 500, sort: 500, teacherId: 5},
            {id: 15, amount: 500, sort: 500, teacherId: 6},
        ]
        this._contactTypes = [
            {id: 1, contactName: "Телефон", active: 1, sort: 500},
            {id: 2, contactName: "E-mail", active: 1, sort: 500},
            {id: 3, contactName: "ZOOM", active: 1, sort: 500},
        ]
        this._userContacts = [
            {id: 1, contactData: "89898989", sort: 500, studentId: 1, teacherId: null, contactTypeId: 1},
            {id: 2, contactData: "89898989", sort: 500, studentId: 2, teacherId: null, contactTypeId: 1},
            {id: 3, contactData: "89898989", sort: 500, studentId: 3, teacherId: null, contactTypeId: 1},
            {id: 4, contactData: "1@mail.ru", sort: 500, studentId: 1, teacherId: null, contactTypeId: 2},
            {id: 5, contactData: "2@mail.ru", sort: 500, studentId: 2, teacherId: null, contactTypeId: 2},
            {id: 6, contactData: "3@mail.ru", sort: 500, studentId: 3, teacherId: null, contactTypeId: 2},
            {id: 7, contactData: "12@mail.ru", sort: 500, studentId: null, teacherId: 1, contactTypeId: 2},
            {id: 8, contactData: "13@mail.ru", sort: 500, studentId: null, teacherId: 2, contactTypeId: 2},
            {id: 9, contactData: "14@mail.ru", sort: 500, studentId: null, teacherId: 3, contactTypeId: 2},
            {id: 10, contactData: "15@mail.ru", sort: 500, studentId: null, teacherId: 4, contactTypeId: 2},
            {id: 11, contactData: "16@mail.ru", sort: 500, studentId: null, teacherId: 5, contactTypeId: 2},
        ]
        this._learningGoalTypes = [
            {id: 1, name: "Школьная программа", active: 1, sort: 500},
            {id: 2, name: "Подготовка к экзамену", active: 1, sort: 500},
        ]
        this._subjects = [
            {id: 1, name: "Математика", active: 1, sort: 500},
            {id: 2, name: "Физика", active: 1, sort: 500},
            {id: 3, name: "Химия", active: 1, sort: 500},
            {id: 4, name: "Биология", active: 1, sort: 500},
            {id: 5, name: "Английский язык", active: 1, sort: 500},
            {id: 6, name: "Русский язык", active: 1, sort: 500},
            {id: 7, name: "Информатика", active: 1, sort: 500},
        ]
        this._learningGoals = [
            {id: 1, active: 1, sort: 500, studentId: 1, learningGoalTypeId: 1, subjectId: 1},
            {id: 2, active: 1, sort: 500, studentId: 2, learningGoalTypeId: 2, subjectId: 2},
            {id: 3, active: 1, sort: 500, studentId: 3, learningGoalTypeId: 3, subjectId: 3},
            {id: 4, active: 1, sort: 500, studentId: 4, learningGoalTypeId: 4, subjectId: 4},
            {id: 5, active: 1, sort: 500, studentId: 5, learningGoalTypeId: 5, subjectId: 5},
        ]
        this._testCourses = [
            {id: 1, theme: "Простые уравнения", active: 1, sort: 500, subjectId: 1},
            {id: 2, theme: "Квадратные уравнения", active: 1, sort: 500, subjectId: 1},
            {id: 3, theme: "Равенство треугольников", active: 1, sort: 500, subjectId: 1},
            {id: 4, theme: "Подобие треугольников", active: 1, sort: 500, subjectId: 1},
            {id: 5, theme: "Графики функций", active: 1, sort: 500, subjectId: 1},
        ]
        this._testingTypes = [
            {id: 1, name: "С вариантами ответа", active: 1, sort: 500},
            {id: 2, name: "Вписать ответ", active: 1, sort: 500},
            {id: 3, name: "Сопоставить варианты", active: 1, sort: 500},
        ]
        this._testingTasks = [
            {id: 1, level: "Начальный", eduMaterialURL: "", active: 1, sort: 500, teacherId: 1, testCourseId: 1, testingTypeId: 1, testId: 1},
            {id: 1, level: "Начальный", eduMaterialURL: "", active: 1, sort: 500, teacherId: 1, testCourseId: 1, testingTypeId: 1, testId: 2},
            {id: 1, level: "Начальный", eduMaterialURL: "", active: 1, sort: 500, teacherId: 1, testCourseId: 1, testingTypeId: 1, testId: 3},
            {id: 1, level: "Начальный", eduMaterialURL: "", active: 1, sort: 500, teacherId: 1, testCourseId: 1, testingTypeId: 1, testId: 4},
            {id: 1, level: "Начальный", eduMaterialURL: "", active: 1, sort: 500, teacherId: 1, testCourseId: 1, testingTypeId: 1, testId: 5},
        ]
        this._tests = [
            {id: 1, attach: "", text: "2 + 2 * 2 = ", value: "4;6;2;8", correctAnswer: "1", sort: 500},
            {id: 2, attach: "", text: "3 + 3 * 3 = ", value: "27;9;18;6", correctAnswer: "0", sort: 500},
            {id: 3, attach: "", text: "2 + 2 * 2 = ", value: "4;6;2;8", correctAnswer: "1", sort: 500},
            {id: 4, attach: "", text: "2 + 2 * 2 = ", value: "27;9;18;6", correctAnswer: "0", sort: 500},
            {id: 5, attach: "", text: "2 + 2 * 2 = ", value: "4;6;2;8", correctAnswer: "1", sort: 500},
        ]
        this._results = [
            {id: 1, result: "90%", sort: 500, studentId: 1, testingTaskId: 1},
            {id: 2, result: "85%", sort: 500, studentId: 2, testingTaskId: 1},
            {id: 3, result: "80%", sort: 500, studentId: 3, testingTaskId: 1},
            {id: 4, result: "70%", sort: 500, studentId: 4, testingTaskId: 1},
            {id: 5, result: "100%", sort: 500, studentId: 5, testingTaskId: 1},
        ]
        makeAutoObservable(this)
    }

    setAppealStatuses (appealStatuses){
        this._appealStatuses = appealStatuses
    }
    setManagers (managers){
        this._managers = managers
    }
    setAppeals (appeals){
        this._appeals = appeals
    }
    setChats (chats){
        this._chats = chats
    }
    setStudents (students){
        this._students = students
    }
    setTeachers (teachers){
        this._teachers = teachers
    }
    setSpecializations (specializations){
        this._specializations = specializations
    }
    setCourses (courses){
        this._courses = courses
    }
    setLessonStatuses (lessonStatuses){
        this._lessonStatuses = lessonStatuses
    }
    setTimetable (timetable){
        this._timetable = timetable
    }
    setMessages (messages){
        this._messages = messages
    }
    setAddings (addings){
        this._addings = addings
    }
    setPayments (payments){
        this._payments = payments
    }
    setContactTypes (contactTypes){
        this._contactTypes = contactTypes
    }
    setUserContacts (userContacts){
        this._userContacts = userContacts
    }
    setLearningGoalTypes (learningGoalTypes){
        this._learningGoalTypes = learningGoalTypes
    }
    setSubjects (subjects){
        this._subjects = subjects
    }
    setLearningGoals (learningGoals){
        this._learningGoals = learningGoals
    }
    setTestCourses (testCourses){
        this._testCourses = testCourses
    }
    setTestingTypes (testingTypes){
        this._testingTypes = testingTypes
    }
    setTestingTasks (testingTasks){
        this._testingTasks = testingTasks
    }
    setTests (tests){
        this._tests = tests
    }
    setResults (results){
        this._results = results
    }

    get appealStatuses (){
        return this._appealStatuses
    }
    get managers (){
        return this._managers
    }
    get appeals (){
        return this._appeals
    }
    get chats (){
        return this._chats
    }
    get students (){
        return this._students
    }
    get teachers (){
        return this._teachers
    }
    get specializations (){
        return this._specializations
    }
    get courses (){
        return this._courses
    }
    get lessonStatuses (){
        return this._lessonStatuses
    }
    get timetable (){
        return this._timetable
    }
    get messages (){
        return this._messages
    }
    get addings (){
        return this._addings
    }
    get payments (){
        return this._payments
    }
    get contactTypes (){
        return this._contactTypes
    }
    get userContacts (){
        return this._userContacts
    }
    get learningGoalTypes (){
        return this._learningGoalTypes
    }
    get subjects (){
        return this._subjects
    }
    get learningGoals (){
        return this._learningGoals
    }
    get testCourses (){
        return this._testCourses
    }
    get testingTypes (){
        return this._testingTypes
    }
    get testingTasks (){
        return this._testingTasks
    }
    get tests (){
        return this._tests
    }
    get results (){
        return this._results
    }

}