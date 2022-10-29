import { useSelector, useDispatch } from "react-redux";
import { selectShowTime, purchase } from "../services/actions";

const MovieTicketInfo = ({ onPurchaseSuccess, data }) => {
   const ticket = useSelector((state) => state.ticket);
   const dispatch = useDispatch();

   // Thay đổi lựa chọn ngày và giờ chiếu
   const handleChange = (e) => {
      const el = e.target;

      dispatch(selectShowTime({ [el.type]: el.value }));
   };

   // Xử lý thanh toán
   const handlePurchase = async () => {
      // Kiểm tra seats # rỗng sau đó dispatch action
      if (!ticket.seats.length) {
         alert("Chọn chỗ ngồi trước khi thanh toán!");
         return;
      }

      // Đổi trạng thái daDat trên data
      const newData = [...data];
      newData.forEach((seatLine, indexSeatLine) => {
         ticket.seats.forEach((item) => {
            seatLine.danhSachGhe.forEach((seatInfo, indexSeat) => {
               if (item.soGhe === seatInfo.soGhe) {
                  newData[indexSeatLine].danhSachGhe[indexSeat].daDat = true;
               }
            });
         });
      });

      onPurchaseSuccess(newData);
      dispatch(purchase());
   };

   console.log("Movie render");

   return (
      <>
         <div className="ticket__details">
            <div className="ticket__movie">
               <span>Movie:</span>
               <span>{ticket.movieName}</span>
            </div>
            <div className="ticket__date">
               <label htmlFor="date">Date: </label>
               <input type="date" value={ticket.date} onChange={handleChange} />
            </div>
            <div className="ticket__time">
               <label htmlFor="time">Time:</label>
               <input type="time" value={ticket.time} onChange={handleChange} />
            </div>
            <div className="ticket__seat">
               <span>Seats:</span>
               <span>{ticket.seats.map((item) => item.soGhe).join(", ")}</span>
            </div>
            <div className="ticket__totalPrice">
               <span>Total Price:</span>
               <span>
                  {ticket.seats.reduce((total, item) => {
                     return (total += item.gia);
                  }, 0)}{" "}
                  VNĐ
               </span>
            </div>
            <div>
               <button className="btn btn-success" onClick={handlePurchase}>
                  Purchase
               </button>
            </div>
         </div>
      </>
   );
};

export default MovieTicketInfo;
