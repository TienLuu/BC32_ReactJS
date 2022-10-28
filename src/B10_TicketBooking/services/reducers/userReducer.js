const inititalState = {
   userName: "",
   age: null,
   numberOfSeat: 0,
};

const userReducer = (state = inititalState, action) => {
   switch (action.type) {
      case "CREATE_USERSELECT":
         const { userName, numberOfSeat } = action.payload;
         return { ...state, userName, numberOfSeat };
      default:
         return state;
   }
};

export default userReducer;
