const { Recipe, Type, recipe_type } = require('../db');
const { Op } = require("sequelize");
const axios = require('axios').default;
const { v4: uuidv4 } = require('uuid');
const { COMPLEX_URL } = require('../constants');
const validator = require('validator');
const { API_KEY } = process.env



const getRecipes = async (req, res, next) => {
    try {
        let {
            name,
            order
        } = req.query
        let dbRecipes
        let apiRecipes
        let allRecipes = []
        if (name && name !== "") {
            let apiInfo = (await axios.get(`${COMPLEX_URL}&query=${name}&number=100&apiKey=${API_KEY}`))
        
            apiRecipes = apiInfo.data.results.map((recipe) => {
                return {
                    id: recipe.id,
                    name: recipe.title,
                    img: recipe.image,
                    score: recipe.spoonacularScore,
                    healthScore: recipe.healthScore,
                    summary: recipe.summary,
                    steps: recipe.analyzedInstructions.map(el => el.steps.map(e => e.step)),
                    types: recipe.diets.map(el => el)
                }
            })

            dbRecipes = await Recipe.findAll({
                include: Type,
                where: {
                    name: {
                        [Op.like]: `%${name}%`
                    }
                }
            });
            allRecipes = apiRecipes.concat(dbRecipes)
            if(allRecipes.length > 0){
                res.send(allRecipes).status(200)
            }else{
                return res.status(404).json("no se encontro ninguna receta con el nombre: ")
            }
        } else {
            let apiInfo = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${API_KEY}&addRecipeInformation=true&number=100`)
            let dbInfo = Recipe.findAll({ include: Type })
            return Promise.all([
                apiInfo,
                dbInfo
            ]).then(resultados => {
                let apiRecipes = resultados[0].data.results
                let dbRecipes = resultados[1]

                //aca los normalizo
                apiRecipes = apiRecipes.map((recipe) => {
                    return {
                        id: recipe.id,
                        name: recipe.title,
                        img: recipe.image,
                        score: recipe.spoonacularScore,
                        healthScore: recipe.healthScore,
                        summary: recipe.summary,
                        steps: recipe.analyzedInstructions.map(el => el.steps.map(e => e.step)),
                        types: recipe.diets.map(el => el)
                    }
                })
                dbRecipes = dbRecipes.map((recipe) => {
                    return {
                        id: recipe.id,
                        name: recipe.name,
                        img: recipe.img,
                        score: recipe.score,
                        healthScore: recipe.healthScore,
                        summary: recipe.summary,
                        createdInDb:recipe.createdInDb,
                        steps: recipe.steps,
                        types: recipe.types.map(e => e.name)

                    }
                })
                //aca los uno
                allRecipes = dbRecipes.concat(apiRecipes)
                if (order === "asc" || !order || order === "") {
                    allRecipes = allRecipes.sort((a, b) => {
                        return a.name.toLowerCase().localeCompare(b.name.toLowerCase())
                    })
                } else if(order === "des" || !order ){
                    allRecipes = allRecipes.sort((a, b) => {
                        return b.name.toLowerCase().localeCompare(a.name.toLowerCase())
                    })
                }
                res.send(allRecipes).status(200)

            })
        }
    } catch (error) {
        next(error)
    }

}

const addRecipe = async (req, res, next) => {
    try {

        let {
            name,
            score,
            healthScore,
            summary,
            steps,
            img,
            createdInDb,
            types
        } = req.body
        console.log(name, score, healthScore, summary, steps, img, types)

        const newRecipe = await Recipe.create({
            id: uuidv4(),
            name,
            score,
            healthScore,
            summary,
            steps: [steps],
            img,
            createdInDb
        })


        await newRecipe.addType(types)


        return res.json(newRecipe)
    } catch (error) {
        next(error)
    }
}

const getRecipeById = async (req, res, next) => {
    try {
        const { id } = req.params
        let recipes
        if (validator.isUUID(id)) {
            recipes = await Recipe.findOne({
                where:{
                    id:id,
                }
            })
        } else {
            let apiInfo = await axios.get(`https://api.spoonacular.com/recipes/${id}/information?apiKey=${API_KEY}`)

            recipes = {
                id: apiInfo.data.id,
                name: apiInfo.data.title,
                score: apiInfo.data.spoonacularScore,
                healthScore: apiInfo.data.healthScore,
                img: apiInfo.data.image,
                summary: apiInfo.data.summary.replace(/<[^>]*>?/g, ""),
                steps: apiInfo.data.analyzedInstructions.map(el => el.steps.map(e => e.step)),
                types: apiInfo.data.diets.map(e => e)
            }

        }
        console.log(recipes)
        return res.json(recipes)
    } catch (error) {
        next(error)
    }
}

module.exports = {
    getRecipes,
    addRecipe,
    getRecipeById
};