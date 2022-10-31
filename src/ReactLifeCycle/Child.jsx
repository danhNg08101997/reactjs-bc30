import React, { Component, PureComponent } from "react";

/*
Purecomponent: là component không có lifecycle shouldComponentUpdate, nó sẽ tự xử lý render lại khi props thay đổi (đối với props là primitive value). Đối với reference value thì cần tạo biến địa chỉ mới và clone dữ liệu ra = spread operator ({...},{...})
*/

export default class Child extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {};
    console.log("constructor child");
  }
  static getDerivedStateFromProps(newProps, currentState) {
    console.log("getDerivedStateFromProps child");
    return null;
  }

  //   shouldComponentUpdate(newProps, newState) {
  //     if (this.props.number !== newProps.number) {
  //       return true;
  //     }
  //     console.log("shouldComponentUpdate child");
  //     return false;
  //   }

  render() {
    console.log("render child");
    return (
      <div className="bg-dark p-5 display-4 text-white text-center">
        <h3>Number child: {this.props.number}</h3>
        Child component
        <h3>
          Product: {this.props.product.name} - like: {this.props.product.like}
        </h3>
      </div>
    );
  }
  componentDidMount() {
    console.log("componentDidMount child");
  }
  componentDidUpdate(prevProps, prevState) {
    //chạy mỗi lần state hoặc props thay đổi
    //hạn chế setState trong náy, nếu có lệnh setState phải có if.
    console.log("componentDidUpdate");
  }
}
