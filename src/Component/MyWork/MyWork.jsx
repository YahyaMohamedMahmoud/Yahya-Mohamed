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
import project8 from '../../img/UMINO.png';
import project9 from "../../img/wordpress.png";
import project10 from "../../img/wordpress2.png";
import project11 from "../../img/wordpress3.png";
import project12 from "../../img/Roott Sa.png";
import AOS from 'aos';

export default function MyWork() {
    useEffect(()=>{
        AOS.init(); 
    },[])

    const [click , setClick] = useState(true);
    const [click2 , setClick2] = useState(false);
    const [click3 , setClick3] = useState(false);
    const [click4 , setClick4] = useState(false);
    const [click5 , setClick5] = useState(false);

    function change(){
        setClick(true)
        setClick2(false)
        setClick3(false)
        setClick4(false)
        setClick5(false)
    }
    function change2(){
        setClick(false)
        setClick2(true)
        setClick3(false)
        setClick4(false)
        setClick5(false)
    }
    function change3(){
        setClick(false)
        setClick2(false)
        setClick3(true)
        setClick4(false)
        setClick5(false)
    }
    function change4(){
        setClick(false)
        setClick2(false)
        setClick3(false)
        setClick4(true)
        setClick5(false)
    }
    function change5(){
        setClick(false)
        setClick2(false)
        setClick3(false)
        setClick4(false)
        setClick5(true)
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
                <button className={`bttn ${click5 ? "active" : "bttn"}`} onClick={change5}>
                    WordPress
                </button>
            </div>
        </div>
        <div className={`cards ${click ? "cards mt-4" : "d-none"}`} >
            <div className="row">
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/Watches-Project/" target='_blank'>
                            <img src={project1} alt="project" loading='lazy'/>
                           <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                            MIRORA Project
                            </h3>
                            <p>
                            "E-commerce watch store built with HTML, CSS, and JavaScript Plus API. 
                            Features dynamic product pages and interactive UI elements."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://umino-clothes.vercel.app/" target='_blank'>
                            <img src={project8} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           Umino Fashion Site
                            </h3>
                            <p>
                            "Modern fashion store developed using React and use Redux and Redux ToolKit Plus API. Includes responsive design and seamless user navigation."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/unsen-Project/" target='_blank'>
                            <img src={project2} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           Unsen Minimalist Store
                            </h3>
                            <p>
                            "Minimalist e-commerce site built with Html , CSS and JavaScript Plus API. Focused on a clean, user-friendly shopping experience."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://furniture-project-six.vercel.app/" target='_blank'>
                            <img src={project3} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           Modern.Co Home Decor
                            </h3>
                            <p>
                            "Home decor platform created with React js and API. Fully responsive with engaging, user-focused design elements."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://alrawafid-sa.com/" target='_blank'>
                            <img src={project9} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           Al Rawafid Platform
                            </h3>
                            <p>
                            "Home decor platform created with WordPress and WooCommerce. Fully responsive with engaging, user-focused design elements."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://advancewavetec.com/" target='_blank'>
                            <img src={project10} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           AWT Solutions Website
                            </h3>
                            <p>
                            "Corporate website built with WordPress. Tailored for technology services with a focus on client interaction."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://trustway.roott-sa.com/" target='_blank'>
                            <img src={project12} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           Roott Sa Website
                            </h3>
                            <p>
                            "Roott Sa website created using WordPress. Fully responsive with engaging, user-focused design elements."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://hakapetk.com/" target='_blank'>
                            <img src={project11} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           Hakapetk Website
                            </h3>
                            <p>
                            "Hakapetk website created using WordPress and WooCommerce. Focuses on ease of navigation and responsive design."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/Raqamyat-Project/" target='_blank'>
                            <img src={project4} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           Raqamyat Solutions Platform
                            </h3>
                            <p>
                            "Fintech site developed using HTML and CSS, designed to showcase financial solutions and amplify revenue growth."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/Charity-Project/" target='_blank'>
                            <img src={project5} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                          Charity Platform
                            </h3>
                            <p>
                            "Charity website created using HTML and CSS. Engages users to contribute to social causes with ease."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/Frontend-Test/" target='_blank'>
                            <img src={project6} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           STVDY Project Management Tool
                            </h3>
                            <p>
                            "Project management tool built with HTML and CSS. Offers a clean interface to streamline team collaboration and analytics."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/Capital-shop-Project/" target='_blank'>
                            <img src={project7} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           Capitol Shop Fashion Site
                            </h3>
                            <p>
                            "Fashion e-commerce site built using HTML and CSS. Tailored for a smooth shopping experience with a stylish look."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${click2 ? "cards mt-4" : "d-none"}`}>
        <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://umino-clothes.vercel.app/" target='_blank'>
                            <img src={project8} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           Umino Fashion Site
                            </h3>
                            <p>
                            "Modern fashion store developed using React and use Redux and Redux ToolKit Plus API. Includes responsive design and seamless user navigation."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://furniture-project-six.vercel.app/" target='_blank'>
                            <img src={project3} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           Modern.Co Home Decor
                            </h3>
                            <p>
                            "Home decor platform created with React js and API. Fully responsive with engaging, user-focused design elements."
                            </p>
                           </div>
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
                            <img src={project1} alt="project" loading='lazy'/>
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                            MIRORA Project
                            </h3>
                            <p>
                            "E-commerce watch store built with HTML, CSS, and JavaScript Plus API. 
                            Features dynamic product pages and interactive UI elements."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://umino-clothes.vercel.app/" target='_blank'>
                            <img src={project8} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           Umino Fashion Site
                            </h3>
                            <p>
                            "Modern fashion store developed using React and use Redux and Redux ToolKit Plus API. Includes responsive design and seamless user navigation."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/unsen-Project/" target='_blank'>
                            <img src={project2} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           Unsen Minimalist Store
                            </h3>
                            <p>
                            "Minimalist e-commerce site built with Html , CSS and JavaScript Plus API. Focused on a clean, user-friendly shopping experience."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://furniture-project-six.vercel.app/" target='_blank'>
                            <img src={project3} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           Modern.Co Home Decor
                            </h3>
                            <p>
                            "Home decor platform created with React js and API. Fully responsive with engaging, user-focused design elements."
                            </p>
                           </div>
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
                            <img src={project4} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           Raqamyat Solutions Platform
                            </h3>
                            <p>
                            "Fintech site developed using HTML and CSS, designed to showcase financial solutions and amplify revenue growth."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/Charity-Project/" target='_blank'>
                            <img src={project5} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                          Charity Platform
                            </h3>
                            <p>
                            "Charity website created using HTML and CSS. Engages users to contribute to social causes with ease."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/Frontend-Test/" target='_blank'>
                            <img src={project6} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           STVDY Project Management Tool
                            </h3>
                            <p>
                            "Project management tool built with HTML and CSS. Offers a clean interface to streamline team collaboration and analytics."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://yahyamohamedmahmoud.github.io/Capital-shop-Project/" target='_blank'>
                            <img src={project7} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           Capitol Shop Fashion Site
                            </h3>
                            <p>
                            "Fashion e-commerce site built using HTML and CSS. Tailored for a smooth shopping experience with a stylish look."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
            </div>
        </div>
        <div className={`${click5 ? "cards mt-4" : "d-none"}`}>
        <div className="row">
        <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://alrawafid-sa.com/" target='_blank'>
                            <img src={project9} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           Al Rawafid Platform
                            </h3>
                            <p>
                            "Home decor platform created with WordPress and WooCommerce. Fully responsive with engaging, user-focused design elements."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://advancewavetec.com/" target='_blank'>
                            <img src={project10} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           AWT Solutions Website
                            </h3>
                            <p>
                            "Corporate website built with WordPress. Tailored for technology services with a focus on client interaction."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://trustway.roott-sa.com/" target='_blank'>
                            <img src={project12} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           Roott Sa Website
                            </h3>
                            <p>
                            "Roott Sa website created using WordPress. Fully responsive with engaging, user-focused design elements."
                            </p>
                           </div>
                        </a>
                    </div>
                </div>
                <div className="col-xl-6 col-lg-6 col-md-6">
                    <div className="cardimg mb-3">
                        <a href="https://hakapetk.com/" target='_blank'>
                            <img src={project11} alt="project" loading='lazy' />
                            <div className="projectDesc">
                           <h3 className='projectHead heading mb-2 mt-2'>
                           Hakapetk Website
                            </h3>
                            <p>
                            "Hakapetk website created using WordPress and WooCommerce. Focuses on ease of navigation and responsive design."
                            </p>
                           </div>
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
