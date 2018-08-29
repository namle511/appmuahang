import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropsTypes from 'prop-types';
import Cart from './../components/Cart';
import CartItem from './../components/CartItem';
import * as Message from './../constants/Message';
import CartResult from '../components/CartResult';
import * as actions from './../actions/index';
class CartContainer extends Component {
  render() {

    var { cart } = this.props;
    
    return (
      <Cart>
          {this.showCart(cart)}
          {this.showTotal(cart)}
      </Cart>
    );
  }

  

  showCart(cart) {
    var result = Message.MSG_CART_EMPTY;
    if (cart.length > 0) {
      result = cart.map((cartItem, index) => {
        return <CartItem changeMsg={this.props.changeMsg} delete={this.delete} change={this.change} key={index} cartItem={cartItem}/>
      });
    }
    return result;
  }

  delete = (product) => {
    this.props.deleteCartItem(product);
  }

  change = (product, b) => {
    console.log(product, b);
    this.props.changeQuan(product, b);
  }

  showTotal(cart) {
    var result = null;
    if (cart.length > 0) {
      result = <CartResult cart={cart}/>;
    }
    return result;
  }


}

CartContainer.propTypes = {
    cart : PropsTypes.arrayOf(PropsTypes.shape({
        product: PropsTypes.shape({
            id: PropsTypes.number.isRequired,
            name: PropsTypes.string.isRequired,
            image: PropsTypes.string.isRequired,
            desciption: PropsTypes.string.isRequired,
            price: PropsTypes.number.isRequired,
            inventory: PropsTypes.number.isRequired,
            rate: PropsTypes.number.isRequired
        }).isRequired,
        quantity: PropsTypes.number.isRequired
      })).isRequired
  }

const mapStateToProps = (state) => {
  return {
    cart: state.cart
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    changeQuan: (product, b ) => {
      dispatch(actions.changeQuan(product, b));
    },
    deleteCartItem: (product) => {
      dispatch(actions.deleteCartItem(product));
    },
    changeMsg: (msg) => {
      dispatch(actions.changeMsg(msg));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CartContainer);
