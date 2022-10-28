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
    url: "./glassesImage/v2.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 3,
    price: 30,
    name: "DIOR D6700HQ",
    url: "./glassesImage/v3.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 4,
    price: 70,
    name: "DIOR D6005U",
    url: "./glassesImage/v4.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 5,
    price: 40,
    name: "PRADA P8750",
    url: "./glassesImage/v5.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 6,
    price: 60,
    name: "PRADA P9700",
    url: "./glassesImage/v6.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 7,
    price: 80,
    name: "FENDI F8750",
    url: "./glassesImage/v7.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 8,
    price: 100,
    name: "FENDI F8500",
    url: "./glassesImage/v8.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
  {
    id: 9,
    price: 60,
    name: "FENDI F4300",
    url: "./glassesImage/v9.png",
    desc: "Light pink square lenses define these sunglasses, ending with amother of pearl effect tip. ",
  },
];
export default class BaiTapThuKinh extends Component {
  render() {
    return (
      <div className="bg-thu-kinh">
        <div className="content-cover">
          <div className="header-content text-white text-center">
            <div className="container">
              <h2>TRY GLASSES APP ONLINE</h2>
            </div>
          </div>
          <div className="container">
            <div className="row">
              <div className="col-4 mt-2">
                <img src="./img/glassesImage/model.jpg" alt="..." />
              </div>
              <div className="col-4"></div>
              <div className="col-4 mt-2">
                <img src="./img/glassesImage/model.jpg" alt="..." />
              </div>
              <div className="col-12 mt-5">
                <div className="border">
                  adc
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
