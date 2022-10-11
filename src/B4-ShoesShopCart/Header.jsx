import React, { Component } from "react";

export default class Header extends Component {
   render() {
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
                     <div />
                  </div>
               </div>
            </nav>
         </header>
      );
   }
}
