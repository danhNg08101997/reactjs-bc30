import React, { Component } from "react";
import "../assets/styles/style.css";

const dataGlasses = [
  {
    id: 1,
    price: 30,
    name: "GUCCI G8850U",
    url: "./img/glassesImage/v1.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 2,
    price: 50,
    name: "GUCCI G8759H",
    url: "./img/glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./img/glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./img/glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./img/glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./img/glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./img/glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./img/glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./img/glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];
export default class BaiTapThuKinh extends Component {
  state = {
    glassesCurrent: {
      id: 1,
      price: 30,
      name: "GUCCI G8850U",
      url: "./img/glassesImage/v9.png",
      desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
    },
  };

  renderGlasses = () => {
    return dataGlasses.map((glassesItem, index) => {
      return (
        <img
          src={glassesItem.url}
          alt="..."
          key={index}
          width={100}
          style={{ cursor: "pointer" }}
          className="mx-2 p-1 "
          onClick={() => {
            this.changeGlasses(glassesItem);
          }}
        />
      );
    });
  };
  changeGlasses = (newGlasses) => {
    this.setState({
      glassesCurrent: newGlasses,
    });
  };
  render() {
    const keyFrame = `@keyframes animationChangeGlasses${Date.now()} {
      from{
          width: 0;
          opacity: 0;
          transform: rotate(45deg);
      }
      to{
          width: 130px;
          opacity: 0.8;
          transform: rotate(0deg);
      }
  }`;
    const tryGlasses = {
      animation: `animationChangeGlasses${Date.now()} 1s`,
    };
    return (
      <div className="bg-thu-kinh">
        <style>{keyFrame}</style>
        <div className="content-cover">
          <div className="header-content text-white text-center">
            <div className="container">
              <h2>TRY GLASSES APP ONLINE</h2>
            </div>
          </div>
          <div className="container">
            <div className="row text-center">
              <div className="col-6 mt-2">
                <div className="position-relative">
                  <img
                    className="position-absolute"
                    src="./img/glassesImage/model.jpg"
                    alt="..."
                    width={200}
                  />
                  <img
                    style={tryGlasses}
                    className="position-absolute try-glasses"
                    src={this.state.glassesCurrent.url}
                    alt="..."
                  />
                </div>
                <div className="position-relative info-glasses">
                  <p className="fw-bold text-primary">
                    {this.state.glassesCurrent.name}
                  </p>
                  <p style={{ fontSize: "10px" }}>
                    {this.state.glassesCurrent.desc}
                  </p>
                </div>
              </div>
              <div className="col-6 mt-2">
                <img src="./img/glassesImage/model.jpg" alt="..." width={200} />
              </div>
              <div className="col-12 mt-5 bg-light d-flex justify-content-center p-5">
                {this.renderGlasses()}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
