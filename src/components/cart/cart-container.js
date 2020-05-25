import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import {CartComponent} from './cart';
import {removeProductFromCart, fetchCartProducts, updateCartProductQuantity, emptyCartAndProducts} from '../../redux/actions/actions';

const mapStateToProps = (state) => {
 
    let {cart,cartProducts} = state.cart;
    return {
        cart,
        cartProducts
    }
}

const mapDispatchToProps = dispatch => ({
    removeProductFromCart : (productId) => dispatch(removeProductFromCart(productId)),
    getCartProducts : (cart) => dispatch(fetchCartProducts(cart)),
    updateCartProductQuantity : (productId,quantity) => dispatch(updateCartProductQuantity(productId,quantity)),
    emptyCartAndProducts : () => dispatch(emptyCartAndProducts())
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartComponent));