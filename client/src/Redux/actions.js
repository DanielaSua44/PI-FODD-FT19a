import axios from 'axios';

export const GET_RECIPES = "GET_RECIPES";


export const getRecipes= name => dispatch => {
    try {
        if (name) {
            return axios.get(`/recipes?query=${name}`)
                .then(res => dispatch({ type: GET_RECIPES, payload: res.data }))
        }
        return axios.get('/recipes')
            .then(res => dispatch({ type: GET_RECIPES, payload: res.data }))
    } catch (err) {
        console.log(err)
    }
}