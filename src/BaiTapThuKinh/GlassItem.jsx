import React, { Component } from "react";

export default class GlassItem extends Component {
   render() {
      const { id, url, name } = this.props.glasses;
      return (
         <div className="tryGlasses__item mx-2 my-2">
            <button
               className="outline-none"
               onClick={() => this.props.onHandleSelectTransist(id)}
            >
               <img src={url} alt={name} style={{ width: 100, height: 40 }} />
            </button>
         </div>
      );
   }
}
