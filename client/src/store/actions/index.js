import axios from 'axios';

export const FETCH_RECIPES = 'FETCH_RECIPES';
export const SEARCH_RECIPES = 'SEARCH_RECIPES';
export const CHANGE_PAGE = 'CHANGE_PAGE';
export const CHANGE_INPUT = 'CHANGE_INPUT';
export const ORDER_RECIPES = 'ORDER_RECIPES';
export const FILTER_DIET = 'FILTER_DIET';
export const ORDER_HEALTH_SCORE = 'ORDER_HEALTH_SCORE';
export const RECIPE_DETAIL = 'RECIPE_DETAIL';
export const GET_DIETS = 'GET_DIETS';

export function fetchRecipes() {
    return function(dispatch) {
        axios.get(`http://localhost:3001/api/recipes`)
        .then((recipes) => {
            dispatch({
                type: FETCH_RECIPES,
                payload: recipes.data
            });
        });
    };
};

export function searchRecipes(search) {
    return function(dispatch) {
        axios.get(`http://localhost:3001/api/recipes?name=${search}`)
        .then((recipes) => {
            dispatch({
                type: SEARCH_RECIPES,
                payload: recipes.data
            });
        });
    }
};

export function changePage(newPage) {
    return {
        type: CHANGE_PAGE,
        payload: newPage
    };
};

export function changeInput(page) {
    return {
        type: CHANGE_INPUT,
        payload: page
    };
};

export function orderRecipes(array, order) {
    array = [...array].sort((x, y) => {
        if (order === 'ascending') {
            if (x.name < y.name) return -1;
            if (x.name > y.name) return 1;    
        }
        else if (order === 'descending') {
            if (x.name < y.name) return 1;
            if (x.name > y.name) return -1;    
        }
        return 0
    });
    return {
        type: ORDER_RECIPES,
        payload: array
    };
};

export function filterDiet(array, diet) {
    array = [...array].filter(recipe => recipe.diets.includes(diet));
    return {
        type: FILTER_DIET,
        payload: array
    };
};

export function orderHealthScore(array, order) {
    array = [...array].sort((x, y) => {
        if (order === 'ascending') {
            if (x.healthScore < y.healthScore) return -1;
            if (x.healthScore > y.healthScore) return 1;    
        }
        else if (order === 'descending') {
            if (x.healthScore < y.healthScore) return 1;
            if (x.healthScore > y.healthScore) return -1;    
        }
        return 0
    });
    return {
        type: ORDER_HEALTH_SCORE,
        payload: array
    };
}

//prueba
export function setSelectScore(set) {
    return {
        type: 'prueba',
        payload: set
    };
};

export function recipesDetails(id) {
    return function(dispatch) {
        axios.get(`http://localhost:3001/api/recipes/by?id=${id}`)
        .then(recipe => {
            dispatch({
                type: RECIPE_DETAIL,
                payload: recipe.data
            });
        })
    };
};

export function getDiets() {
    return function(dispatch) {
        axios.get(`http://localhost:3001/api/diets`)
        .then((diets) => {
            dispatch({
                type: GET_DIETS,
                payload: diets.data
            });
        });
    };
};
