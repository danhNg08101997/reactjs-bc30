const stateDefault = {
  arrSinhVien: [
    { id: 1, name: "Mr.Danh" },
    { id: 2, name: "Mss.Hong" },
  ],
  sinhVien: { id: "", name: "" },
};
export const qlsvReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "HANDLE_CHANGE_INPUT": {
      let { id, value } = action;
      state.sinhVien[id] = value;
      state.sinhVien = { ...state.sinhVien };
      return { ...state }; //immutable
    }
    case "HANDLE_SUBMIT": {
      //bước 1: lấy dữ liệu từ action ra
      let { sinhVien } = action;
      //b2: clone state(object, array)
      let arrSinhVienUpdate = [...state.arrSinhVien];
      arrSinhVienUpdate.push(sinhVien);
      //b3 cập nhật lại state
      state.arrSinhVien = arrSinhVienUpdate;
      return { ...state };
    }
    default:
      return state;
  }
};
