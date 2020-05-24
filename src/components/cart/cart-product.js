import React from 'react';
export let CartProductComponent = (props) =>{

    let {cartProducts,handleCartProductRemove,handleQuantityUpdate} = props;

    return (
<React.Fragment>
{cartProducts && cartProducts.length > 0 && cartProducts.map((cartProduct)=>

    <tr>
<td className="col-sm-8 col-md-6">
<div className="media">
    <a className="cart-product-image thumbnail pull-left" href="#"> <img className="media-object" src="http://icons.iconarchive.com/icons/custom-icon-design/flatastic-2/72/product-icon.png" /> </a>
    <div className="media-body">
        <h4 className="media-heading"><a href="#">{cartProduct.product.name}</a></h4>
        <h5 className="media-heading"> by <a href="#">Brand name</a></h5>
        <span>Status: </span><span className="text-success"><strong>In Stock</strong></span>
    </div>
</div></td>
<td className="col-sm-1 col-md-1" >
<input type="email" className="form-control" id="exampleInputEmail1" required min={1} onChange={(e)=> { handleQuantityUpdate(cartProduct.product.id,e.target.value)}} defaultValue={cartProduct.quantity} />
</td>
<td className="col-sm-1 col-md-1 text-center"><strong>${cartProduct.product.discountedPrice}</strong></td>
<td className="col-sm-1 col-md-1 text-center"><strong>${cartProduct.quantity * cartProduct.product.discountedPrice}</strong></td>
<td className="col-sm-1 col-md-1">
<button type="button" className="btn btn-danger" onClick={() => handleCartProductRemove(cartProduct.product.id)}>
    <span className="glyphicon glyphicon-remove"></span> Remove
</button></td>
</tr>

)}

</React.Fragment>
    )
}













