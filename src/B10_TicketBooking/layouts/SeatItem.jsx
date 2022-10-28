import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseSeat } from "../services/actions";
import cn from "classnames";

const SeatItem = ({ number, isSeat, seatInfo }) => {
   const [isSelected, setIsSelected] = useState(false);
   const { seats } = useSelector((state) => state.ticket);
   const { numberOfSeat } = useSelector((state) => state.userSelect);
   const dispatch = useDispatch();

   const handleSelect = () => {
      if (seatInfo.daDat || !numberOfSeat) {
         alert("Bấm hoài ta!");
         return;
      }

      if (seats.length > 0 && seats.length >= +numberOfSeat) {
         const index = seats.findIndex((item) => item.soGhe === seatInfo.soGhe);

         if (index !== -1) {
            setIsSelected(!isSelected);
            dispatch(chooseSeat(seatInfo));
            return;
         } else {
            alert("Thanh toán đi!");
            return;
         }
      }

      setIsSelected(!isSelected);
      dispatch(chooseSeat(seatInfo));
   };

   return (
      <div
         className={cn(
            { seat: isSeat },
            { colNumber: !isSeat },
            { active: isSelected },
            { selected: seatInfo.daDat }
         )}
         onClick={handleSelect}
      >
         {number}
      </div>
   );
};

export default SeatItem;
