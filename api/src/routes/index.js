const { Router } = require('express');
const recipes = require('./recipes');
const types = require('./types')
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

router.use('/recipes',recipes);
router.use('/types',types)
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
