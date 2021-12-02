const {Type,recipe_type} = require('../db');
const { Op } = require("sequelize");
const axios = require('axios');
const { v4: UUIDV4 } = require('uuid');
const {diets} = require('../constants');


const getTypes = async(req,res,next) => {
    diets.forEach((el,index )=> {
        el && Type.findOrCreate({
            where:{
                name:el,
                id:index
             }
        })
    })
    const diet = await Type.findAll();
    res.send(diet);
};

module.exports ={
    getTypes
}