import { CHOOSE_SEAT, CHANGE_SHOWTIME } from "../contants/ticketContans";

const initialState = {
   movieName: "Kẻ Cuồng Sát",
   date: "",
   time: "",
   seats: [],
};

const ticketReducer = (state = initialState, action) => {
   switch (action.type) {
      case CHOOSE_SEAT:
         const { seatSelected } = action.payload;

         // Kiểm tra có tồn tại chưa
         const index = state.seats.findIndex(
            (item) => item.soGhe === seatSelected.soGhe
         );

         // Nếu đã tồn tại thì clear => do user thay đổi lựa chọn ghế
         if (index !== -1) {
            const newSeats = [...state.seats];
            newSeats.splice(index, 1);
            return { ...state, seats: newSeats };
         }

         // Đổi trạng thái ghế trước khi cập nhật vô state
         const newSeatSelected = {
            ...seatSelected,
            daDat: !seatSelected.daDat,
         };

         return { ...state, seats: [...state.seats, newSeatSelected] };
      case CHANGE_SHOWTIME:
         const { dataShowTime } = action.payload;

         return { ...state, ...dataShowTime };
      case "PURCHASE":
         //Reset lại thông tin ticket và ghế đã chọn
         return { ...state, date: "", time: "", seats: [] };
      default:
         return state;
   }
};

export default ticketReducer;
