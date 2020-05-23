import { connect } from 'react-redux'
import { fetchMobiles } from '../../redux/actions/actions'
import { withRouter } from 'react-router-dom';
import {HomeComponent} from './home';

const mapStateToProps = (state) => {
 
    let {mobiles, totalMobiles,isLoadingMobiles} = state.mobiles;

    return {
        mobiles,
        totalMobiles,
        isLoading : isLoadingMobiles
        }
}

const mapDispatchToProps = dispatch => ({
    getMobiles: (args) => dispatch(fetchMobiles(args))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(HomeComponent));