import React from 'react';
import '../../styles/cart.css';
import {Header} from '../header/header';
import {CartProductComponent} from './cart-product';
export class CartComponent extends React.Component{

    constructor(props){
        super(props);
        console.log(props);
        console.log(props.cart);
    }


    render(){

        let {cart} = this.props;
    return (
<React.Fragment>
<Header></Header>

<div className="container">
<h3>Cart Details</h3>
{cart && cart.length > 0 ? <div className="row">
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
                 <CartProductComponent cartProducts= {cart} />
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
                       </td>
                        <td>
                        <button type="button" className="btn btn-success">
                            Checkout <span className="glyphicon glyphicon-play"></span>
                        </button></td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div> : <h4>Oops ! Cart is Empty .</h4>}
    
</div>

</React.Fragment>
    )
    }
}