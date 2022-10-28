import { useSelector, useDispatch } from "react-redux";
import { purchase, selectShowTime } from "../services/actions";
const MovieTicketInfo = () => {
   const ticket = useSelector((state) => state.ticket);
   const dispatch = useDispatch();

   const handleChange = (evt) => {
      const el = evt.target;

      dispatch(selectShowTime(el.type, el.value));
   };

   const handlePurchase = () => {
      dispatch(purchase());
   };

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
