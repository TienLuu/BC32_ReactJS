import { useEffect, useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { createUser } from "../services/actions/index";

const UserInfo = () => {
   const [userSelect, setUserSelect] = useState({
      userName: "",
      numberOfSeat: 0,
   });
   const inputRef = useRef();
   const dispatch = useDispatch();

   useEffect(() => {
      inputRef.current.focus();
   }, []);

   const handleSubmit = (evt) => {
      evt.preventDefault();
      if (!userSelect.userName || !userSelect.numberOfSeat) {
         alert("Please Enter your Name and Number of Seats");
         return;
      }

      dispatch(createUser(userSelect));
      setUserSelect({ userName: "", numberOfSeat: 0 });
   };

   const handleChange = (evt) => {
      const { name, value } = evt.target;
      setUserSelect((state) => ({ ...state, [name]: value }));
   };

   console.log(userSelect);
   return (
      <>
         <div className="ticket__userInfo">
            <form action="" onSubmit={handleSubmit}>
               <div>
                  <label htmlFor="userName">Name:</label>
                  <input
                     ref={inputRef}
                     value={userSelect.userName}
                     onChange={handleChange}
                     type="text"
                     name="userName"
                     id="userName"
                     placeholder="Enter Your Name"
                  />
               </div>
               <div>
                  <label htmlFor="numberOfSeat">Seats:</label>
                  <input
                     value={userSelect.numberOfSeat}
                     onChange={handleChange}
                     type="number"
                     name="numberOfSeat"
                     id="numberOfSeat"
                     min={1}
                     placeholder="Enter Number of Seats"
                  />
               </div>
               <button className="btn btn-success">Start Selecting</button>
            </form>
         </div>
      </>
   );
};

export default UserInfo;
