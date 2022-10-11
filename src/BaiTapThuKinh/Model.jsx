import React, { Component } from "react";

export default class Model extends Component {
   render() {
      const { url, name, desc } = this.props.glassesSelected;
      return (
         <div className="tryGlasses__model">
            <div className="model-left" style={{ width: 250, height: 250 }}>
               <div>
                  <img
                     style={{ width: 120, height: 40 }}
                     src="./glassesImage/v1.png"
                     alt="GlassesItem"
                  />
                  <div className="tryGlasses__text p-2">
                     <h4>GUCCI G8850U</h4>
                     <p>
                        Light pink square lenses define these sunglasses, ending
                        with amother of pearl effect tip.
                     </p>
                  </div>
               </div>
            </div>
            <div className="model-right" style={{ width: 250, height: 250 }}>
               {this.props.glassesSelected ? (
                  <div>
                     <img
                        style={{ width: 120, height: 40 }}
                        src={url}
                        alt={name}
                     />
                     <div className="tryGlasses__text p-2">
                        <h4>{name}</h4>
                        <p>{desc}</p>
                     </div>
                  </div>
               ) : null}
            </div>
         </div>
      );
   }
}
