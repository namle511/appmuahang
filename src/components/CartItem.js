import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as MSG from './../constants/Message';
class CartItem extends Component {
  render() {

    var cartItem = this.props.cartItem.product;
    
    return (
        <tr>
            <th scope="row">
                    <img src={cartItem.image}
                        alt="" className="img-fluid-z-depth-0" />
                </th>
                <td>
                    <h5>
                        <strong>{cartItem.name}</strong>
                    </h5>
                </td>
                <td>{cartItem.price}$</td>
                <td className="center-on-small-only">
                    
                    <div className="btn-group radio-group" data-toggle="buttons">
                        <label onClick={() => {this.props.change(this.props.cartItem.product, false); this.props.changeMsg(MSG.MSG_UPDATE_CART_SUCCESS)}} className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <a >—</a>
                        </label>&nbsp;&nbsp;
                        <span className="qty">{this.props.cartItem.quantity} </span>&nbsp;&nbsp;
                        <label onClick={() => {this.props.change(this.props.cartItem.product, true); this.props.changeMsg(MSG.MSG_UPDATE_CART_SUCCESS)}} className="btn btn-sm btn-primary
                            btn-rounded waves-effect waves-light">
                            <a >+</a>
                        </label>
                    </div>
                </td>
                <td>{cartItem.price * this.props.cartItem.quantity}$</td>
                <td>
                    <button onClick={() => {this.props.delete(this.props.cartItem.product); this.props.changeMsg(MSG.MSG_DELETE_PRODUCT_IN_CART_SUCCESS)}} type="button" className="btn btn-sm btn-primary waves-effect waves-light" data-toggle="tooltip" data-placement="top"
                        title="" data-original-title="Remove item">
                        X
                    </button>
                </td>
            </tr>
            
    );
  }
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart
    }
}

export default connect(mapStateToProps,null)(CartItem);
