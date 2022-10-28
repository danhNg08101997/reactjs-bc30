import React, { Component } from "react";

const data = [
  { id: 1, name: "product 1", price: 1000, img: "https://i.pravatar.cc?u=1" },
  { id: 2, name: "product 2", price: 2000, img: "https://i.pravatar.cc?u=2" },
  { id: 3, name: "product 3", price: 3000, img: "https://i.pravatar.cc?u=3" },
];

export default class RenderWithMap extends Component {
  renderProduct = () => {
    //--Cách 1
    // let jsxArr = [];
    // for (let index = 0; index < data.length; index++) {

    //     //Mỗi lần duyệt lấy ra 1 object prod trong mảng data
    //   let prod = data[index];

    //   //Từ dữ liệu object tạo ra jsx
    //   let tr = (
    //     <tr key={index}>
    //       <td>{prod.id}</td>
    //       <td>{prod.name}</td>
    //       <td>{prod.price}</td>
    //       <td>
    //         <img src={prod.img} alt="..." width={50} />
    //       </td>
    //     </tr>
    //   );

    //   //add các jsx vào arrJSX
    //   jsxArr.push(tr);
    // }
    // return jsxArr;

    //--Cách 2: dùng .map()
    // let jsxArr = data.map((prod, index) => {
    return data.map((prod, index) => {
      return (
        <tr key={index}>
          <td>{prod.id}</td>
          <td>{prod.name}</td>
          <td>{prod.price}</td>
          <td>
            <img src={prod.img} alt="..." width={50} />
          </td>
        </tr>
      );
    });
    // return jsxArr;
  };

  renderCardProduct = () => {
    return data.map((prod, index) => {
      return (
        <div className="col-4" key={index}>
          <div className="card">
            <img src={prod.img} alt="..." />
            <div className="card-body">
              <p>{prod.name}</p>
              <p>{prod.price}</p>
              <button className="btn btn-outline-success">Add to cart</button>
            </div>
          </div>
        </div>
      );
    });
  };
  render() {
    return (
      <div className="container">
        <h3>Table product</h3>
        <table className="table">
          <thead>
            <tr>
              <td>id</td>
              <td>name</td>
              <td>price</td>
              <td>img</td>
            </tr>
          </thead>
          <tbody>{this.renderProduct()}</tbody>
        </table>
        <hr />
        <h3>Product List</h3>
        <div className="row">{this.renderCardProduct()}</div>
      </div>
    );
  }
}
