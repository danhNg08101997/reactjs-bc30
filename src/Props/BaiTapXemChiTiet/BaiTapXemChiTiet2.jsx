import React, { Component } from "react";
import SanPham from "./SanPham";

const dataPhone = [
  {
    maSP: 1,
    tenSP: "VinSmart Live",
    manHinh: "AMOLED, 6.2, Full HD+",
    heDieuHanh: "Android 9.0 (Pie)",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 5700000,
    hinhAnh: "./img/img-phone/vsphone.jpg",
  },
  {
    maSP: 2,
    tenSP: "Meizu 16Xs",
    manHinh: "AMOLED, FHD+ 2232 x 1080 pixels",
    heDieuHanh: "Android 9.0 (Pie); Flyme",
    cameraTruoc: "20 MP",
    cameraSau: "Chính 48 MP & Phụ 8 MP, 5 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 7600000,
    hinhAnh: "./img/img-phone/meizuphone.jpg",
  },
  {
    maSP: 3,
    tenSP: "Iphone XS Max",
    manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
    heDieuHanh: "iOS 12",
    cameraSau: "Chính 12 MP & Phụ 12 MP",
    cameraTruoc: "7 MP",
    ram: "4 GB",
    rom: "64 GB",
    giaBan: 27000000,
    hinhAnh: "./img/img-phone/applephone.jpg",
  },
];

export default class BaiTapXemChiTiet2 extends Component {
  state = {
    sanPhamChiTiet: {
      maSP: 3,
      tenSP: "Iphone XS Max",
      manHinh: "OLED, 6.5, 1242 x 2688 Pixels",
      heDieuHanh: "iOS 12",
      cameraSau: "Chính 12 MP & Phụ 12 MP",
      cameraTruoc: "7 MP",
      ram: "4 GB",
      rom: "64 GB",
      giaBan: 27000000,
      hinhAnh: "./img/img-phone/applephone.jpg",
    },
  };

  renderProductList = () => {
    return dataPhone.map((prod, index) => {
      return (
        <div className="col-4" key={index}>
          <SanPham prod={prod} xemChiTiet={this.xemChiTiet} />
        </div>
      );
    });
  };

  xemChiTiet = (sanPhamClick) => {
    this.setState({
      sanPhamChiTiet: sanPhamClick,
    });
  };

  render() {
    let {
      tenSP,
      maSP,
      manHinh,
      heDieuHanh,
      cameraSau,
      cameraTruoc,
      ram,
      rom,
      giaBan,
      hinhAnh,
    } = this.state.sanPhamChiTiet;
    return (
      <div className="container">
        <h3 className="text-center mt-2">Danh sách sản phẩm</h3>
        <div className="row">{this.renderProductList()}</div>
        <div className="row mt-3">
          <div className="col-4 text-center">
            <h3 className="text-center">{tenSP}</h3>
            <img className="w-100" src={hinhAnh} alt="..." />
          </div>
          <div className="col-8">
            <h3>Kỹ thuật số</h3>
            <table className="table">
              <thead>
                <tr>
                  <td>Màn hình</td>
                  <td>{manHinh}</td>
                </tr>
                <tr>
                  <td>Hệ điều hành</td>
                  <td>{heDieuHanh}</td>
                </tr>
                <tr>
                  <td>Camera trước</td>
                  <td>{cameraTruoc}</td>
                </tr>
                <tr>
                  <td>Camera sau</td>
                  <td>{cameraSau}</td>
                </tr>
                <tr>
                  <td>RAM</td>
                  <td>{ram}</td>
                </tr>
                <tr>
                  <td>ROM</td>
                  <td>{rom}</td>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>
    );
  }
}
