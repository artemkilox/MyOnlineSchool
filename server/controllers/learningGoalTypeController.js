const {LearningGoalTypes} = require("../models/models");
const ApiError = require('../error/ApiError')

class LearningGoalTypeController{
    async insert(req, res){
        const {name, active} = req.body
        const typeName = await LearningGoalTypes.create({name, active})
        return res.json(typeName)
    }
    async update(req, res){

    }
    async getAll(req, res) {
        const typeName = await LearningGoalTypes.findAll()
        return res.json(typeName)
    }
}

module.exports = new LearningGoalTypeController()