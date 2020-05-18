import React from 'react';
import './styles/mobile-list.css';
import './styles/cart.css';
import './styles/login.css';
import './styles/mobile-info.css';

function App() {
  return (
   <React.Fragment>
   <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">Mobile Store</a>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">Link</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          Dropdown
        </a>
        <div className="dropdown-menu" aria-labelledby="navbarDropdown">
          <a className="dropdown-item" href="#">Action</a>
          <a className="dropdown-item" href="#">Another action</a>
          <div className="dropdown-divider"></div>
          <a className="dropdown-item" href="#">Something else here</a>
        </div>
      </li>
      <li className="nav-item">
        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
      </li>
    </ul>
    <form className="form-inline my-2 my-lg-0">
      <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
    </form>
  </div>
</nav>
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

  <div className="container">
    <div className="row">
        <div className="col-sm-12 col-md-10 col-md-offset-1">
            <table className="table table-hover">
                <thead>
                    <tr>
                        <th>Product</th>
                        <th>Quantity</th>
                        <th className="text-center">Price</th>
                        <th className="text-center">Total</th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="col-sm-8 col-md-6">
                        <div className="media">
                            <a className="cart-product-image thumbnail pull-left" href="#"> <img className="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" /> </a>
                            <div className="media-body">
                                <h4 className="media-heading"><a href="#">Product name</a></h4>
                                <h5 className="media-heading"> by <a href="#">Brand name</a></h5>
                                <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
                            </div>
                        </div></td>
                        <td className="col-sm-1 col-md-1" >
                        <input type="email" className="form-control" id="exampleInputEmail1" value="3" />
                        </td>
                        <td className="col-sm-1 col-md-1 text-center"><strong>$4.87</strong></td>
                        <td className="col-sm-1 col-md-1 text-center"><strong>$14.61</strong></td>
                        <td className="col-sm-1 col-md-1">
                        <button type="button" className="btn btn-danger">
                            <span className="glyphicon glyphicon-remove"></span> Remove
                        </button></td>
                    </tr>
                    <tr>
                        <td className="col-md-6">
                        <div className="media">
                            <a className="cart-product-image thumbnail pull-left" href="#"> <img className="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png"  /> </a>
                            <div className="media-body">
                                <h4 className="media-heading"><a href="#">Product name</a></h4>
                                <h5 className="media-heading"> by <a href="#">Brand name</a></h5>
                                <span>Status: </span><span className="text-warning"><strong>Leaves warehouse in 2 - 3 weeks</strong></span>
                            </div>
                        </div></td>
                        <td className="col-md-1 center">
                        <input type="email" className="form-control" id="exampleInputEmail1" value="2" />
                        </td>
                        <td className="col-md-1 text-center"><strong>$4.99</strong></td>
                        <td className="col-md-1 text-center"><strong>$9.98</strong></td>
                        <td className="col-md-1">
                        <button type="button" className="btn btn-danger">
                            <span className="glyphicon glyphicon-remove"></span> Remove
                        </button></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h5>Subtotal</h5></td>
                        <td className="text-right"><h5><strong>$24.59</strong></h5></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h5>Estimated shipping</h5></td>
                        <td className="text-right"><h5><strong>$6.94</strong></h5></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td><h3>Total</h3></td>
                        <td className="text-right"><h3><strong>$31.53</strong></h3></td>
                    </tr>
                    <tr>
                        <td>   </td>
                        <td>   </td>
                        <td>   </td>
                        <td>
                        <button type="button" className="btn btn-default">
                            <span className="glyphicon glyphicon-shopping-cart"></span> Continue Shopping
                        </button></td>
                        <td>
                        <button type="button" className="btn btn-success">
                            Checkout <span className="glyphicon glyphicon-play"></span>
                        </button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
</div>


<div className="login-wrap">
	<div className="login-html">
		<input id="tab-1" type="radio" name="tab" className="sign-in" checked /><label for="tab-1" className="tab">Sign In</label>
		<input id="tab-2" type="radio" name="tab" className="for-pwd" /><label for="tab-2" className="tab">Forgot Password</label>
		<div className="login-form">
			<div className="sign-in-htm">
				<div className="group">
					<label for="user" className="label">Username or Email</label>
					<input id="user" type="text" className="input" />
				</div>
				<div className="group">
					<label for="pass" className="label">Password</label>
					<input id="pass" type="password" className="input" data-type="password" />
				</div>
				<div className="group">
					<input type="submit" className="button" value="Sign In" />
				</div>
				<div className="hr"></div>
			</div>
			<div className="for-pwd-htm">
				<div className="group">
					<label for="user" className="label">Username or Email</label>
					<input id="user" type="text" className="input" />
				</div>
				<div className="group">
					<input type="submit" className="button" value="Reset Password" />
				</div>
				<div className="hr"></div>
			</div>
		</div>
	</div>
</div>


<div className="container">
		<div className="card">
			<div className="container-fliud">
				<div className="wrapper row">
					<div className="preview col-md-6">
						
						<div className="preview-pic tab-content">
						  <div className="tab-pane active" id="pic-1"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-2"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-3"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-4"><img src="http://placekitten.com/400/252" /></div>
						  <div className="tab-pane" id="pic-5"><img src="http://placekitten.com/400/252" /></div>
						</div>
						<ul className="preview-thumbnail nav nav-tabs">
						  <li className="active"><a data-target="#pic-1" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-2" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-3" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-4" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						  <li><a data-target="#pic-5" data-toggle="tab"><img src="http://placekitten.com/200/126" /></a></li>
						</ul>
						
					</div>
					<div className="details col-md-6">
						<h3 className="product-title">men's shoes fashion</h3>
						<div className="rating">
							<div className="stars">
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star checked"></span>
								<span className="fa fa-star"></span>
								<span className="fa fa-star"></span>
							</div>
							<span className="review-no">41 reviews</span>
						</div>
						<p className="product-description">Suspendisse quos? Tempus cras iure temporibus? Eu laudantium cubilia sem sem! Repudiandae et! Massa senectus enim minim sociosqu delectus posuere.</p>
						<h4 className="price">current price: <span>$180</span></h4>
						<p className="vote"><strong>91%</strong> of buyers enjoyed this product! <strong>(87 votes)</strong></p>
						<h5 className="sizes">sizes:
							<span className="size" data-toggle="tooltip" title="small">s</span>
							<span className="size" data-toggle="tooltip" title="medium">m</span>
							<span className="size" data-toggle="tooltip" title="large">l</span>
							<span className="size" data-toggle="tooltip" title="xtra large">xl</span>
						</h5>
						<h5 className="colors">colors:
							<span className="color orange not-available" data-toggle="tooltip" title="Not In store"></span>
							<span className="color green"></span>
							<span className="color blue"></span>
						</h5>
						<div className="action">
							<button className="add-to-cart btn btn-default" type="button">add to cart</button>
							<button className="like btn btn-default" type="button"><span className="fa fa-heart"></span></button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>       

  </React.Fragment>  );
}

export default App;
