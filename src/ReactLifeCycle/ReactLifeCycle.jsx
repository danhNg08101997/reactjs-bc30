import React, { Component } from "react";
import Child from "./Child";

export default class ReactLifeCycle extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 60,
      number: 1,
      like: 1,
      product: {
        id: 1,
        name: "product 1",
        like: 1,
      },
    };
    console.log("constructor");
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps");
    return null;
  }

  shouldComponentUpdate(newProps, newState) {
    console.log("shouldComponentUpdate");
    return true;
  }

  render() {
    console.log("render");
    return (
      <div className="container my-2 text-center">
        <h3>Count down: {this.state.count}</h3>
        <h3>Number: {this.state.number}</h3>
        <button
          className="btn btn-success px-5 py-2 mb-2"
          onClick={() => {
            this.setState({
              number: this.state.number + 1,
            });
          }}
        >
          +
        </button>
        <h3>Like: {this.state.product.like}</h3>
        <button
          className="btn btn-success px-5 py-2 mb-2"
          onClick={() => {
            // this.setState({
            //   like: this.state.like + 1,
            // });
            let product = this.state.product;
            product.like += 1;
            this.setState({
              product: { ...product },
            });
          }}
        >
          +
        </button>
        <Child number={this.state.number} product={this.state.product} />
      </div>
    );
  }
  timeout = {};
  componentDidMount() {
    this.timeout = setInterval(() => {
      this.setState({
        count: this.state.count - 1,
      });
      console.log(this.state.count);
    }, 1000);
    //chạy 1 lần sau khi render
    console.log("componentDidMount");
  }
  componentWillUnmount() {
    //willunmount chạy trước khi component mất khỏi giao diện
    clearInterval(this.timeout);
  }
}
