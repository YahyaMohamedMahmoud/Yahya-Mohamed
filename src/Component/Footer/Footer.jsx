import React from 'react';
import "./Footer.css";
import "./FooterResponsive.css";
import img1 from "../../img/yahya-high-resolution-logo-white-transparent.png";

export default function Footer() {
  return (
    <>
     <footer className='m-80 text-center'>
        <div className="container">
            <div className="lastSec">
                <div className="lastimg">
                    <a href="index.html">
                    <img src={img1} alt=""/>
                    </a>
                </div>
            </div>
            <div className="lastText mt-4">
                <div className="links">
                    <a href="#myWord" className='me-4'>
                        Works
                    </a>
                    <a href="#Skills" className='me-4'>
                        Skills
                    </a>
                    <a href="#Contact" className='me-4'>
                        Contact
                    </a>
                </div>
            </div>
            <div className="copy mt-4">
                <p>
                © 2024 All rights reserved by <a href="https://github.com/YahyaMohamedMahmoud">Yahya Mohamed</a>
                </p>
            </div>
        </div>
     </footer>
    </>
  )
}
