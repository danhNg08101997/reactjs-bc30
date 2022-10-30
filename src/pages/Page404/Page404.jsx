import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Page404 extends Component {
  render() {
    return (
      <div className="container">
        <h3>
          Không tìm thấy dữ liệu! đề nghị bạn <NavLink to={""}>trở về</NavLink>{" "}
          trang chủ!
        </h3>
      </div>
    );
  }
}
