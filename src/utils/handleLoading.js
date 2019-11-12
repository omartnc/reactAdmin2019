import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as loadingActions from "../redux/actions/loadingActions";


function handleLoading(isLoading) {
  this.props.actions.setLoading(isLoading);
}

function mapStateToProps(state) {
    return {
      loadingReducer:state.loadingReducer
    };
  }
  
  
  function mapDispatchToProps(dispatch) {
    return {
      actions: {
        setLoading: bindActionCreators(loadingActions.setLoading, dispatch),
      }
    };
  }
  
  export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(handleLoading);