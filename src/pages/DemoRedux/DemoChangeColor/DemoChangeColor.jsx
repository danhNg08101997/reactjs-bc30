//rcredux
//xóa mapDispatchToProps

import React, { Component } from "react";
import { connect } from "react-redux";

class DemoChangeColor extends Component {
  changeColor = (color) => {
    const action = {
      type: "CHANGE_COLOR",
      imgCar: `./img/product-car/${color}-car.jpg`,
    };
    this.props.dispatch(action);
  };
  render() {
    return (
      <div className="container text-center my-2">
        <h3>Bài tập chọn màu xe</h3>
        <div className="row">
          <div className="col-6">
            <img src={this.props.imgCar} alt='...' className="w-75 mt-2" />
          </div>
          <div className="col-6 text-start">
            <div className="row mt-2">
              <div className="col-12">
                <button
                  className="btn btn-danger px-5"
                  onClick={() => {
                    this.changeColor("red");
                  }}
                >
                  Red car
                </button>
              </div>
              <div className="col-12 mt-3">
                <button
                  className="btn btn-dark px-5"
                  onClick={() => {
                    this.changeColor("black");
                  }}
                >
                  Black car
                </button>
              </div>
              <div className="col-12 mt-3">
                <button
                  className="btn px-5"
                  style={{backgroundColor:"silver"}}
                  onClick={() => {
                    this.changeColor("silver");
                  }}
                >
                  Silver car
                </button>
              </div>
              <div className="col-12 mt-3">
                <button
                  className="btn btn-secondary px-5"
                  onClick={() => {
                    this.changeColor("steel");
                  }}
                >
                  Steel car
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  //state: rootReducer
  imgCar: state.imgCar,
});

export default connect(mapStateToProps)(DemoChangeColor);
/*
arrow function return về 1 object
() => {
    return {}
}
viết tắt: {return } tương đương ()
() => ({})


*/
