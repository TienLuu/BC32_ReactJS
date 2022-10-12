import React, { Component } from "react";
import Cart from "./Cart";

export default class Header extends Component {
   constructor(props) {
      super(props);

      this.state = {
         isOpen: false,
      };
   }

   handleToggleModal = () => {
      this.setState((state) => ({ isOpen: !state.isOpen }));
   };

   render() {
      const {
         carts,
         onHandleClearCarts,
         onHandleDeleteCartItem,
         onHanldeChangeQuantity,
      } = this.props;
      return (
         <header>
            <nav
               className="navbar navbar-expand-lg navbar-dark bg-dark"
               style={{ backgroundColor: "#e3f2fd" }}
            >
               <div className="container">
                  <a className="navbar-brand" href="#">
                     ShoesShop
                  </a>
                  <button
                     className="navbar-toggler d-lg-none"
                     type="button"
                     data-toggle="collapse"
                     data-target="#collapsibleNavId"
                     aria-controls="collapsibleNavId"
                     aria-expanded="false"
                     aria-label="Toggle navigation"
                  />
                  <div
                     className="collapse navbar-collapse"
                     id="collapsibleNavId"
                  >
                     <ul className="navbar-nav ms-auto mt-2 mt-lg-0">
                        <li className="nav-item">
                           <a className="nav-link active" href="#">
                              Home
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#">
                              About
                           </a>
                        </li>
                        <li className="nav-item">
                           <a className="nav-link" href="#">
                              Contact
                           </a>
                        </li>
                     </ul>
                     <div className="header__cart">
                        <button
                           type="button"
                           className="btn"
                           onClick={this.handleToggleModal}
                        >
                           <i className="bi bi-cart3 text-white"></i>
                        </button>
                        <div className="cart--number">
                           {carts.reduce((total, item) => {
                              return total + item.quantity;
                           }, 0)}
                        </div>
                     </div>
                     <div />
                  </div>
               </div>
            </nav>
            <Cart
               isOpen={this.state.isOpen}
               onClose={this.handleToggleModal}
               carts={carts}
               onHandleClearCartsTransit={onHandleClearCarts}
               onHandleDeleteCartItemTransit={onHandleDeleteCartItem}
               onHanldeChangeQuantityTransit={onHanldeChangeQuantity}
            />
         </header>
      );
   }
}
