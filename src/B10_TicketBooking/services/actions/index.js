import { CREATE_USERSELECT } from "../contants/userContant";
import { CHOOSE_SEAT, CHANGE_SHOWTIME } from "../contants/ticketContans";

export const createUserSelect = (userSelect) => {
   return { type: CREATE_USERSELECT, payload: userSelect };
};

export const chooseSeat = (seatSelected) => {
   return { type: CHOOSE_SEAT, payload: { seatSelected } };
};

export const selectShowTime = (dataShowTime) => {
   return { type: CHANGE_SHOWTIME, payload: { dataShowTime } };
};

export const purchase = () => {
   return { type: "PURCHASE" };
};
