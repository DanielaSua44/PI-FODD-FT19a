import { GET_RECIPES, SET_NAME, DETAILS, FILTER_CREATED, GET_RECIPE_NAME, GET_TYPES, FILTER_SCORE, FILTER_TYPES, UNMOUNT_ALL_RECIPES, GET_RECIPE, RESET_DETAILS } from './actions';


const initialState = {
    recipes: [],
    allRecipes: [],
    diets: [],
    details: [],
    name: ''
}

export default function rootReducer(state = initialState, action) {
    switch (action.type) {
        case GET_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                allRecipes: action.payload
            }
        case DETAILS:
            return {
                ...state,
                details: action.payload
            }
        case GET_RECIPE:
            return {
                ...state,
                recipes: action.payload,
                allrecipes: action.payload
            }
        case GET_TYPES:
            return {
                ...state,
                diets: action.payload
            }
        case SET_NAME:
            return {
                ...state,
                name: action.payload
            }
        case UNMOUNT_ALL_RECIPES:
            return {
                ...state,
                recipes: []
            }
        case RESET_DETAILS:
            return {
                ...state,
                details:[]
            }
        case GET_RECIPE_NAME:
            return {
                ...state,
                recipes: action.payload,
            }
        case FILTER_SCORE:
            const allRecipes3 = state.allRecipes
            const order = action.payload === 'all' ? state.recipes
                : action.payload === 'asc' ?
                    state.allRecipes.sort((a, b) => {
                        if (a.healthScore > b.healhtScore) {
                            return 1;
                        }
                        if (b.healthScore > a.healthScore) {
                            return -1;
                        }
                        return 0;
                    }) :
                    state.allRecipes.sort((a, b) => {
                        if (a.healthScore > b.healthScore) {
                            return -1;
                        }
                        if (b.healthScore > a.healthScore) {
                            return 1;
                        }
                        return 0;
                    })

            return { ...state, recipes: action.payload === 'all' ? allRecipes3 : [...order] }
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
        case FILTER_CREATED:
            console.log(state.allRecipes)
            const createdFiltered = action.payload === 'Created' ? state.allRecipes.filter(rep => rep.createdInDb) : state.allRecipes.filter(rep => !rep.createdInDb)
            console.log(createdFiltered)
            return {
                ...state,
                recipes: action.payload === 'All' ? state.allRecipes : createdFiltered
            }

        default:
            return {
                ...state
            }
    }
}