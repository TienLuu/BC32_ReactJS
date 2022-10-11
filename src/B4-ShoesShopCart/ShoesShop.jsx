import React, { Component } from "react";
import "./styles.css";
import Footer from "./Footer";
import Header from "./Header";
import PropductList from "./PropductList";

export default class ShoesShop extends Component {
   render() {
      return (
         <>
            <Header />

            <main className="main">
               <PropductList />
            </main>

            <Footer />
         </>
      );
   }
}
