import SeatItem from "./SeatItem";

const SeatManagement = ({ seats }) => {
   console.log("Seat render");
   return (
      <>
         <div className="ticket__seatChoice">
            <div className="ticket__typeChose">
               <span className="seatSelected">Selected Seat</span>
               <span className="seatReserved">Reserved Seat</span>
               <span className="seatEmpty">Empty Seat</span>
            </div>
            <div className="ticket__seatList">
               <div className="screen-light"></div>
               <div className="wrapper">
                  {seats.map((line, indexLine) => (
                     <div key={indexLine} className="seatLine">
                        <div>{line.hang}</div>
                        {line.danhSachGhe.map((seat, indexSeat) => (
                           <SeatItem
                              key={seat.soGhe}
                              number={indexSeat + 1}
                              isSeat={line.hang}
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
