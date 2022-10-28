import { useState, useRef } from "react";
import seatList from "../data/seatList";
import MovieTicketInfo from "../layouts/MovieTicketInfo";
import SeatManagement from "../layouts/SeatManagement";
import UserInfo from "../layouts/UserInfo";
// import useRequest from "../hooks/useRequest";
import "../assets/styles.scss";

const TicketBooking = () => {
   //    const { data } = useRequest(async () => {
   //       const data = await seatList;
   //       return data;
   //    });

   return (
      <div>
         <h1>CHOOSE SEAT</h1>
         <section className="ticket">
            <UserInfo />
            <SeatManagement seats={seatList} />
            <MovieTicketInfo />
         </section>
      </div>
   );
};

export default TicketBooking;
