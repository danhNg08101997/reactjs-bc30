import React, { Component } from "react";

export default class ExProductItem extends Component {
  render() {
    let { prod, detailCar } = this.props;
    return (
      <div className="card">
        <img src={prod.img} alt="..." className="w-100" />
        <div className="card-body">
          <p>{prod.name}</p>
          <p>{prod.price}</p>
          <button
            className="btn btn-outline-success"
            data-bs-toggle="modal"
            data-bs-target="#modalId"
            onClick={() => {
              detailCar(prod);
            }}
          >
            Detail
          </button>
        </div>
      </div>
    );
  }
}
