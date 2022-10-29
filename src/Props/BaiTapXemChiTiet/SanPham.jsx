import React, { Component } from "react";

export default class SanPham extends Component {
  render() {
    let { prod , xemChiTiet} = this.props;
    return (
      <div>
        <div className="card">
          <img className="w-100" src={prod.hinhAnh} alt="..." height={400} />
          <div className="card-body">
            <h2>{prod.tenSP}</h2>
            <p>{prod.giaBan.toLocaleString()}đ</p>
            <button
              className="btn btn-outline-success"
              onClick={() => {
                xemChiTiet(prod);
              }}
            >
              Xem chi tiết
            </button>
          </div>
        </div>
      </div>
    );
  }
}
