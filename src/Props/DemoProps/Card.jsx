import React, { Component } from "react";

export default class Card extends Component {
  render() {

    //this.props là thuộc tính có sẵn của component dùng để nhận giá trị của component cha truyền vào

    return (
      <div>
        <div className="card text-white bg-primary">
          <img
            className="card-img-top"
            src="https://picsum.photos/200/200"
            alt="Title"
          />

          <div className="card-body">
            <h4 className="card-title">{this.props.tenSP}</h4>
            <p className="card-text">{this.props.giaSP}</p>
          </div>
        </div>
      </div>
    );
  }
}
