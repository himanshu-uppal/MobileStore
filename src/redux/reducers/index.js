import { combineReducers } from "redux";
import {mobileListingReducer} from './mobiles-listing-reducer';
import {mobileInfoReducer} from './mobile-info-reducer';
import {searchReducer} from './search-reducer'

const rootReducer = combineReducers({
    mobiles:mobileListingReducer,
    mobile:mobileInfoReducer,
    search : searchReducer  
});

export default rootReducer;