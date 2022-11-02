const stateDefault = 1;

export const numberReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "TANG_SO_LUONG": {
      state = action.newNumber;
      return state;
    }
    case "GIAM_SO_LUONG": {
      state = action.newNumber;
      return state;
    }

    default:
      return state;
  }
};
