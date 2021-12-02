const { apiKeyNumber } = process.env

const BASE_URL =  'https://api.spoonacular.com/recipes';
const COMPLEX_URL = BASE_URL + '/complexSearch?addRecipeInformation=true';
const API_KEY = `apiKey=${apiKeyNumber}`;
const diets = ["gluten free", "ketogenic","lacto ovo vegetarian" ,"vegetarian", 
"vegan", "pescatarian", "paleolithic","low FODMAP", "primal", "whole30", "dairy free"];


//396c8a5c1dbd4fe7b2d8f2a895a2c87f
//30ff4b61611aadf3f2f
//40eb347614844e4ebd3af15d526c3d7e
//8ee6312a53e6432093764feed0985f58-
//ac8228271eaa43cf80e7520af913a8b5
//e79d4d730f5242d7bf53e68660bb912d
//478f5ced39f441f4871a7a97d3e83397
//b5ae0e1cad6b484b8ea604d11ff26423

//5fa24e2c9aca4c199be40ff06ed2dfce
//API_KEY=c95eb74d888c65c71228577795302665

//.color1 {color: #e2dd2e;}
//.color2 {color: #f5dc70;}
//.color3 {color: #0036bf;}
//.color4 {color: #0080f9;}
//.color5 {color: #47dcff;}
module.exports = { 
    BASE_URL,
    COMPLEX_URL, 
    API_KEY,
    diets
}