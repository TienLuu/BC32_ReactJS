import React, { Component } from "react";
import CartItem from "./CartItem";

export default class Cart extends Component {
   render() {
      if (!this.props.isOpen) return null;

      const {
         onClose,
         onHandleClearCartsTransit,
         onHandleDeleteCartItemTransit,
         onHanldeChangeQuantityTransit,
         onHandlePurchasesSuccessTransit,
         carts,
      } = this.props;
      return (
         <>
            <div
               className="modal fade show d-block"
               id="exampleModal"
               tabIndex={-1}
               aria-labelledby="exampleModalLabel"
               aria-hidden="true"
            >
               <div className="modal-dialog bg-dark">
                  <div className="modal-content">
                     <div className="modal-header">
                        <h5
                           className="modal-title text-uppercase"
                           id="exampleModalLabel"
                        >
                           Cart
                        </h5>
                        <button
                           type="button"
                           className="btn-close"
                           onClick={onClose}
                           aria-label="Close"
                        />
                     </div>
                     <div className="modal-body">
                        <table className="table">
                           <thead>
                              <tr>
                                 <th>#</th>
                                 <th>Tên sản phảm</th>
                                 <th>Hình ảnh</th>
                                 <th>Số lượng</th>
                                 <th>Giá</th>
                                 <th></th>
                              </tr>
                           </thead>
                           <tbody>
                              {carts.length !== 0 ? (
                                 carts.map((product, index) => {
                                    return (
                                       <CartItem
                                          key={product.id}
                                          product={product}
                                          stt={index + 1}
                                          onHandleDeleteCartItemTransit={
                                             onHandleDeleteCartItemTransit
                                          }
                                          onHanldeChangeQuantityTransit={
                                             onHanldeChangeQuantityTransit
                                          }
                                       />
                                    );
                                 })
                              ) : (
                                 <tr className="cart-empty mt-2">
                                    Không có sản phẩm trong giỏ hàng
                                 </tr>
                              )}
                           </tbody>
                        </table>
                     </div>
                     <div className="cart__total p-3">
                        <span className="me-5">Total</span>
                        <span className="">
                           {carts.reduce((total, item) => {
                              return total + item.price * item.quantity;
                           }, 0)}
                           $
                        </span>
                     </div>
                     <div className="modal-footer">
                        <button
                           type="button"
                           className="btn btn-secondary"
                           onClick={onHandlePurchasesSuccessTransit}
                        >
                           Purchases
                        </button>
                        <button
                           type="button"
                           className="btn btn-primary"
                           onClick={onHandleClearCartsTransit}
                        >
                           Clear All
                        </button>
                     </div>
                  </div>
               </div>
            </div>
            {/* Overlay */}
            <div className="modal-backdrop fade show" />
         </>
      );
   }
}
