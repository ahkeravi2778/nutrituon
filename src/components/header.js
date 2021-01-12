import React from "react";
import Logo from '../logo.svg';

function Header(){



return(
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <div className="container">
  
      <a href="/">
   <img className="logo-img" src={Logo} alt=""/>
      </a>
    <button
      className="navbar-toggler"
      type="button"
      data-mdb-toggle="collapse"
      data-mdb-target="#navbarRightAlignExample"
      aria-controls="navbarRightAlignExample"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <i className="fas fa-bars"></i>
    </button>
    <div className="collapse navbar-collapse" id="navbarRightAlignExample">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/new">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/new">Contact us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/new">About Us</a>
        </li>
        
      </ul>
    </div>
  </div>
</nav>
);
}


export default Header;