import React, { Component } from "react";
//kết nối redux
import { connect } from "react-redux";

class DemoTangGiamSoLuong extends Component {
  render() {
    console.log(this.props);
    return (
      <div className="container text-center my-2">
        <h3>DemoTangGiamSoLuong</h3>
        <p>Number:{this.props.number}</p>
        <button
          className="btn btn-success px-5 py-2"
          onClick={() => {
            //action: đại diện dữ liệu gửi lên store làm thay đổi state
            const action = {
              type: "TANG_SO_LUONG", //thuộc tính bắt buộc
              newNumber: this.props.number + 1,
            };
            //sử dụng hàm this.props.dispatch để gửi dữ liệu lên redux
            this.props.dispatch(action);
          }}
        >
          +
        </button>
        <button
          className="btn btn-danger px-5 py-2 mx-2 "
          onClick={() => {
            const action = {
              type: "GIAM_SO_LUONG",
              newNumber: this.props.number - 1,
            };
            this.props.dispatch(action);
          }}
        >
          -
        </button>
      </div>
    );
  }
}

//HOC
/*
chuyển state của redux về thành props của component
*/
const mapStateToProps = (rootReducer) => {
  return { number: rootReducer.number };
};
//component chứa state redux
export default connect(mapStateToProps)(DemoTangGiamSoLuong);
