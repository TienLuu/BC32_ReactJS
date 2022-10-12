import React, { Component } from "react";
import ProductItem from "./ProductItem";

export default class PropductList extends Component {
   render() {
      const { products, onHandleAddToCart } = this.props;
      return (
         <div className="container">
            <div className="row">
               {products.map((product) => {
                  return (
                     <div key={product.id} className="col-sm-3 my-4">
                        <ProductItem
                           product={product}
                           onHandleAddToCartTransit={onHandleAddToCart}
                        />
                     </div>
                  );
               })}
            </div>
         </div>
      );
   }
}
