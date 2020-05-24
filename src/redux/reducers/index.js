import { combineReducers } from "redux";
import {mobileListingReducer} from './mobiles-listing-reducer';
import {mobileInfoReducer} from './mobile-info-reducer';
import {searchReducer} from './search-reducer';
import {cartReducer} from './cart-reducer';

const rootReducer = combineReducers({
    mobiles:mobileListingReducer,
    mobile:mobileInfoReducer,
    search : searchReducer,
    cart:cartReducer  
});

export default rootReducer;