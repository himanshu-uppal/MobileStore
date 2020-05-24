import React from 'react';
import '../../styles/mobile-list.css';
import {Link} from 'react-router-dom';
import Pagination from "rc-pagination";
import "rc-pagination/assets/index.css";
export let MobileListComponent = (props) =>{

  let {pageNumber, handlePagination, totalMobiles,handleAddToCart,onSearchUpdate} = props;

  let onSearch = (event) =>{

    console.log(event.target.value);
    event.preventDefault();
   onSearchUpdate(event.target.value);

  }
  
  let mobileListContent = props.mobiles ? props.mobiles.map((mobile)=>{
    return (
    <div className="mobile-list-item col-sm-3">
        <div className="thumb-wrapper">
        <a href="#">
          <div className="img-box">
          <Link exact activeClassName="current" to={`/product-info/${mobile.id}`}> <img src="https://image.ibb.co/g0CAPp/ipad.jpg" className="img-responsive img-fluid" alt="" /></Link> 
          </div>
          </a>
          <div className="thumb-content">
          <Link exact activeClassName="current" to={`/product-info/${mobile.id}`}> <h4>{mobile.name}</h4></Link>
            <p className="item-price"><strike>${mobile.originalPrice}</strike> <span>${mobile.discountedPrice}</span></p>
            <div className="star-rating">
              <ul className="list-inline">
                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                <li className="list-inline-item"><i className="fa fa-star"></i></li>
                <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
              </ul>
            </div>
            <button className="btn btn-primary" onClick={() => handleAddToCart(mobile.id)}>Add to Cart</button>
          </div>						
        </div>
      </div>
  )})  : ''    ;
    return (
<React.Fragment>
<div className="container">
    <div className="row">
      <div className="col-md-12">
        <h2>Trending <b>Products</b></h2>
      
        
        <div>
        Search for Mobiles :
        <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={onSearch} />
        </div>
        <br />
        <div> Sort List <br/> 
        <button onClick={() => props.handleSorting(0) }  className={props.orderCode === 0 ? 'sorting-active' : ''} >Price Low to High</button>
        <button onClick={() => props.handleSorting(1)} className={props.orderCode === 1 ? 'sorting-active' : ''}  >Price High to Low</button>
        </div>
      
        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
      
        <div className="carousel-inner">
          <div className="item carousel-item active">
            <div className="row">
        {  mobileListContent   }        
              
           
            </div>
          </div>        
        </div>
        <div>
        <Pagination
        defaultPageSize={5}
        pageSize={5}
        current={pageNumber}
        defaultCurrent={1} 
        onChange={handlePagination}
        total={totalMobiles}
        showTitle={false}
        hideOnSinglePage={true}
      />
        </div>
      </div>
      </div>
    </div>
  </div>
</React.Fragment>
    )
}