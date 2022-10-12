import React, { Component } from "react";

export default class ProductItem extends Component {
   render() {
      const { onHandleAddToCartTransit } = this.props;
      const { image, name, price, id } = this.props.product;
      return (
         <div className="card text-left" style={{ minHeight: 400 }}>
            <img className="card-img-top" src={image} alt={name} />
            <div className="card-body">
               <h4 className="card-title" style={{ minHeight: 60 }}>
                  {name}
               </h4>
               <p className="card-text">{price}$</p>
               <button
                  className="btn btn-primary"
                  onClick={() => onHandleAddToCartTransit(this.props.product)}
               >
                  Add to Cart
               </button>
            </div>
         </div>
      );
   }
}
