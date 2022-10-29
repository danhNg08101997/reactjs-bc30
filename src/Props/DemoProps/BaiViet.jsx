import React, { Component } from "react";

export default class BaiViet extends Component {
  render() {
    let { objBaiViet } = this.props;
    return (
      <div className="bg-secondary text-white p-3 mt-2">
        <h3>{objBaiViet.tieuDe}</h3>
        <p>{objBaiViet.noiDung}</p>
      </div>
    );
  }
}
