import React, { Component } from "react";
import ExProductItem from "./ExProductItem";
const products = [
  {
    id: 1,
    name: "black car",
    img: "./img/product-car/black-car.jpg",
    price: 1000,
  },
  { id: 2, name: "red car", img: "./img/product-car/red-car.jpg", price: 2000 },
  {
    id: 3,
    name: "silver car",
    img: "./img/product-car/silver-car.jpg",
    price: 3000,
  },
  {
    id: 4,
    name: "Steel car",
    img: "./img/product-car/steel-car.jpg",
    price: 4000,
  },
];
export default class ExProductList extends Component {
  renderProduct = () => {
    let { detailCar } = this.props;
    return products.map((prod, index) => {
      return (
        <div className="col-6 mt-4" key={index}>
          <ExProductItem prod={prod} detailCar={detailCar} />
        </div>
      );
    });
  };
  render() {
    return (
      <div>
        <h3 className="text-center">Product list</h3>
        <div className="row">{this.renderProduct()}</div>
      </div>
    );
  }
}
