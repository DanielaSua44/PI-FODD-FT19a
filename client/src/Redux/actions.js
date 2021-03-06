import axios from 'axios';

export const GET_RECIPES = "GET_RECIPES";
export const GET_RECIPE = "GET_RECIPE";
export const GET_RECIPE_NAME = "GET_RECIPE_NAME";
export const GET_TYPES = "GET_TYPES";
export const FILTER_SCORE = "FILTER_SCORE";
export const FILTER_TYPES = "FILTER_TYPES";
export const UNMOUNT_ALL_RECIPES = "UNMOUNT_ALL_RECIPES";
export const FILTER_CREATED = "FILTER_CREATED";
export const DETAILS ="DETAILS";
export const SET_NAME = "SET_NAME";
export const RESET_DETAILS ="RESET_DETAILS";
export const SET_ORDER = "SET_ORDER"



export const getRecipes =  name => dispatch => {
    try {
        if (name) {
            return axios.get(`/recipes?name=${name}`)
                .then(res => dispatch({ type: GET_RECIPE_NAME, payload: res.data}))
                .catch((error) => (alert("No se pudo encontrar la receta") , console.log(error)  ))
        } else {
            return axios.get('/recipes')
                .then(res => dispatch({ type: GET_RECIPES, payload: res.data }))
        }
    } catch (err) {
        console.log(err)
    }
};

export const setName = (payload)=>{
    return{
        type: SET_NAME,
        payload
    }
}

export const getRecipe = (order ) => {
    return (dispatch) => {
        axios.get(`/recipes?order=${order ? order : ""}`)
            .then(response => {
                return dispatch({
                    type: GET_RECIPE,
                    payload: response.data
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }
};

export function getDetail(id) {
    return async function (dispatch) {
        try {
            const res = await axios.get(`/recipes/${id}`)
            return dispatch({
                type:DETAILS,
                payload: res.data
            });
        } catch (err) {
            console.log(err)
        };
    };
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


export const unmountAllRecipes = () => ({ type: UNMOUNT_ALL_RECIPES });

export const resetDetails = () => ({ type: RESET_DETAILS });


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
};

export function filterCreated(payload) {
    return {
        type: FILTER_CREATED,
        payload
    }
};

export const setOrder = (order)=>{
    return{
        type: SET_ORDER,
        payload: order
    }
}