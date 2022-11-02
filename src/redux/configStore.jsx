import { combineReducers, createStore } from "redux";
import { colorCarReducer } from "./reducers/colorCarReducer";
import { demoBurgerReducer } from "./reducers/demoBurgerReducer";
import { demoGioHangReducer } from "./reducers/demoGioHangReducer";
import { numberReducer } from "./reducers/numberReducer";
import { qlsvReducer } from "./reducers/qlsvReducer";

const rootReducer = combineReducers({
  number: numberReducer,
  imgCar: colorCarReducer,
  qlsvReducer, //object literal
  demoGioHangReducer,
  demoBurgerReducer,
});

export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
