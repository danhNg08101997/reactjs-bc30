import React, { Component } from "react";
import FormProduct from "./FormProduct";
import TableProduct from "./TableProduct";
import axios from "axios";

export default class ProductManagement extends Component {
  state = {
    arrProduct: [
      {
        id: "1",
        name: "product 1",
        price: "1000",
        description: "product 1 desc",
        img: "https://picsum.photos/200/200",
        productType: "mobile",
      },
      {
        id: "2",
        name: "product 2",
        price: "2000",
        description: "product 2 desc",
        img: "https://picsum.photos/200/200",
        productType: "tablet",
      },
    ],
    productEdit: {
      id: "",
      name: "",
      price: "",
      img: "",
      productType: "mobile",
      description: "",
    },
  };
  //CRUD
  // Muốn thay đổi state nào thì viết hàm setState tại vị trí state đó

  createProduct = (newProduct) => {
    console.log("newProduct", newProduct);
    let arrProductUpdate = this.state.arrProduct;
    arrProductUpdate.push(newProduct);
    this.setState({
      arrProduct: arrProductUpdate,
    });
  };

  delProduct = (idClick) => {
    //xử lý mảng => setState
    // console.log("idClick", idClick);
    let arrProductUpdate = this.state.arrProduct;
    //tìm ra vị trí của id cần xóa
    // let indexDel = arrProductUpdate.findIndex((p) => p.id == idClick);
    // if (indexDel !== -1) {
    //   //tìm thấy indexDel => xóa
    //   arrProductUpdate.splice(indexDel, 1);
    // }
    arrProductUpdate = arrProductUpdate.filter((p) => p.id !== idClick);
    //setState cho arrProduct
    this.setState({ arrProduct: arrProductUpdate });
  };

  editProduct = (prodEdit) => {
    console.log(prodEdit);
    this.setState({ productEdit: prodEdit });
  };

  updateProduct = (productUpdate) => {
    // console.log(productUpdate);
    //lấy ra dữ liệu trong mảng (prodUpdate)
    let prodUpdate = this.state.arrProduct.find(
      (prod) => prod.id == productUpdate.id
    );
    if (prodUpdate) {
      for (let key in prodUpdate) {
        prodUpdate[key] = productUpdate[key];
      }
    }
    // sau khi thay đổi thì set lại state
    this.setState({ arrProduct: this.state.arrProduct });
  };

  render() {
    return (
      <div className="container">
        <h3>ProductManagement</h3>
        <FormProduct
          createProduct={this.createProduct}
          productEdit={this.state.productEdit}
          updateProduct={this.updateProduct}
        />
        <TableProduct
          arrProduct={this.state.arrProduct}
          delProduct={this.delProduct}
          editProduct={this.editProduct}
        />
      </div>
    );
  }
  componentDidMount() {
    let promise = axios({
      url: "https://svcy.myclass.vn/api/product/getall",
      method: "GET",
    });
    promise.then((result) => {
      // thành công
      this.setState({ arrProduct: result.data });
    });
    promise.catch((err) => {
      console.log(err);
    });
  }
}
