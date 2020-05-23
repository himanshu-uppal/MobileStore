import {
    FETCH_MOBILES
} from "../actions/action-types";

const initialState = {
    mobiles: [],
    totalMobiles:0,  
    isLoadingMobiles:false,
    error: {}
};

export const mobileListingReducer = (state = initialState, action) => {
    switch (action.type) {
        //fetching mobiles 
        case FETCH_MOBILES.REQUEST:
            return Object.assign({}, ...[state], { isLoadingMobiles: true });      
        case FETCH_MOBILES.SUCCESS:
            return Object.assign({}, ...[state], { mobiles: action.payload },{totalMobiles:action.payload.count},{isLoadingMobiles:false});
        case FETCH_MOBILES.FAILURE:
            return Object.assign({}, ...[state], { error: action.payload },{isLoadingMobiles:false});
        default:
            return state;
    }
};

