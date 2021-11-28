import { ADD_RECIPE, GET_RECIPES, GET_TYPES, ORDER_RECIPE, FILTER_SCORE, FILTER_TYPES, UNMOUNT_ALL_RECIPES } from './actions';


const initialState = {
    recipes: [],
    allRecipes: [],
    diets: [],
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            }
        case GET_TYPES:
            return {
                ...state,
                diets: action.payload
            }
        case UNMOUNT_ALL_RECIPES:
            return {
                ...state,
                recipes: []
            }
        case ADD_RECIPE:
            return {
                ...state,
                recipes: [
                    ...state.recipes,
                    action.payload,
                ],
            }
        case ORDER_RECIPE:
            const allRecipeA = state.allRecipes
            const orderA = action.payload === 'all'?state.recipes
                : action.payload === 'asc' ?
                    state.allRecipes.sort( (a, b) => {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return 1;
                        }
                        if (b.name.toLowerCase() > a.name.toLowerCase()) {
                            return -1;
                        }
                        return 0;
                    }) :
                    state.allRecipes.sort( (a, b) => {
                        if (a.name.toLowerCase() > b.name.toLowerCase()) {
                            return -1;
                        }
                        if (b.name.toLowerCase() > a.name.toLowerCase()) {
                            return 1;
                        }
                        return 0;
                    })
            return { ...state, recipes: action.payload === 'all'?allRecipeA:[...orderA] }
        case FILTER_SCORE:
            const allRecipes3 = state.allRecipes
            const order = action.payload === 'all' ? state.recipes
                : action.payload === 'asc' ?
                    state.allRecipes.sort( (a, b) => {
                        if (a.healthScore > b.healhtScore) {
                            return 1;
                        }
                        if (b.healthScore > a.healthScore) {
                            return -1;
                        }
                        return 0;
                    }) :
                    state.allRecipes.sort( (a, b) => {
                        if (a.healthScore > b.healthScore) {
                            return -1;
                        }
                        if (b.healthScore > a.healthScore) {
                            return 1;
                        }
                        return 0;
                    })
                
            return { ...state, recipes:action.payload === 'all'? allRecipes3: [...order] }
        case FILTER_TYPES:
            const allRecipe1 = state.allRecipes
            const filter = action.payload === 'all' ? allRecipe1
                : allRecipe1.filter(el => el.types.includes(action.payload)
                )
            if (filter.length > 0) {
                return {
                    ...state,
                    recipes: filter,
                }
            } else {
                return {
                    ...state,
                    recipes: allRecipe1
                }
            }

        default:
            return {
                ...state
            }
    }
}