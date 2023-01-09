const {LessonStatus} = require("../models/models");
const ApiError = require('../error/ApiError')

class LessonStatusController{
    async insert(req, res){
        const {lessonStatusName} = req.body
        const lessonStatus = await LessonStatus.create({lessonStatusName})
        return res.json(lessonStatus)
    }
    async update(req, res){

    }
    async getAll(req, res) {
        const lessonStatuses = await LessonStatus.findAll()
        return res.json(lessonStatuses)
    }
}

module.exports = new LessonStatusController()