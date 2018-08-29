import React, { Component } from 'react';
import * as MSG from './../constants/Message';
class App extends Component {

    buy = (product) => {
        this.props.buy(product);
        this.props.changeMsg(MSG.MSG_ADD_TO_CART_SUCCESS);
    }

  render() {
    return (

                        <div className="col-lg-4 col-md-6 mb-r">
                            <div className="card text-center card-cascade narrower">
                                <div className="view overlay hm-white-slight z-depth-1">
                                    <img src={this.props.product.image}
                                        className="img-fluid" alt="" />
                                    <a>
                                        <div className="mask waves-light waves-effect waves-light"></div>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <h4 className="card-title">
                                        <strong>
                                            <a>{this.props.product.name}</a>
                                        </strong>
                                    </h4>
                                    <ul className="rating">
                                    <li>
                                        {this.showRating(this.props.product.rate)}
                                    </li> 
                                    </ul>
                                    <p className="card-text">
                                        {this.props.product.desciption}
                                    </p>
                                    <div className="card-footer">
                                        <span className="left">{this.props.product.price}$</span>
                                        <span className="right">
                                            <a onClick={()=> { this.buy(this.props.product)}} className="btn-floating blue-gradient" data-toggle="tooltip" data-placement="top" title="" data-original-title="Add to Cart">
                                                <i className="fa fa-shopping-cart"></i>
                                            </a>
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                
    );
  }

  showRating(rate){
      var rs = [];
      for(var i = 1; i <= rate; i++){
          rs.push(<i key={i} className="fa fa-star"></i>);
      }

      for (var j=1 ; j<=(5-rate); j++){
          rs.push(<i key={j+999} className="fa fa-star-o"></i>);
      }
      return rs;
  }
}

export default App;
