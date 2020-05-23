import { combineReducers } from "redux";
import {mobileListingReducer} from './mobiles-listing-reducer';

const rootReducer = combineReducers({
    mobiles:mobileListingReducer  
});

export default rootReducer;