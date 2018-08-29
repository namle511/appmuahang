import React, { Component } from 'react';
class Cart extends Component {
  render() {
    return (
      <div>
        <div>
            <center><b><h2><i className="fa fa-shopping-cart"></i> Giỏ hàng của bạn</h2></b></center>
                <section className="section">
                    <div className="table-responsive">
                        <table className="table product-table">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Sản Phẩm</th>
                                    <th>Giá</th>
                                    <th>Số Lượng</th>
                                    <th>Tổng Cộng</th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                    {this.props.children}
                            </tbody>
                        </table>
                    </div>
                </section>
            
    </div>
      </div>
    );
  }
}

export default Cart;
