import React, { Component, PureComponent } from "react";

class ProductListItem extends PureComponent {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   // console.log("nextProps", nextProps);
  //   // console.log("this.props", this.props);``
  //   return this.props.product != nextProps.product;
  // }

  handleClick() {
    this.props.onSale(this.props.product.id);
  }

  render() {
    let { title, stock, price } = this.props.product;
    return (
      <div>
        <h2>
          item: {title}<br/>
          stock: ({stock})<br/>
          time: {new Date().toISOString()}<br/>
        </h2>
        <h2>{price}</h2>
        <button onClick={this.handleClick}>SELL</button>
      </div>
    );
  }
}

export default ProductListItem;