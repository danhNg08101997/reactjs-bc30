import React, { Component } from "react";
import { connect } from "react-redux";

class SanPhamRedux extends Component {
  render() {
    let { sp } = this.props;
    return (
      <div className="card my-2">
        <img height={350} src={sp.hinhAnh} alt="..." />
        <div className="card-body">
          <p>{sp.tenSP}</p>
          <p>{sp.giaBan}</p>
          <button
            className="btn btn-success"
            onClick={() => {
              const action = {
                type: "THEM_GIO_HANG",
                payload: {
                  sanPhamClick: sp,
                },
              };
              this.props.dispatch(action);
            }}
          >
            Thêm giỏ hàng
          </button>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({});

export default connect(mapStateToProps)(SanPhamRedux);
