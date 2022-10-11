import React, { Component } from "react";
import GlassManagement from "./GlassManagement";
import "./styles.css";

export default class TryGlassesApp extends Component {
   render() {
      return (
         <div className="tryGlasses">
            <div className="tryGlasses__content">
               <div className="tryGlasses__title text-center">
                  <h2 className="text-white text-uppercase">
                     Try glasses app online
                  </h2>
               </div>
               <GlassManagement />
            </div>
            <div className="overlay"></div>
         </div>
      );
   }
}
