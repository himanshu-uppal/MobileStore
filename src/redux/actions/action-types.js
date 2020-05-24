export const makeActionTypeCreator = (actionType) => ({
    REQUEST: actionType + '_REQUEST',
    SUCCESS: actionType + '_SUCCESS',
    FAILURE: actionType + '_FAILURE'
});

export const FETCH_MOBILES = makeActionTypeCreator('FETCH_MOBILES');

export const FETCH_MOBILE = makeActionTypeCreator('FETCH_MOBILE');

export const UPDATE_SEARCH_CRITERIA = 'UPDATE_SEARCH_CRITERIA';

export const UPDATE_SORT_ORDER = 'UPDATE_SORT_ORDER';


export const ADD_PRODUCT_TO_CART = makeActionTypeCreator('ADD_PRODUCT_TO_CART');

export const REMOVE_PRODUCT_FROM_CART = makeActionTypeCreator('REMOVE_PRODUCT_FROM_CART');

