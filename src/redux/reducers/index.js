import { combineReducers } from "redux";
import {mobileListingReducer} from './mobiles-listing-reducer';
import {mobileInfoReducer} from './mobile-info-reducer';

const rootReducer = combineReducers({
    mobiles:mobileListingReducer,
    mobile:mobileInfoReducer  
});

export default rootReducer;