import {
    ADD_PRODUCT_TO_CART
} from "../actions/action-types";

const initialState = {
    cart: []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
    
        case ADD_PRODUCT_TO_CART.REQUEST:
            let productId = action.payload;
            let existingCart = state.cart;
           let product = existingCart.find((product) => product.id === productId);
           if(product){
            let quantity = product.quantity;
            product.quantity = quantity+1;
             
           }else{
               existingCart.push({
                   id : productId,
                   quantity :1
               })
           }
        
            return { 
                ...state,
                cart: existingCart
            }
        default:
            return state;
    }
};

