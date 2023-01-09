const ApiError = require('../error/ApiError')
const {Manager} = require("../models/models")
const uuid = require('uuid')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const generateJwt = (id, login) => {
    return jwt.sign(
        {id, login},
        process.env.SECRET_KEY,
        {expiresIn: '168h'}
    )
}

class ManagersController{
    async registration(req, res, next){
        try{
            const {login, password} = req.body

            if(!login || !password){
                return next(ApiError.badRequest('Некорректный логин или пароль'))
            }

            const candidate = await Manager.findOne({where: {login}})
            if(candidate){
                return next(ApiError.badRequest('Пользователь с таким логином уже существует'))
            }
            const hashPassword = await bcrypt.hash(password, 5)
            const manager = await Manager.create({login, hashPassword})
            const token = generateJwt(manager.id, manager.login)

            return res.json(token)
        } catch (e){
            next(ApiError.badRequest(e.message))
        }

    }
    async login(req, res, next){
        const {login, password} = req.body
        const manag = await Manager.findOne({where: {login}})
        if(!manag){
            return next(ApiError.internal('Пользователь не найден'))
        }
        let comparePassword = bcrypt.compareSync(password, manag.password)
        if(!comparePassword){
            return next(ApiError.internal('Неверный пароль'))
        }
        const token = generateJwt(manag.id, manag.login)
        return res.json({token})
    }
    async check(req, res, next){
        const token = generateJwt(req.manager.id, req.manager.login)
        return res.json({token})
    }
    async getAll(req, res, next){
        // let {age, studClass, limit, page} = req.query
        // limit = limit || 10
        // page = page || 1
        // let offset = page * limit - limit
        // let students
        // if(!age && !studClass){
        //     students = await Manager.findAndCountAll({limit, offset})
        // }
        // if(!age && studClass){
        //     students = await Manager.findAndCountAll({where: {studClass}, limit, offset})
        // }
        // if(age && !studClass){
        //     students = await Manager.findAndCountAll({where: {age}, limit, offset})
        // }
        // if(age && studClass){
        //     students = await Manager.findAndCountAll({where: {studClass, age}, limit, offset})
        // }
        // // const students = await Student.findAll()
        // return res.json(students)
    }
    async getOne(req, res, next){
        // const {id} = req.params
        // const manager = await Manager.findOne(
        //     {where: {id}}
        // )
        // return res.json(manager)
    }
}

module.exports = new ManagersController()