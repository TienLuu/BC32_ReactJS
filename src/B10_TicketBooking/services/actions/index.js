export const createUser = (userSelect) => {
   return { type: "CREATE_USERSELECT", payload: userSelect };
};

export const chooseSeat = (seatSelected) => {
   return { type: "CHOOSE_SEAT", payload: { seatSelected } };
};

export const selectShowTime = (typeEl, value) => {
   return { type: "CHANGE_SHOWTIME", payload: { [typeEl]: value } };
};

export const purchase = () => {
   return { type: "PURCHASE" };
};
