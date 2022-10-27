//rcc: khởi tạo react class component

import React, { Component } from "react";

export default class DemoClass extends Component {
  //giao diện component nằm trong phương thức của render
  render() {
    return <div className="mt-2 bg-dark text-white p-2">DemoClass</div>;
  }
}
