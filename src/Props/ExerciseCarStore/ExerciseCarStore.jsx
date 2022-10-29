import React, { Component } from "react";
import ExModal from "./ExModal";
import ExProductList from "./ExProductList";

export default class ExerciseCarStore extends Component {
  state = {
    modalState: {
      id: 1,
      name: "black car",
      img: "./img/product-car/black-car.jpg",
      price: 1000,
    },
  };
  detailCar = (detail) => {
    // console.log(detail)
    this.setState({
        modalState:detail
    })
  }
  render() {
    return (
      <div className="container">
        <h3>ExerciseCarStore</h3>
        <ExModal modalState={this.state.modalState} />
        <ExProductList detailCar = {this.detailCar}/>
      </div>
    );
  }
}
