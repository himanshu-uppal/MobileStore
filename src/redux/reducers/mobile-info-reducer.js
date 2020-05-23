import {
    FETCH_MOBILE
} from "../actions/action-types";

const initialState = {
    mobile: {},    
    isLoadingMobile:false,
    error: {}
};

export const mobileInfoReducer = (state = initialState, action) => {
    switch (action.type) {
        //fetching mobiles 
        case FETCH_MOBILE.REQUEST:
            return Object.assign({}, ...[state], { isLoadingMobile: true });      
        case FETCH_MOBILE.SUCCESS:
            return Object.assign({}, ...[state], { mobile: action.payload },{isLoadingMobile:false});
        case FETCH_MOBILE.FAILURE:
            return Object.assign({}, ...[state], { error: action.payload },{isLoadingMobile:false});
        default:
            return state;
    }
};

