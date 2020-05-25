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
        let pagination =  args.pagination;

        if(searchText && searchText.trim() !== ''){
          queryParamsArray.push({key : 'q', value:searchText});
        }

        if(sortOrder !== null){
          console.log(sortOrder);
          queryParamsArray.push({key : '_sort', value:'discountedPrice'});
          let order = sortOrder === 0 ? 'asc' : 'desc';
          queryParamsArray.push({key : '_order', value:order});
        }

        //pagination
        queryParamsArray.push({key : '_start', value:pagination.start});
        queryParamsArray.push({key : '_end', value:pagination.end});

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
        .then(data =>{
         
           dispatch({
            type: actionTypes.FETCH_MOBILES.SUCCESS,
            payload: data
          })})
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




export const addToCart = (args) => {
  let mobileId = args;
  return function(dispatch) {
      dispatch({
        type: actionTypes.ADD_PRODUCT_TO_CART.REQUEST,
        payload: mobileId
      });    
   
}
}

export const removeProductFromCart = (args) => {
  let mobileId = args;
  return function(dispatch) {
      dispatch({
        type: actionTypes.REMOVE_PRODUCT_FROM_CART.REQUEST,
        payload: mobileId
      });    
   
}
}

export const fetchCartProducts = (args) =>{
  let cart = args;
  console.log(cart);
  return function(dispatch) {
    dispatch({
      type: actionTypes.FETCH_CART_PRODUCTS.REQUEST,
      payload: cart
    });    

    let queryString = '?' ;

    for(let cartProduct of cart){
      if(queryString !== '?')
      queryString = queryString + '&'
      queryString = queryString + 'id=' + cartProduct.id
    }


    let url = "http://localhost:3000/products" + queryString;
    console.log('url - ' + url);
  fetch(url)
    .then(response => response.json())
    .then(data =>{
     
       dispatch({
        type: actionTypes.FETCH_CART_PRODUCTS.SUCCESS,
        payload: data
      })})
    .catch(error => dispatch({
        type: actionTypes.FETCH_CART_PRODUCTS.FAILURE,
        payload: error
      }))
 
}
}

export const updateCartProductQuantity = (productId, quantity) => {
 
  return function(dispatch) {
      dispatch({
        type: actionTypes.UPDATE_CART_PRODUCT_QUANTITY,
        payload: {
          productId,
          quantity
        }
      });    
   
}
}

export const emptyCartAndProducts = () =>{

  return function(dispatch) {
    dispatch({
      type: actionTypes.EMPTY_CART_PRODUCTS     
    });    
 
}

}
