const {TestingType} = require("../models/models");

class TestingTypesController{
    async insert(req, res){
        const {name} = req.body
        const testingType = await TestingType.create({name})
        return res.json(testingType)
    }
    async update(req, res){

    }
    async getAll(req, res) {
        const testingType = await TestingType.findAll()
        return res.json(testingType)
    }
}

module.exports = new TestingTypesController()