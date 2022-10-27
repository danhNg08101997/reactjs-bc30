import React, { Component } from "react";

export default class BaiTapState extends Component {
  state = {
    imgSrc: "./img/product-car/red-car.jpg", //state default
    fSize: 16,
  };
  render() {
    return (
      <div className="container">
        <h3>Bài tập 1: Bài tập chọn mẫu xe</h3>
        <div className="row">
          <div className="col-6">
            <img
              className="w-100 mt-2"
              src={this.state.imgSrc}
              alt="black-car"
            />
          </div>
          <div className="col-6">
            <div className="row mt-2">
              <div className="col-12">
                <button
                  className="btn btn-danger p-4"
                  onClick={() => {
                    this.setState({
                      imgSrc: "./img/product-car/red-car.jpg",
                    });
                  }}
                >
                  Red
                </button>
              </div>
              <div className="col-12 mt-3">
                <button
                  className="btn btn-dark p-4"
                  onClick={() => {
                    this.setState({
                      imgSrc: "./img/product-car/black-car.jpg",
                    });
                  }}
                >
                  Black
                </button>
              </div>
              <div className="col-12 mt-3">
                <button
                  className="btn btn-primary p-4"
                  onClick={() => {
                    this.setState({
                      imgSrc: "./img/product-car/silver-car.jpg",
                    });
                  }}
                >
                  Silver
                </button>
              </div>
              <div className="col-12 mt-3">
                <button
                  className="btn btn-secondary p-4"
                  onClick={() => {
                    this.setState({
                      imgSrc: "./img/product-car/steel-car.jpg",
                    });
                  }}
                >
                  Steel
                </button>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <h3>Bài tập 2: Tăng giảm font-size</h3>
        <p style={{ fontSize: this.state.fSize }}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores vero
          veniam dolorum. Nesciunt nostrum laboriosam voluptatibus, eos modi
          distinctio accusamus obcaecati, animi quia vero, dicta in quisquam
          suscipit consequuntur temporibus!
        </p>
        <button
          className="btn btn-primary"
          onClick={() => {
            this.setState({
              fSize: this.state.fSize + 1,
            });
          }}
        >
          +
        </button>
        <button
          className="btn btn-danger mx-2"
          onClick={() => {
            this.setState({
              fSize: this.state.fSize - 1,
            });
          }}
        >
          -
        </button>
      </div>
    );
  }
}
