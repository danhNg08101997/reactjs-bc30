import React, { Component } from "react";

export default class FormProduct extends Component {
  state = {
    productInfo: {
      id: "",
      name: "",
      price: "",
      img: "",
      productType: "mobile",
      description: "",
    },
    errors: {
      id: "",
      name: "",
      price: "",
      img: "",
      productType: "mobile",
      description: "",
    },
  };

  handleChange = (e) => {
    let { id, value } = e.target;

    let dataType = e.target.getAttribute("data-type");

    //xử lý product info
    let newValue = { ...this.state.productInfo };
    newValue[id] = value;

    //xử lý lỗi
    let newErrors = { ...this.state.errors };
    //check rỗng
    let errorMess = "";
    if (value.trim() === "") {
      errorMess = id + " không được bỏ trống!";
    } else {
      //lỗi định dạng
      if (dataType == "number") {
        let regexNumber = /^\d+$/;
        if (!regexNumber.test(value)) {
          errorMess = id + " phải là số!";
        }
      }
    }

    newErrors[id] = errorMess;

    //setState
    this.setState(
      {
        productInfo: newValue,
        errors: newErrors,
      },
      () => {
        console.log(this.state);
      }
    );
  };

  handleSubmit = (e) => {
    e.preventDefault();
    //check trước khi submit dữ liệu
    let valid = true;
    let { errors, productInfo } = this.state;
    //check error (tất cả error phải rỗng)
    for (let key in errors) {
      if (errors[key] !== "") {
        valid = false;
        break;
      }
    }
    //check value(productInfo) tất cả phải khác rỗng
    for (let key in productInfo) {
      if (productInfo[key] === "") {
        errors[key] = key + " không được bỏ trống!";
        valid = false;
      }
    }
    if (!valid) {
      this.setState({ errors: errors });
      alert("Dữ liệu không hợp lệ!");
      return;
    }
    // hợp lệ
    this.props.createProduct(productInfo);
  };

  // static getDerivedStateFromProps(newProps, currentState) {
  //   //lấy props.productEdit => gán vào state.productInfo => sau đó giao diện lấy ra từ state
  //   if (newProps.productEdit.id !== currentState.productInfo.id) {
  //     //bấm nút edit
  //     currentState.productInfo = newProps.productEdit;
  //     return currentState; //hàm này sẽ tọa ra this.state mới
  //   }
  //   return null;
  // }

  //chạy trước render sau khi props thay đổi
  componentWillReceiveProps(newProps) {
    //khi bấm nút chỉnh sửa lấy props gán vào state => giao diện render ra từ state
    this.setState({
      productInfo: newProps.productEdit,
    });
  }

  render() {
    let { id, name, productType, img, description, price } =
      this.state.productInfo;
    return (
      <form className="card" onSubmit={this.handleSubmit}>
        <div className="card-header bg-dark text-warning fw-bold">
          Product info
        </div>
        <div className="card-body row">
          <div className="col-6">
            <div className="form-group">
              <p>Id</p>
              <input
                value={id}
                className="form-control"
                id="id"
                name="id"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.errors.id}</p>
            </div>
            <div className="form-group">
              <p>Name</p>
              <input
                value={name}
                className="form-control"
                id="name"
                name="name"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.errors.name}</p>
            </div>
            <div className="form-group">
              <p>Price</p>
              <input
                value={price}
                data-type="number"
                className="form-control"
                id="price"
                name="price"
                type="text"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.errors.price}</p>
            </div>
          </div>
          <div className="col-6">
            <div className="form-group">
              <p>Img link</p>
              <input
                value={img}
                className="form-control"
                id="img"
                name="img"
                onChange={this.handleChange}
              />
              <p className="text-danger">{this.state.errors.img}</p>
            </div>
            <div className="form-group">
              <p>Product type</p>
              <select
                value={productType}
                className="form-control"
                id="productType"
                name="productType"
                onChange={this.handleChange}
              >
                <option>mobile</option>
                <option>tablet</option>
                <option>laptop</option>
              </select>
            </div>

            <div className="form-group">
              <p>Product description</p>
              <textarea
                value={description}
                className="form-control"
                id="description"
                name="description"
                rows={3}
                onChange={this.handleChange}
              ></textarea>
              <p className="text-danger">{this.state.errors.description}</p>
            </div>
          </div>
        </div>
        <div className="card-footer">
          <button className="btn btn-success mx-2">Create</button>
          <button
            className="btn btn-primary mx-2"
            type="button"
            onClick={() => {
              this.props.updateProduct(this.state.productInfo);
            }}
          >
            Update
          </button>
        </div>
      </form>
    );
  }
}
