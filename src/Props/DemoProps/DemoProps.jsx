import React, { Component } from "react";
import BaiViet from "./BaiViet";
import Card from "./Card";

const danhSachBaiViet = [
  { tieuDe: "tiêu đề 1", noiDung: "nội dung 1" },
  { tieuDe: "tiêu đề 2", noiDung: "nội dung 2" },
  { tieuDe: "tiêu đề 3", noiDung: "nội dung 3" },
];

export default class DemoProps extends Component {
  render() {
    const tenSP = "product 1";
    const giaSP = 1000;

    return (
      <div className="container">
        <div className="d-flex justify-content-between">
          <div className="w-25 mt-5">
            <Card tenSP={tenSP} giaSP={giaSP} />
          </div>

          <div className="w-25 mt-5">
            <Card tenSP={"product 2"} giaSP={2000} />
          </div>
        </div>

        <hr />

        <h3>Demo bài viết</h3>

        {danhSachBaiViet.map((baiViet, index) => {
          return (
            <div key={index}>
              <BaiViet objBaiViet={baiViet} />
            </div>
          );
        })}
      </div>
    );
  }
}
