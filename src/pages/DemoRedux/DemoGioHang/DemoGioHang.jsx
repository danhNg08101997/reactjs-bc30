import React, { Component } from "react";
import { connect } from "react-redux";
import DanhSachSanPhamRedux from "./DanhSachSanPhamRedux";
import GioHang from "./GioHang";

class DemoGioHang extends Component {
  render() {
    return (
      <div className="container text-center my-2">
        <h3>Bài tập giỏ hàng redux</h3>
        <GioHang />
        <DanhSachSanPhamRedux />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(DemoGioHang);
