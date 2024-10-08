import React, { useEffect } from 'react';
import "./Landing.css";
import "./landingResponsive.css";
import Cv from "../../CV/Yahia-Mohamed.pdf";
import photo from "../../img/me.jpg";
import AOS from 'aos';

export default function Landing() {
    useEffect(()=>{
        AOS.init(); 
    },[])
  return (
    <>
    {/* landing sec start */}
    <section className='landing'>
        <div className="container">
        <div className="text">
        <span className='hi'>HI</span>
        </div>
        <div className="landing2">
        <div className="row justify-content-between">
            <div className="col-xl-5 col-lg-6 col-md-7">
                <div className="landingText">
                <p className='who' data-aos="fade-right" data-aos-duration="2000">
                I am Yahya Mohamed
                </p>
                <h1 className='heading py-3' data-aos="fade-left" data-aos-duration="2000">
                Front End Developer
                </h1>
                <p className='brief' data-aos="fade-up" data-aos-duration="2000">
                I've dived into the intricacies of turning design
                concepts into interactive and responsive web
                pages
                </p>
                <div className="socail mt-4" data-aos="fade-up" data-aos-duration="2000">
                    <a href={Cv} download="Yahia_CV" target='_blank'>
                        <button className='download me-xl-3 me-lg-3 me-md-3'>
                            download cv <i className="fa-solid fa-download ms-1"></i>
                        </button>
                    </a>
                    <a href="https://github.com/YahyaMohamedMahmoud" className='link me-3' target='_blank'>
                    <i className="fa-brands fa-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/yahia-mohamed-5282a7218" className='link me-3' target='_blank'>
                    <i className="fa-brands fa-linkedin-in"></i>
                    </a>
                    <a href="https://www.facebook.com/yaahiamohamed?mibextid=ZbWKwL" className='link me-3' target='_blank'>
                    <i className="fa-brands fa-facebook"></i>
                    </a>
                    <a href="https://wa.me/+201146461602" className='link' target='_blank'>
                    <i className="fa-brands fa-whatsapp"></i>
                    </a>
                </div>
                </div>
            </div>
            <div className="col-xl-4 col-lg-5 col-md-5">
                <div className="landingImg m-sm-auto" data-aos="fade-zoom-in" data-aos-easing="linear" data-aos-duration="2000">
                <img src={photo} alt="" />
                </div>
            </div>
        </div>
        </div>
        </div>
    </section>
    {/* landing sec end */}
    </>
  )
}
