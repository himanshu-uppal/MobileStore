import React from 'react';
import '../../styles/mobile-list.css';
export let MobileListComponent = (props) =>{
  
  let mobileListContent = props.mobiles ? props.mobiles.map((mobile)=>{
    return (
    <div className="mobile-list-item col-sm-3">
        <div className="thumb-wrapper">
        <a href="#">
          <div className="img-box">
            <img src="https://image.ibb.co/g0CAPp/ipad.jpg" className="img-responsive img-fluid" alt="" />
          </div>
          </a>
          <div className="thumb-content">
          <a href="#"> <h4>{mobile.name}</h4></a>
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
            <a href="#" className="btn btn-primary">Add to Cart</a>
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
        <div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
      
        <div className="carousel-inner">
          <div className="item carousel-item active">
            <div className="row">
        {  mobileListContent   }        
              
           
            </div>
          </div>        
        </div>
      </div>
      </div>
    </div>
  </div>
</React.Fragment>
    )
}