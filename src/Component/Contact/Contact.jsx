import React, { useEffect } from 'react';
import "./Contact.css";
import "./ContactResponsive.css";
import AOS from 'aos';


export default function Contact() {
    useEffect(()=>{
        AOS.init(); 
    },[])
  return (
    <>
    {/* contact sec start */}
    <section className='contact m-80' id="Contact">
        <div className="container">
            <div className="row justify-content-between align-items-center">
                <div className="col-xl-5 col-lg-6 col-md-7">
                <div className="myworkText" data-aos="fade-right" data-aos-duration="1000">
            <h2 className='heading text-center'>
            Let’s contact together
            </h2>
            <p className='brief we pt-3'>
            I design and code beautifully simple things and i love what i do. Just simple like that!
            </p>
                    </div>
                    <div className="contact1 mt-4" data-aos="fade-right" data-aos-duration="1000">
                    <form action="#">
                        <label htmlFor="email" className='d-block py-2'>
                           Email 
                        </label>
                        <input type="email" name="email" id="email" placeholder='Email Address' className='mail'/>
                        <label htmlFor="message" className='d-block py-3'>
                            Your Message
                        </label>
                        <textarea name="message" id="message" cols="30" rows="10" placeholder='Message' className='mail'></textarea>
                        <button className='send mt-5'>
                            Send
                        </button>
                    </form>
                    </div>
                </div>
                <div className="col-xl-5 col-lg-5 col-md-5" data-aos="fade-zoom-in" data-aos-duration="1000">
               <div className="contact2 d-xl-flex d-lg-flex d-md-flex align-items-center mb-5">
               <div className="cardcontact me-4">
                    <span className='awsome'>
                    <i className="fa-solid fa-phone-volume"></i>     
                    </span>
                </div>  
                <div className="cardContact2">
                    <h5 className='mb-2'>
                      Phone      
                    </h5>  
                    <a href="https://wa.me/+201146461602" target='_blank'>
                    +201146461602    
                    </a>  
                </div>
               </div>
               <div className="contact2 d-xl-flex d-lg-flex d-md-flex align-items-center mb-5">
               <div className="cardcontact me-4">
                    <span className='awsome'>
                    <i className="fa-regular fa-envelope"></i>   
                    </span>
                </div>  
                <div className="cardContact2">
                    <h5 className='mb-2'>
                      Email      
                    </h5>  
                    <a href="mailto:yahiamohmed41@gmail.com" target='_blank'>
                    yahiamohmed41@gmail.com    
                    </a>  
                </div>
               </div>
               <div className="contact2 d-xl-flex d-lg-flex d-md-flex align-items-center mb-5">
               <div className="cardcontact me-4">
                    <span className='awsome'>
                    <i className="fa-solid fa-location-dot"></i>    
                    </span>
                </div>  
                <div className="cardContact2">
                    <h5 className='mb-2'>
                      Address      
                    </h5>  
                    <a href="#" target='_blank'>
                     Cairo   
                    </a>  
                </div>
               </div>
                </div>
            </div>
        </div>
    </section>
    {/* contact sec end */}
    </>
  )
}
