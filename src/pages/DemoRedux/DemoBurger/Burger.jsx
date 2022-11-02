import React, { Component } from "react";
import { connect } from "react-redux";

class Burger extends Component {
  renderToping = (name) => {
    let itemSalad = this.props.burger.find((item) => item.name === name);
    if (itemSalad) {
      let arrJSX = [];
      for (let index = 1; index <= itemSalad.quantity; index++) {
        let divSalad = <div className={name} key={index}></div>;
        arrJSX.push(divSalad);
      }
      return arrJSX;
    }
    return [];
  };
  render() {
    return (
      <div>
        <div className="breadTop"></div>
        {this.renderToping("salad")}
        {this.renderToping("cheese")}
        {this.renderToping("beef")}

        <div className="breadBottom"></div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.demoBurgerReducer.burger,
});

export default connect(mapStateToProps)(Burger);
