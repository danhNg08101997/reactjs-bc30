import React, { Component } from "react";
import { connect } from "react-redux";

class Menu extends Component {
  render() {
    let { burger } = this.props;
    return (
      <div>
        <h3>Chọn thức ăn</h3>
        <table className="table">
          <thead>
            <tr>
              <th>Thức ăn</th>
              <th>Số lượng</th>
              <th>Giá</th>
            </tr>
          </thead>
          <tbody>
            {burger.map((item, index) => {
              return (
                <tr key={index}>
                  <td>{item.name}</td>
                  <td>
                    <button
                      className="btn btn-warning mx-2"
                      onClick={() => {
                        let action = {
                          type: "CHANGE_QUANTITY",
                          payload: {
                            name: item.name,
                            quantity: 1,
                          },
                        };
                        this.props.dispatch(action);
                      }}
                    >
                      +
                    </button>
                    {item.quantity}
                    <button
                      className="btn btn-warning mx-2"
                      onClick={() => {
                        let action = {
                          type: "CHANGE_QUANTITY",
                          payload: {
                            name: item.name,
                            quantity: -1,
                          },
                        };
                        this.props.dispatch(action);
                      }}
                    >
                      -
                    </button>
                  </td>
                  <td>{this.props.menu[item.name]}</td>
                </tr>
              );
            })}
          </tbody>
          <tfoot>
            <tr className="text-end">
              <td colSpan={3}>
                Thành tiền:{" "}
                {burger.reduce((tt, item, index) => {
                  return tt + item.quantity * this.props.menu[item.name];
                }, 0)}
              </td>
            </tr>
          </tfoot>
        </table>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  burger: state.demoBurgerReducer.burger,
  menu: state.demoBurgerReducer.menu,
});

export default connect(mapStateToProps)(Menu);
