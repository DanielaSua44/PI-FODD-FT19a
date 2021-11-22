const {Type,recipe_type} = require('../db');
const { Op } = require("sequelize");
const axios = require('axios');
const { v4: UUIDV4 } = require('uuid');


const getTypes = async(req,res,next) => {
    try {
        const allTypes = await Type.findAll()
        return res.json(allTypes)
    } catch (error) {
        next(error)
    }
};

module.exports ={
    getTypes
}