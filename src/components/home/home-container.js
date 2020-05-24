import { connect } from 'react-redux'
import { fetchMobiles,updateSearchCriteria, updateSortOrder, addToCart } from '../../redux/actions/actions'
import { withRouter } from 'react-router-dom';
import {HomeComponent} from './home';

const mapStateToProps = (state) => {
 
    let {mobiles, totalMobiles,isLoadingMobiles} = state.mobiles;

    let {searchCriteria, orderCode} = state.search;

    return {
        mobiles,
        totalMobiles,
        isLoading : isLoadingMobiles,
        searchCriteria,
        orderCode
        }
}

const mapDispatchToProps = dispatch => ({
    getMobiles: (args) => dispatch(fetchMobiles(args)),
    updateSearchCriteria : (searchText) => dispatch(updateSearchCriteria(searchText)),
    updateSortOrder : (orderCode) => dispatch(updateSortOrder(orderCode)),
    addToCart : (productId) => dispatch(addToCart(productId))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeComponent));