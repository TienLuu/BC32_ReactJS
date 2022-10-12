import React, { Component } from "react";

export default class CartItem extends Component {
   render() {
      const {
         name,
         image,
         quantity,
         price,
         id,
         onHanldeChangeQuantityTransit,
      } = this.props.product;
      return (
         <>
            <tr>
               <td>{this.props.stt}</td>
               <td>{name}</td>
               <td>
                  <img
                     src={image}
                     alt={name}
                     style={{ width: 50, height: 50 }}
                  />
               </td>
               <td className="cart__quantity">
                  <button
                     className="btn quantity--decrease"
                     onClick={onHanldeChangeQuantityTransit(id, -1)}
                  >
                     <i className="bi bi-caret-left"></i>
                  </button>
                  <span>{quantity}</span>
                  <button
                     className="btn quantity--increase"
                     onClick={onHanldeChangeQuantityTransit(id, 1)}
                  >
                     <i className="bi bi-caret-right"></i>
                  </button>
               </td>
               <td>{price}</td>
               <td>
                  <button
                     className="btn cart__trash"
                     onClick={() =>
                        this.props.onHandleDeleteCartItemTransit(id)
                     }
                  >
                     <i className="bi bi-trash"></i>
                  </button>
               </td>
            </tr>
         </>
      );
   }
}
