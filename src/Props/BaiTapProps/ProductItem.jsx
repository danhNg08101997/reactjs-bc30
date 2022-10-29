import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    let { product } = this.props;
    return (
      <div className="card">
        <img src={product.image} alt="" />

        <div className="card-body">
          <p>{product.name}</p>
          <p>{product.price}$</p>
          <button className="btn bg-dark text-white">Add to cart</button>
        </div>
      </div>
    );
  }
}
