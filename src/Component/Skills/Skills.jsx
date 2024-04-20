import React, { useEffect } from 'react';
import "./Skills.css";
import "./SkillsResponsive.css";
import img1 from "../../img/html.png";
import img2 from "../../img/css.png";
import img3 from "../../img/js.svg";
import img4 from "../../img/react.svg";
import img5 from "../../img/wp.svg";
import img6 from "../../img/Bootstrap_logo.svg.png";
import AOS from 'aos';

export default function Skills() {
    useEffect(()=>{
        AOS.init(); 
    },[])
  return (
    <>
    {/* Skills sec start */}
    <section className="skills m-80" id="Skills">
    <div className="container">
    <div className="myworkText">
            <h2 className='heading text-center' data-aos="fade-down" data-aos-duration="1000">
            My Skills
            </h2>
        </div>
        <div className="myskills mt-5">
            <div className="row">
                <div className="col-xl-2 col-lg-3 col-md-4">
                    <div className="cardImg text-center">
                        <img src={img1} alt="" />
                        <h4 className='pt-3'>
                            HTML
                        </h4>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4">
                    <div className="cardImg text-center">
                        <img src={img2} alt="" />
                        <h4 className='pt-3'>
                            CSS
                        </h4>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4">
                    <div className="cardImg text-center">
                        <img src={img3} alt="" />
                        <h4 className='pt-3'>
                            javascript
                        </h4>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4">
                    <div className="cardImg text-center">
                        <img src={img4} alt="" />
                        <h4 className='pt-3'>
                            react js
                        </h4>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4">
                    <div className="cardImg text-center">
                        <img src={img5} alt="" />
                        <h4 className='pt-3'>
                            wordpress
                        </h4>
                    </div>
                </div>
                <div className="col-xl-2 col-lg-3 col-md-4">
                    <div className="cardImg text-center">
                        <img src={img6} alt="" />
                        <h4 className='pt-3'>
                            bootstrap
                        </h4>
                    </div>
                </div>
            </div>
        </div>
        </div>   
    </section>
    {/* Skills sec end */}
    </>
  )
}
