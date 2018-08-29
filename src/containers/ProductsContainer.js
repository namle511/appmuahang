import React, { Component } from 'react';
import { connect } from 'react-redux';
import Products from './../components/Products';
import Product from './../components/Product';
import PropsTypes from 'prop-types';
import * as actions from './../actions/index';
class ProductsContainer extends Component {
  render() {

    var { products } = this.props;

    return (
      <Products>
        {this.showProducts(products)}
      </Products>
    );
  }

  showProducts(products) {
    var result = null;
    if (products.length > 0) {
      result = products.map((product, index) => {
        return <Product key={index} product={product} buy={this.buyProduct} changeMsg={this.props.changeMsg}/>
      });
    }
    return result;
  }

  buyProduct = (product) => {
    if(window.confirm('Bạn có muốn mua ' + product.name + ' với giá ' + product.price + '$ ? ')){
      this.props.actAddToCart(product);
    } 
  }

}

ProductsContainer.propTypes = {
  products : PropsTypes.arrayOf(
    PropsTypes.shape({
      id: PropsTypes.number.isRequired,
      name: PropsTypes.string.isRequired,
      image: PropsTypes.string.isRequired,
      desciption: PropsTypes.string.isRequired,
      price: PropsTypes.number.isRequired,
      inventory: PropsTypes.number.isRequired,
      rate: PropsTypes.number.isRequired
    })
  ).isRequired,
  changeMsg: PropsTypes.func.isRequired
};

const mapStateToProps = (state) => {
  return {
    products: state.products,
    cart: state.cart
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    actAddToCart: (product) => {
      dispatch(actions.actAddToCart(product,1));
    },
    changeMsg : (msg) => {
      dispatch(actions.changeMsg(msg));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);
