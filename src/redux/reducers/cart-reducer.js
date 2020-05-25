import {
    ADD_PRODUCT_TO_CART, REMOVE_PRODUCT_FROM_CART, FETCH_CART_PRODUCTS, UPDATE_CART_PRODUCT_QUANTITY, EMPTY_CART_PRODUCTS
} from "../actions/action-types";

const initialState = {
    cart: [],
    cartProducts : []
};

export const cartReducer = (state = initialState, action) => {
    switch (action.type) {
    
        case ADD_PRODUCT_TO_CART.REQUEST:
            {
            let productId = action.payload;
            let existingCart = state.cart;
           let product = existingCart.find((product) => product.id === productId);
           if(product){
            let quantity = product.quantity;
            product.quantity =parseInt(quantity) + 1;
             
           }else{
               existingCart.push({
                   id : productId,
                   quantity :1
               })
           }

           let existingCartProducts = state.cartProducts;
           let cartProduct = existingCartProducts.find((cartProduct) => cartProduct.product.id === productId);
           if(cartProduct){
            let quantity = cartProduct.quantity;
            cartProduct.quantity =parseInt(quantity) + 1;
             
           }
        
            return { 
                ...state,
                cart: existingCart,
                cartProducts:existingCartProducts
            }
        }
            case REMOVE_PRODUCT_FROM_CART.REQUEST:
                {
            let productId = action.payload;
            let existingCart = state.cart;
           let updatedCart = existingCart.filter((product) => product.id !== productId);
           let existingCartProducts = state.cartProducts;
           let updatedCartProducts = existingCartProducts.filter((product) => product.product.id !== productId);
           if(!updatedCart){
            updatedCart = [];                       
           }

           if(!updatedCartProducts){
            updatedCartProducts  = [];
           }
        
            return { 
                ...state,
                cart: updatedCart,
                cartProducts :updatedCartProducts
            }
        }
            case FETCH_CART_PRODUCTS.REQUEST:
            return Object.assign({}, ...[state], {});
            case FETCH_CART_PRODUCTS.SUCCESS:
                console.log(action.payload);
                let cartProductsArray = [];
                for(let product of action.payload){
                    let cartProduct = {};
                    cartProduct.product = product;
                    cartProduct.quantity = state.cart.find((cartProductInfo) => cartProductInfo.id ===product.id ).quantity;
                    cartProductsArray.push(cartProduct);
                }
                
                return Object.assign({}, ...[state], {cartProducts : cartProductsArray});
            case FETCH_CART_PRODUCTS.FAILURE:
                    return Object.assign({}, ...[state], {});
            case UPDATE_CART_PRODUCT_QUANTITY : 
            
                let productId = action.payload.productId;
                let quantity = action.payload.quantity;
                let existingCart = state.cart;
                let product = existingCart.find((product) => product.id === productId);
           if(product && quantity && quantity > 0){            
            product.quantity = quantity;             
           }
               let existingCartProducts = state.cartProducts;
               let cartProduct = existingCartProducts.find((cartProduct) => cartProduct.id === productId);
               if(cartProduct && quantity && quantity > 0){                
                cartProduct.quantity = quantity;                
               }    
                         
                return { 
                    ...state,
                    cart: existingCart,
                    cartProducts :existingCartProducts
                }

                case EMPTY_CART_PRODUCTS:
                    {
               
    
              
                return { 
                    ...state,
                    cart: [],
                    cartProducts :[]
                }
            }
        default:
            return state;
    }
};

