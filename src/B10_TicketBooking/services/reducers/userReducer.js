import { CREATE_USERSELECT } from "../contants/userContant";

const inititalState = {
   userName: "",
   age: null,
   numberOfSeat: 0,
};

const userReducer = (state = inititalState, action) => {
   switch (action.type) {
      case CREATE_USERSELECT:
         const { userName, numberOfSeat } = action.payload;

         return { ...state, userName, numberOfSeat };
      case "PURCHASE":
         // Reset lại user select khi thanh toán
         return { ...state, userName: "", numberOfSeat: 0 };
      default:
         return state;
   }
};

export default userReducer;
