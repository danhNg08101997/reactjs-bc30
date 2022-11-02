const stateDefault = {
  burger: [
    { name: "salad", quantity: 1 },
    { name: "cheese", quantity: 1 },
    { name: "beef", quantity: 1 },
  ],
  menu: {
    salad: 10,
    cheese: 20,
    beef: 30,
  },
};
export const demoBurgerReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "CHANGE_QUANTITY": {
      let { name, quantity } = action.payload;
      let burgerUpdate = [...state.burger];
      let item = burgerUpdate.find((p) => p.name === name);
      if (item) {
        item.quantity += quantity;
        if (item.quantity < 1) {
          // alert(`Bạn không muốn dùng ${name}`);
          // item.quantity = 0;
          if (window.confirm(`Bạn không muốn dùng ${name}`)) {
            item.quantity = 0;
          } else {
            item.quantity = 1;
          }
        }
      }
      state.burger = burgerUpdate;
      return { ...state };
    }
    default:
      return state;
  }
};
