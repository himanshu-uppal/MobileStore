import React from 'react';
import '../../styles/mobile-list.css';
export let MobileListComponent = () =>{
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
              <div className="mobile-list-item col-sm-3">
                <div className="thumb-wrapper">
                <a href="#">
                  <div className="img-box">
                    <img src="https://image.ibb.co/g0CAPp/ipad.jpg" className="img-responsive img-fluid" alt="" />
                  </div>
                  </a>
                  <div className="thumb-content">
                  <a href="#"> <h4>Apple iPad</h4></a>
                    <p className="item-price"><strike>$400.00</strike> <span>$369.00</span></p>
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
              <div className="mobile-list-item col-sm-3">
                <div className="thumb-wrapper">
                <a href="#">
                  <div className="img-box">
                    <img src="https://image.ibb.co/g0CAPp/ipad.jpg" className="img-responsive img-fluid" alt="" />
                  </div>
                  </a>
                  <div className="thumb-content">
                  <a href="#"> <h4>Sony Headphone</h4></a>
                    <p className="item-price"><strike>$25.00</strike> <span>$23.99</span></p>
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
              <div className="mobile-list-item col-sm-3">
                <div className="thumb-wrapper">
                <a href="#">
                  <div className="img-box">
                    <img src="https://image.ibb.co/g0CAPp/ipad.jpg" className="img-responsive img-fluid" alt="" />
                  </div>
                </a>
                  <div className="thumb-content">
                  <a href="#"> <h4>Macbook Air</h4></a>
                    <p className="item-price"><strike>$899.00</strike> <span>$649.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        <li className="list-inline-item"><i className="fa fa-star-half-o"></i></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>								
              <div className="mobile-list-item col-sm-3">
                <div className="thumb-wrapper">
                <a href="#">
                  <div className="img-box">
                    <img src="https://image.ibb.co/g0CAPp/ipad.jpg" className="img-responsive img-fluid" alt="" />
                  </div>
                  </a>
                  <div className="thumb-content">
                  <a href="#"> <h4>Nikon DSLR</h4></a>
                    <p className="item-price"><strike>$315.00</strike> <span>$250.00</span></p>
                    <div className="star-rating">
                      <ul className="list-inline">
                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        <li className="list-inline-item"><i className="fa fa-star"></i></li>
                        <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                        <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                      </ul>
                    </div>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                  </div>						
                </div>
              </div>
              <div className="mobile-list-item col-sm-3">
                <div className="thumb-wrapper">
                <a href="#">
                  <div className="img-box">
                    <img src="https://image.ibb.co/g0CAPp/ipad.jpg" className="img-responsive img-fluid" alt="" />
                  </div>
                  </a>
                  <div className="thumb-content">
                  <a href="#"> <h4>Apple iPad</h4></a>
                    <p className="item-price"><strike>$400.00</strike> <span>$369.00</span></p>
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