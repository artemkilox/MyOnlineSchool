const {ContactTypes} = require("../models/models");
const ApiError = require('../error/ApiError')

class ContactTypesController{
    async insert(req, res){
        const {contactName} = req.body
        const contactNames = await ContactTypes.create({contactName})
        return res.json(contactNames)
    }
    async update(req, res){

    }
    async getAll(req, res) {
        const contactNames = await ContactTypes.findAll()
        return res.json(contactNames)
    }
}

module.exports = new ContactTypesController()