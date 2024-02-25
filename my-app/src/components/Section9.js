import React from 'react';
import arrowRight from "../media/arrowRight.png";
import arrowLeft from "../media/arrowLeft.png";
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
function Section9() {
    return (
        <>
            <div className='section10'>
            <div className='section2part2 section10part2'>
                    <hr className='hr1'/>
                    <p className='premiumhead'>PREMIUM</p>
                    <div className='featuredProperties'>
                        <h3 className='featuredhead'>Our Featured Properties</h3>
                        <div className='rightsideFeatured'>
                        <p className='featuredcta'>Explore All</p>
                            <img src={arrowRight} className='arrowRight' />
                            </div>
                    </div>
                </div>
                <div className='section3'>
                <div class="card card1 cardsec10">
                <div className='card-content'>
                            <span className='arrowLeftcard' >&lt;</span>
                        
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
                <div class="card card2 cardsec10">
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
                <div class="card card3 cardsec10">
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
                    <div className='contactFormPart'>
                    <p className='sec8des'>Let's Connect</p>
                        <h4 className='sec8main'>Get your free consultation now!</h4>
                        <p className='sec8Fullcontent'>
                        Ready to take the next step? Fill out the form below and let's start the conversation. 
            <br/><br/>
Whether you're looking to buy, sell, or just have a question, we're here to help. Get in touch today and discover how G1 Real Estate can make your real estate dreams a reality.

                        
                    </p>
                </div>
                </div>
                
                </div>
        </>
    )
}
export default Section9;