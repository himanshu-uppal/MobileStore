import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom';
import {CartComponent} from './cart';

const mapStateToProps = (state) => {
 
    let {cart} = state.cart;
    return {
        cart
    }
}

const mapDispatchToProps = dispatch => ({
   
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartComponent));