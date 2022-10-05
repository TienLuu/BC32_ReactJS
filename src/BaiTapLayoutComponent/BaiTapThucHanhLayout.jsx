import React from "react";
import Body from "./Body";
import Footer from "./Footer";
import Header from "./Header";
import "./styles.css";

const BaiTapThucHanhLayout = () => {
   return (
      <>
         <Header />
         <main className="wrapper">
            <Body />
         </main>
         <Footer />
      </>
   );
};

export default BaiTapThucHanhLayout;
