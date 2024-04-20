import React, { useState } from 'react';
import Logo from "../../img/yahya-high-resolution-logo-white-transparent.png";
import "./Header.css";

export default function Header() {
  const [fixed, setFixed] = useState(false);
  const [up, setUp] = useState(false);

  function headerFixed() {
    if (window.scrollY > 50) {
      setFixed(true);
      setUp(true);
    } else {
      setFixed(false);
      setUp(false);
    }
  }
  window.addEventListener("scroll", headerFixed);
  
  function toUp(){
   window.scroll({
    top:0
   })
  }

  return (
    <>
    <header className={`py-3 ${fixed ? "headerFixed" : "header py-3"}`}>
    <nav className="navbar navbar-expand-lg">
    <div className="container">
    <a className="navbar-brand"  href="index.html">
      <img src={Logo} alt="" />
    </a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link" aria-current="page" href="#myWord">Works</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Skills">Skills</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#Contact">Contact</a>
        </li>
        <a className='btn' href="mailto:yahiamohmed41@gmail.com">
          contact me!
        </a>
      </ul>
      
    </div>
  </div>
</nav>
    </header>
    <button className={`up ${up ? "show" : "up"}`} onClick={toUp}>
    <i className="fa-solid fa-arrow-up" ></i>
    </button>
    </>
  )
}
