const {AppealStatus} = require("../models/models");
const ApiError = require('../error/ApiError')

class AppealStatusesController{
    async insert(req, res){
        const {name} = req.body
        const appealStatus = await AppealStatus.create({name})
        return res.json(appealStatus)
    }
    async update(req, res){

    }
    async getAll(req, res) {
        const appealStatuses = await AppealStatus.findAll()
        return res.json(appealStatuses)
    }
}

module.exports = new AppealStatusesController()