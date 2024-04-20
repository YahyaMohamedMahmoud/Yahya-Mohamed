import React, { useEffect, useState } from 'react';
import "./MyWork.css";
import "./MyworkResponsive.css";
import project1 from "../../img/project-watches-web.png";
import project2 from "../../img/project-unsen-web.png";
import project3 from "../../img/Modern.png";
import project4 from "../../img/raqamyat-web.png";
import project5 from "../../img/Charity-web.png";
import project6 from "../../img/Stvdy-web.png";
import project7 from "../../img/capital-web.png";
import AOS from 'aos';

export default function MyWork() {
    useEffect(()=>{
        AOS.init(); 
    },[])

    const [click , setClick] = useState(true);
    const [click2 , setClick2] = useState(false);
    const [click3 , setClick3] = useState(false);
    const [click4 , setClick4] = useState(false);

    function change(){
        setClick(true)
        setClick2(false)
        setClick3(false)
        setClick4(false)
    }
    function change2(){
        setClick(false)
        setClick2(true)
        setClick3(false)
        setClick4(false)
    }
    function change3(){
        setClick(false)
        setClick2(false)
        setClick3(true)
        setClick4(false)
    }
    function change4(){
        setClick(false)
        setClick2(false)
        setClick3(false)
        setClick4(true)
    }

  return (
    <>
    {/* mywork sec start */}
    <section className='mywork m-80' id="myWord">
       <div className="container">
        <div className="myworkText">
            <h2 className='heading text-center' data-aos="fade-up" data-aos-duration="1000">
            My Recent Works
            </h2>
            <p className='brief we text-center m-auto pt-3' data-aos="fade-right" data-aos-duration="1000">
            I put your ideas and thus your wishes in the form of a unique web project that inspires you and you customers.
            </p>
        </div>
        <div className="app">
            <div className="router mt-5 text-center">
                <button className={`bttn bttn2 ${click ? "active" : "bttn"}`} onClick={change}>
                    all
                </button>
                <button className={`bttn ${click2 ? "active" : "bttn"}`} onClick={change2}>
                    react
                </button>
                <button className={`bttn ${click3 ? "active" : "bttn"}`} onClick={change3}>
                    e-commerce
                </button>
                <button className={`bttn bttn3 ${click4 ? "active" : "bttn bttn3"}`} onClick={change4}>
                    ui/ux
                </button>
            </div>
        </div>
        <div className={`cards ${click ? "cards mt-4" : "d-none"}`} >
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/Watches-Project/" target='_blank'>
                            <img src={project1} alt="" />
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/unsen-Project/" target='_blank'>
                            <img src={project2} alt="" />
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://github.com/YahyaMohamedMahmoud/Furniture-Project" target='_blank'>
                            <img src={project3} alt="" />
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/Raqamyat-Project/" target='_blank'>
                            <img src={project4} alt="" />
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/Charity-Project/" target='_blank'>
                            <img src={project5} alt="" />
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/Frontend-Test/" target='_blank'>
                            <img src={project6} alt="" />
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/Capital-shop-Project/" target='_blank'>
                            <img src={project7} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${click2 ? "cards mt-4" : "d-none"}`}>
        <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://github.com/YahyaMohamedMahmoud/Furniture-Project" target='_blank'>
                            <img src={project3} alt="" />
                        </a>
                    </div>
                </div>
        </div>
        </div>
        <div className={`${click3 ? "cards mt-4" : "d-none"}`}>
        <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/Watches-Project/" target='_blank'>
                            <img src={project1} alt="" />
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/unsen-Project/" target='_blank'>
                            <img src={project2} alt="" />
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://github.com/YahyaMohamedMahmoud/Furniture-Project" target='_blank'>
                            <img src={project3} alt="" />
                        </a>
                    </div>
                </div>
        </div>
        </div>
        <div className={`${click4 ? "cards mt-4" : "d-none"}`}>
            <div className="row">
            <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/Raqamyat-Project/" target='_blank'>
                            <img src={project4} alt="" />
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/Charity-Project/" target='_blank'>
                            <img src={project5} alt="" />
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/Frontend-Test/" target='_blank'>
                            <img src={project6} alt="" />
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/Capital-shop-Project/" target='_blank'>
                            <img src={project7} alt="" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
        </div>     
        </section>
    {/* mywork sec end */}
    </>
  )
}
