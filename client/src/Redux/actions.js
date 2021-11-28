import axios from 'axios';

export const GET_RECIPES = "GET_RECIPES";
export const GET_TYPES = "GET_TYPES";
export const ADD_RECIPE = "ADD_RECIPE";
export const ORDER_RECIPE = "ORDER_RECIPE";
export const FILTER_SCORE = "FILTER_SCORE";
export const FILTER_TYPES = "FILTER_TYPES";
export const UNMOUNT_ALL_RECIPES = "UNMOUNT_ALL_RECIPES"


export const getRecipes = name => dispatch => {
    try {
        if (name) {
            return axios.get(`/recipes?query=${name}`)
                .then(res => dispatch({ type: GET_RECIPES, payload: res.data }))
        } else {
            return axios.get('/recipes')
                .then(res => dispatch({ type: GET_RECIPES, payload: res.data }))
        }
    } catch (err) {
        console.log(err)
    }
};

export const getTypes = () => {
    return (dispatch) => {
        axios.get(`/types`)
            .then(diets => {
                return dispatch({
                    type: GET_TYPES,
                    payload: diets.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
};

export function postRecipe(recipe) {
    try {
        return async function (dispatch) {
            const response = await axios.post('/recipes', recipe
            );
            console.log(response)
            return dispatch({ type: ADD_RECIPE, payload: response.data });
        }
    }catch(err) {
        console.log(err)
    }
};

export function orderRecipe(value) {
    console.log(value)
    return {
        type: ORDER_RECIPE,
        payload:value
    }
};

export const unmountAllRecipes = () => ({ type: UNMOUNT_ALL_RECIPES });


export function filterScore(value) {
    return {
        type:FILTER_SCORE,
        payload:value
    }
};

export function filterTypes(payload) {
    return {
        type:FILTER_TYPES,
        payload
    }
}