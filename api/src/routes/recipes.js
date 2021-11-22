const router= require ('express').Router();
const {getRecipes,addRecipe,getRecipeById} = require('../Controler/recipes')

router.get('/',getRecipes);
router.post('/',addRecipe);
router.get('/:id',getRecipeById);

module.exports= router;