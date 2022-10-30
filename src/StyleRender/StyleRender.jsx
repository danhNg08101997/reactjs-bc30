import React, { Component } from "react";

//Cách 1: Dùng khi css cho page.(css sẽ ảnh hưởng toàn bộ ứng dụng)
import "./style.css";

//Cách 2: Dùng khi class có thể bị thay đổi bởi event từ người dùng
import style from "./StyleRender.module.css";

export default class StyleRender extends Component {
  render() {
    return (
      <div className="container">
        
        <h3 className="color-red ">StyleRender</h3>

        <h3 className={`${style["color-blue"]}`}>Hello world</h3>

        {/* Cách 3: dùng khi giá trị style bị thay đổi bởi event từ người dùng */}
        <h3 style={{ color: "green", backgroundColor: "black" }}>Let's go</h3>
      </div>
    );
  }
}
