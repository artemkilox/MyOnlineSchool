const ApiError = require('../error/ApiError')
const {Student} = require("../models/models")
const uuid = require('uuid')
const path = require('path')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJwt = (id, login) => {
    return jwt.sign(
        {id, login},
        process.env.SECRET_KEY,
        {expiresIn: '168h'}
    )
}

class StudentsController{
    async registration(req, res, next){
        try{
            const {fio, login, password, age, studClass, balance, info, active, sorting} = req.body
            const {avatar} = req.files
            let fileName = uuid.v4() + ".jpg"
            avatar.mv(path.resolve(__dirname, '..', 'static', fileName))

            if(!login || !password){
                return next(ApiError.badRequest('Некорректный логин или пароль'))
            }

            const candidate = await Student.findOne({where: {login}})
            if(candidate){
                return next(ApiError.badRequest('Пользователь с таким логином уже существует'))
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const student = await Student.create({fio, login, password, age, studClass, balance, info, avatar: fileName, active, sorting})
            const token = generateJwt(student.id, student.login)

            return res.json(token)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }

    }
    async login(req, res, next){
        const {login, password} = req.body
        const stud = await Student.findOne({where: {login}})
        if(!stud){
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, stud.password)
        if(!comparePassword){
            return next(ApiError.internal('Неверный пароль'))
        }
        const token = generateJwt(stud.id, stud.login)
        return res.json({token})
    }
    async check(req, res, next){
        const token = generateJwt(req.student.id, req.student.login)
        return res.json({token})
    }
    async getAll(req, res, next){
        let {age, studClass, limit, page} = req.query
        limit = limit || 10
        page = page || 1
        let offset = page * limit - limit
        let students
        if(!age && !studClass){
            students = await Student.findAndCountAll({limit, offset})
        }
        if(!age && studClass){
            students = await Student.findAndCountAll({where: {studClass}, limit, offset})
        }
        if(age && !studClass){
            students = await Student.findAndCountAll({where: {age}, limit, offset})
        }
        if(age && studClass){
            students = await Student.findAndCountAll({where: {studClass, age}, limit, offset})
        }
        // const students = await Student.findAll()
        return res.json(students)
    }
    async getOne(req, res, next){
        const {id} = req.params
        const student = await Student.findOne(
            {where: {id}}
        )
        return res.json(student)
    }
}

module.exports = new StudentsController()