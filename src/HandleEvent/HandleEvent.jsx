import React, { Component } from "react";

export default class HandleEvent extends Component {
  handleClick = () => {
    alert("Hello world!");
  };
  showMessage = (name) => {
    //debugger: chạy debug để kiểm tra source code
    alert("Hello " + name);
  };
  render() {
    return (
      <div className="container">
        <h1>HandleEvent</h1>
        <hr />
        <h3>Handle Event Click</h3>
        <button
          className="btn btn-outline-primary"
          onClick={(e) => {
            this.showMessage("danhNg");
          }}
        >
          Click me!
        </button>
        <button
          className="btn btn-outline-danger ms-2"
          onClick={this.handleClick}
        >
          Click me!
        </button>
        <hr />
        <h3>Handle Event Change</h3>
        <input
          className="form-control"
          onChange={(e) => {
            //e.target: chính là thẻ input
            let tagInput = e.target;
            console.log("Value: ", tagInput.value);
          }}
        />
      </div>
    );
  }
}
