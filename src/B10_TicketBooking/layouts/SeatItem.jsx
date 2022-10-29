import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { chooseSeat } from "../services/actions";
import cn from "classnames";

const SeatItem = ({ number, isSeat, seatInfo }) => {
   const [isSelected, setIsSelected] = useState(false);
   const { seats } = useSelector((state) => state.ticket);
   const { numberOfSeat } = useSelector((state) => state.userSelect);
   const dispatch = useDispatch();

   const handleSelect = () => {
      // Xử lý việc chọn ghế đã được đặt và yêu cầu có numberOfSeat
      if (!numberOfSeat) {
         alert("Please Enter your Name and Number of Seats");
         return;
      } else if (seatInfo.daDat) {
         alert("Người ta đặt rồi");
         return;
      } else if (!isSeat) {
         alert("Bấm lung tung!");
         return;
      }

      if (seats.length > 0 && seats.length === numberOfSeat) {
         const index = seats.findIndex((item) => item.soGhe === seatInfo.soGhe);

         if (index !== -1) {
            // Nếu index tồn tại => Cập nhật lại local state và dispatch lên action
            setIsSelected(!isSelected);
            dispatch(chooseSeat(seatInfo));
            return;
         } else {
            // Ngược lại thì giới hạn số ghế chọn theo numberOfSeat
            alert(`Không được chọn hơn ${numberOfSeat} chỗ !`);
            return;
         }
      }

      // Cập nhật lại local state và dispatch lên action
      dispatch(chooseSeat(seatInfo));
      setIsSelected(!isSelected);
   };

   // Reset lại ghế đã chọn
   useEffect(() => {
      if (!seats.length && isSelected) {
         setIsSelected(!isSelected);
      }
   }, [seats]);

   // console.log("SeatItem redner", isSelected);
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
