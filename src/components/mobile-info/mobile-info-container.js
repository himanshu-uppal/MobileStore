import { connect } from 'react-redux'
import { fetchMobile ,addToCart} from '../../redux/actions/actions'
import { withRouter } from 'react-router-dom';
import {MobileInfoComponent} from './mobile-info';
    
const mapStateToProps = (state) => {
 
    let {mobile,isLoadingMobile} = state.mobile;

    return {
        mobile,
        isLoading : isLoadingMobile
        }
}

const mapDispatchToProps = dispatch => ({
    getMobile: (args) => dispatch(fetchMobile(args)),
    addToCart : (productId) => dispatch(addToCart(productId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MobileInfoComponent));