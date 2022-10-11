import React, { Component } from "react";
import data from "./data.json";
import GlassList from "./GlassList";
import Model from "./Model";

export default class GlassManagement extends Component {
   constructor() {
      super();
      this.state = {
         glassesSelected: "",
      };
   }

   handleSelectGlasses = (id) => {
      this.setState({
         glassesSelected: data.find((glasses) => glasses.id === id),
      });
   };

   render() {
      return (
         <div className="tryGlasses__main my-5">
            <Model glassesSelected={this.state.glassesSelected} />
            <GlassList
               glassesArr={data}
               onHandleSelect={this.handleSelectGlasses}
            />
         </div>
      );
   }
}
