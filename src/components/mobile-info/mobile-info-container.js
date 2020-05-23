import { connect } from 'react-redux'
import { fetchMobile } from '../../redux/actions/actions'
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
    getMobile: (args) => dispatch(fetchMobile(args))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MobileInfoComponent));