import React, { Component } from "react";
import GlassItem from "./GlassItem";

export default class GlassList extends Component {
   render() {
      return (
         <div className="tryGlasses__list mt-5 p-4">
            {this.props.glassesArr.map((glasses) => {
               return (
                  <GlassItem
                     key={glasses.id}
                     glasses={glasses}
                     onHandleSelectTransist={this.props.onHandleSelect}
                  />
               );
            })}
         </div>
      );
   }
}
