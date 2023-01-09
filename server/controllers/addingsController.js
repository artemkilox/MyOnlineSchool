const {Adding} = require('../models/models')
const ApiError = require('../error/ApiError')

class AddingsController{
    async insert(req, res){

    }
    async update(req, res){

    }
    async getById(req, res){

    }
    async getAll(req, res) {
        const adding = await Adding.findAll()
        return res.json(adding)
    }
}

module.exports = new AddingsController()