import { toHaveStyle } from "@testing-library/jest-dom/dist/matchers";
import React, { Component } from "react";

export default class Databinding extends Component {
    userName = 'danhNg@gmail.com';

  showInfo() {
    return "hello cybersoft";
  }

  renderCard = () => {
    return <div>
        <p>{this.userName}</p>
        <img src="https://picsum.photos/200/200" alt="..." />;
    </div> 
  };

  render() {
    const hoTen = "danhNg";
    
    const tinhDiemTrungBinh = (diemVan, diemToan) => {
      return (diemVan + diemToan) / 2;
    };

    return (
      <div>
        <p>Databinding</p>
        <hr />
        <p>họ tên: {hoTen}</p>
        <hr />
        <p>DTB: {tinhDiemTrungBinh(5, 8)}</p>
        <hr />
        <p>{this.showInfo()}</p>
        <hr />
        <p>{this.renderCard()}</p>
      </div>
    );
  }
}
