const {Subjects} = require("../models/models");

class SubjectsController{
    async insert(req, res){
        const {name} = req.body
        const subName = await Subjects.create({name})
        return res.json(subName)
    }
    async update(req, res){

    }
    async getAll(req, res) {
        const subName = await Subjects.findAll()
        return res.json(subName)
    }
}

module.exports = new SubjectsController()