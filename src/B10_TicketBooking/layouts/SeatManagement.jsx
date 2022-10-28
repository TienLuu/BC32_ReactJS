import React from "react";
import SeatItem from "./SeatItem";

const SeatManagement = ({ seats }) => {
   return (
      <>
         <div className="ticket__seatChoice">
            <div className="ticket__typeChose">
               <span className="seatSelected">Selected Seat</span>
               <span className="seatReserved">Reserved Seat</span>
               <span className="seatEmpty">Empty Seat</span>
            </div>
            <div className="ticket__seatList">
               <div className="screen-light" />
               <div className="wrapper">
                  {seats.map((seatLine, indexLine) => (
                     <div key={indexLine} className="seatLine">
                        <div>{seatLine.hang}</div>
                        {seatLine.danhSachGhe.map((seat, indexSeat) => (
                           <SeatItem
                              key={seat.soGhe}
                              number={indexSeat + 1}
                              isSeat={seatLine.hang}
                              seatInfo={seat}
                           />
                        ))}
                     </div>
                  ))}
               </div>
            </div>
         </div>
      </>
   );
};

export default SeatManagement;
