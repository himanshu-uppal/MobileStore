import {
    UPDATE_SEARCH_CRITERIA, UPDATE_SORT_ORDER
} from "../actions/action-types";

const initialState = {
    searchCriteria: '',
    orderCode : null   
   
};

export const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_SEARCH_CRITERIA:
            return Object.assign({}, ...[state], { searchCriteria: action.payload });      
            case UPDATE_SORT_ORDER:
                return Object.assign({}, ...[state], { orderCode: action.payload });      
        default:
            return state;
    }
};

