import * as actionTypes from "./action-types";

export const fetchMobiles = (args) => {
    return function(dispatch) {
        dispatch({
          type: actionTypes.FETCH_MOBILES.REQUEST,
        });

        console.log(args);
        let queryParamsArray = [];
        let searchText = args && args.searchText;
        let sortOrder = args && args.sorting;

        if(searchText && searchText.trim() !== ''){
          queryParamsArray.push({key : 'q', value:searchText});
        }

        if(sortOrder){
          queryParamsArray.push({key : '_sort', value:'discountedPrice'});
          let order = sortOrder === 0 ? 'asc' : 'desc';
          queryParamsArray.push({key : '_order', value:order});
        }

        let queryString  = '';
        if(queryParamsArray.length > 0)
        queryString = '?'

        for(let queryParam of queryParamsArray){
          if(queryString !== '?'){
            queryString = queryString + '&'
          }
          queryString = queryString + queryParam.key + '=' + queryParam.value
        }        
        
        let url = "http://localhost:3000/products" + queryString;
        console.log('url - ' + url);
      fetch(url)
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


export const fetchMobile = (args) => {
  let mobileId = args.id;
  console.log(args);
  return function(dispatch) {
      dispatch({
        type: actionTypes.FETCH_MOBILE.REQUEST,
      });
    
    fetch(`http://localhost:3000/products/${mobileId}`)
      .then(response => response.json())
      .then(data => dispatch({
          type: actionTypes.FETCH_MOBILE.SUCCESS,
          payload: data
        }))
      .catch(error => dispatch({
          type: actionTypes.FETCH_MOBILE.FAILURE,
          payload: error
        }))
}
}

export const updateSearchCriteria = searchText => {

  return function(dispatch) {
    dispatch({
      type : actionTypes.UPDATE_SEARCH_CRITERIA,
      payload : searchText
    });   

}
}

export const updateSortOrder = orderCode => {

  return function(dispatch) {
    dispatch({
      type : actionTypes.UPDATE_SORT_ORDER,
      payload : orderCode
    });   

}
}




