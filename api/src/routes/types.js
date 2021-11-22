const router= require ('express').Router();
const {getTypes} = require('../Controler/types')

router.get('/',getTypes);

module.exports= router;