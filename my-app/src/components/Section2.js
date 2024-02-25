import React, { useState } from 'react';
import '../styles/App.css';
import sliderpic1 from "../media/sliderpic1.jpg";
import sliderpic2 from "../media/sliderpic2.jpg";
import sliderpic3 from "../media/sliderpic3.jpg";
import icon1 from "../media/bedicon.png";
import icon2 from "../media/shower.png";
import icon3 from "../media/graphicon.png";
import testimonial from "../media/testimonial.png";
import company1 from "../media/logo1.png";
import company2 from "../media/logo2.png";
import company3 from "../media/logo3.png";
import company4 from "../media/logo4.png";
function Section2() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const pictures = [sliderpic1, sliderpic2, sliderpic3];

    const handleArrowClick = (direction) => {
        if (direction === 'left' && currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        } else if (direction === 'right' && currentIndex < pictures.length - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };
    return (
        <>
            <div className='section3'>
                <div class="card card1">
                <div className='card-content'>
                            <span className='arrowLeftcard' onClick={() => handleArrowClick('left')}>&lt;</span>
                        
  <img src={sliderpic1} alt="Avatar" className='imageCard' />
                    <div class="container">
                        <button className='cardbtn'>Buy</button>
                        
    <h4 className='maincardtxt'>Palm Paradise</h4>
                        <p className='carddescription'>Frond M, Palm Jumeirah, Dubai</p>
    <div className='icons'>
    <img src={icon1} className='bedicon' /> 
    <p className='descriptionIcon'>5 Bed</p>
    <img src={icon2} className='showericon' /> 
    <p className='descriptionIcon'>3 Bat R</p>    
    <img src={icon3} className='growthicon' /> 
                            <p className='descriptionIcon'>10x16m</p>        
                        </div>   
                        <div className='lastCard'>
                            <button className='cardbtn3'>Book Now</button>
                            <span className='cardPrice'>3,750,000 AED</span>
                        </div>
                        </div>
                        </div>
                </div>
                <div class="card card2">
  <img src={sliderpic2} alt="Avatar" className='imageCard' />
                    <div class="container">
        <button className='cardbtn'>Rent</button>
    <h4 className='maincardtxt'>Marina Views</h4>
                        <p className='carddescription'>Dubai Marina, Dubai</p>
    <div className='icons'>
    <img src={icon1} className='bedicon' /> 
    <p className='descriptionIcon'>8 Bed</p>
    <img src={icon2} className='showericon' /> 
    <p className='descriptionIcon'>6 Bat R</p>    
    <img src={icon3} className='growthicon' /> 
                            <p className='descriptionIcon'>20x16m</p>        
                        </div>   
                        <div className='lastCard'>
                            <button className='cardbtn3'>Book Now</button>
                            <span className='cardPrice'>1,200,000 AED</span>
                        </div>
  </div>
                </div>
                <div class="card card3">
                    <div className='card-content'>
                <span className='arrowRightcard'>&gt;</span>
  <img src={sliderpic3} alt="Avatar" className='imageCard' />
                    <div class="container">
                        <button className='cardbtn'>Sale</button>
                                                  
                        
    <h4 className='maincardtxt'>Desert Dream</h4>
                        <p className='carddescription'>Burj Khalifa District, Downtown Dubai</p>
    <div className='icons'>
    <img src={icon1} className='bedicon' /> 
    <p className='descriptionIcon'>3 Bed</p>
    <img src={icon2} className='showericon' /> 
    <p className='descriptionIcon'>7 Bat R</p>    
    <img src={icon3} className='growthicon' /> 
                            <p className='descriptionIcon'>40x16m</p>        
                        </div>   
                        <div className='lastCard'>
                            <button className='cardbtn3'>Book Now</button>
                            <span className='cardPrice'>4,200,000 AED</span>
                        </div>
  </div>
                    </div>
                </div>
                <div className='section3Testimonial'>
                    <div className='reviewDetails'>
                    <h4 className='nameTestimonial'> Jennifer Smith</h4>
                        <p>Tech Enterprenur</p>
                    </div>
                
                    <div className='testimonialReview'>
                    <img src={testimonial} className="testimonialimg" />
                        <span className='reviewDescription'>G1 made my Dubai property investment effortless. Their top-notch service and
                            expertise exceeded my expectations. Highly recommend for any investor.</span>
                    </div>
              
                </div>
                <hr className='hrReview' />
                <div className='partners'>
                    <h4 className='ourPartners'>Our Trusted Partners</h4>
                    <div className='companyImages'>
                        <img src={company1} className="company1" />
                        <img src={company2} className="company2" />
                        <img src={company3} className="company3" />
                        <img src={company4} className="company4" />
                        </div>
                </div>
            </div>
          
        </>
    )
}
export default Section2;