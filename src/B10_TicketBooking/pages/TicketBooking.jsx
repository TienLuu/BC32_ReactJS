import axios from "axios";
import useRequest from "../hooks/useRequest";
import UserInfo from "../layouts/UserInfo";
import SeatManagement from "../layouts/SeatManagement";
import MovieTicketInfo from "../layouts/MovieTicketInfo";
import "../assets/styles.scss";

const TicketBooking = () => {
   const { data = [], setData } = useRequest(async () => {
      const { data } = await axios.get(
         "https://62f50939535c0c50e76847d8.mockapi.io/seats"
      );
      return data;
   });

   const handlePurchaseSuccess = async (data) => {
      setData(data);
   };

   console.log("TicketBooking render");

   return (
      <div>
         <h1>CHOOSE SEAT</h1>
         <section className="ticket">
            <UserInfo />
            <SeatManagement seats={data} />
            <MovieTicketInfo
               onPurchaseSuccess={handlePurchaseSuccess}
               data={data}
            />
         </section>
      </div>
   );
};

export default TicketBooking;
