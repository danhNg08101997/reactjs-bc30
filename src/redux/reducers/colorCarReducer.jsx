const stateDefault = './img/product-car/steel-car.jpg'

export const colorCarReducer = (state = stateDefault, action) => {
    switch (action.type) {
      case "CHANGE_COLOR": {
        state = action.imgCar;
        return state;
      }
      default:
        return state;
    }
  }