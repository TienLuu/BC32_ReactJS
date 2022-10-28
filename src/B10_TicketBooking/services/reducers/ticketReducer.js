const initialState = {
   movieName: "Kẻ Cuồng Sát",
   date: "",
   time: "",
   seats: [],
};

const ticketReducer = (state = initialState, action) => {
   switch (action.type) {
      case "CHOOSE_SEAT":
         const { seatSelected } = action.payload;

         // Kiểm tra có tồn tại chưa
         const index = state.seats.findIndex(
            (item) => item.soGhe === seatSelected.soGhe
         );

         if (index !== -1) {
            const newSeats = [...state.seats];
            newSeats.splice(index, 1);
            return { ...state, seats: newSeats };
         }

         // Đổi trạng thái
         const newSeatSelected = {
            ...seatSelected,
            daDat: !seatSelected.daDat,
         };

         return { ...state, seats: [...state.seats, newSeatSelected] };

      case "CHANGE_SHOWTIME":
         const { date, time } = action.payload;

         if (!date) return { ...state, time };
         return { ...state, date };

      case "PURCHASE":
         return { ...state, date: "", time: "", seats: [] };

      default:
         return state;
   }
};

export default ticketReducer;
