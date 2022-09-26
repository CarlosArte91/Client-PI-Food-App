import {
    CHANGE_INPUT,
    CHANGE_PAGE,
    FETCH_RECIPES,
    FILTER_DIET,
    GET_DIETS,
    ORDER_HEALTH_SCORE,
    ORDER_RECIPES,
    RECIPE_DETAIL,
    SEARCH_RECIPES
} from "../actions";

let initialState = {
    recipes: [],
    filteredRecipes: [],
    recipeDetail: {},
    page: 1,
    newPage: 1,
    diets: [],
    prueba: 'name="algo"'
}

function reducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_RECIPES:
            return {
                ...state,
                recipes: action.payload,
                filteredRecipes: action.payload
            }
        case SEARCH_RECIPES:
            return {
                ...state,
                filteredRecipes: action.payload
            }
        case CHANGE_PAGE:
            return {
                ...state,
                page: action.payload
            }
        case CHANGE_INPUT:
            return {
                ...state,
                newPage: action.payload
            }
        case ORDER_RECIPES:
            return {
                ...state,
                filteredRecipes: action.payload
            }
        case FILTER_DIET:
            return {
                ...state,
                filteredRecipes: action.payload
            }
        case ORDER_HEALTH_SCORE:
            return {
                ...state,
                filteredRecipes: action.payload
            }
        case 'prueba':
            return {
                ...state,
                prueba: action.payload
            }
        case RECIPE_DETAIL:
            return {
                ...state,
                recipeDetail: action.payload
            }
        case GET_DIETS:
            return {
                ...state,
                diets: action.payload
            }
        default:
            return state
    }
};

export default reducer;
