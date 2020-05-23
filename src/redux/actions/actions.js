import * as actionTypes from "./action-types";

export const fetchMobiles = () => {
    return function(dispatch) {
        dispatch({
          type: actionTypes.FETCH_MOBILES.REQUEST,
        });
        
      fetch("http://localhost:3000/products")
        .then(response => response.json())
        .then(data => dispatch({
            type: actionTypes.FETCH_MOBILES.SUCCESS,
            payload: data
          }))
        .catch(error => dispatch({
            type: actionTypes.FETCH_MOBILES.FAILURE,
            payload: error
          }))
}
}