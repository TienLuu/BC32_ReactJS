import React from "react";

const Header = () => {
   return (
      <header>
         <nav
            className="navbar navbar-expand-lg navbar-dark bg-dark"
            style={{ backgroundColor: "#e3f2fd" }}
         >
            <div className="container px-lg-5">
               <a className="navbar-brand" href="#!">
                  Start Bootstrap
               </a>
               <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation"
               >
                  <span className="navbar-toggler-icon"></span>
               </button>
               <div
                  className="collapse navbar-collapse"
                  id="navbarSupportedContent"
               >
                  <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                     <li className="nav-item">
                        <a
                           className="nav-link active"
                           href="#!"
                           aria-current="page"
                        >
                           Home
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#!">
                           About
                        </a>
                     </li>
                     <li className="nav-item">
                        <a className="nav-link" href="#!">
                           Contact
                        </a>
                     </li>
                  </ul>
               </div>
            </div>
         </nav>
      </header>
   );
};

export default Header;
