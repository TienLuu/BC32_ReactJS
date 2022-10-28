import { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { chooseSeat } from "../services/actions";
import SeatItem from "./SeatItem";

const SeatLine = ({ lineName, seatPerLine }) => {
   let seatsSelected = useSelector((state) => state.ticket);

   const dispatch = useDispatch();

   console.log(seatsSelected);

   const handleSelect = (seat) => {
      const index = seatsSelected.findIndex(
         (item) => item.soGhe === seat.soGhe
      );

      if (index === -1) {
         seatsSelected = [...seatsSelected, { ...seat, daDat: !seat.daDat }];
         dispatch(chooseSeat(seatsSelected));
      } else {
         const newSeatsSelected = [...seatsSelected];
         newSeatsSelected.splice(index, 1);
         dispatch(chooseSeat(newSeatsSelected));
      }
   };

   return (
      <>
         <div className="seatLine">
            <div>{lineName}</div>
            {seatPerLine.map((item, index) => (
               <SeatItem
                  key={item.soGhe}
                  number={index + 1}
                  firstLine={!lineName}
                  seat={item}
                  onSelect={handleSelect}
               />
            ))}
         </div>
      </>
   );
};

export default SeatLine;
