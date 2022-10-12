import React, { Component } from "react";
import "./styles.css";
import data from "./data.json";
import Footer from "./Footer";
import Header from "./Header";
import PropductList from "./PropductList";

export default class ShoesShop extends Component {
   constructor() {
      super();

      this.state = {
         carts: [],
      };
   }

   handleAddToCart = (product) => {
      const index = this.state.carts.findIndex(
         (item) => item.id === product.id
      );

      if (index === -1) {
         this.setState((state) => ({
            carts: [...state.carts, { ...product, quantity: 1 }],
         }));
      } else {
         const newCarts = [...this.state.carts];
         newCarts[index].quantity += 1;
         this.setState({ carts: newCarts });
      }
   };

   handleClearCarts = () => {
      this.setState({ carts: [] });
   };

   handleDeleteCartItem = (productId) => {
      const index = this.state.carts.findIndex((item) => item.id === productId);
      if (index === -1) return;

      const newCarts = [...this.state.carts];
      newCarts.splice(index, 1);
      this.setState({ carts: newCarts });
   };

   handleChangeQuantity = (productId, quantity) => {
      const index = this.state.carts.findIndex((item) => item.id === productId);

      const newCarts = [...this.state.carts];

      if (newCarts[index].quantity === 1 && quantity === -1) {
         newCarts.splice(index, 1);
         this.setState({ carts: newCarts });
      } else {
         newCarts[index].quantity += quantity;
         this.setState({ carts: newCarts });
      }
   };

   render() {
      return (
         <>
            <Header
               carts={this.state.carts}
               onHandleClearCarts={this.handleClearCarts}
               onHandleDeleteCartItem={this.handleDeleteCartItem}
               onHanldeChangeQuantity={this.handleChangeQuantity}
            />

            <main className="main py-5 bg-light">
               <PropductList
                  products={data}
                  onHandleAddToCart={this.handleAddToCart}
               />
            </main>

            <Footer />
         </>
      );
   }
}
