import React from 'react';
import owner from "../media/ownerpic.jpg";
import manager from "../media/managerpic.jpg";
import logo from "../media/logoOnly.png";
import arrowRight from "../media/arrowRight.png";
import arrowLeft from "../media/arrowLeft.png";
function Section7() {
    return (
        <>
            <div className='section8'>
                <div className='sec8Content'>
                    <p className='sec8des'>About G1 Real Estate</p>
                    <h4 className='sec8main'>Your Trusted Partner in Crafting Your Real Estate Success Story.</h4>
                    <p className='sec8Fullcontent'>
                        Welcome to G1 Real Estate, your gateway to luxury living in Dubai. Our mission is simple: to redefine opulence and sophistication in the real estate market, offering unparalleled service and expertise to every client.
                        <br />
                        <br />
                        Our vision is to be the premier destination for luxury property in Dubai, known for our commitment to excellence and our dedication to exceeding client expectations.
                        <br />
                                                <br />
                        At G1 Real Estate, our values guide everything we do. We believe in honesty, integrity, and transparency, and we strive to treat every client with the utmost respect and professionalism.
                        <br />
                        <br />
                        Whether you're looking to buy, sell, or invest in property, we're here to help you every step of the way. Trust G1 Real Estate to make your real estate dreams a reality.
                        <br/>

                    </p>
                    <button className='contactNav sec8team'>Meet the Team</button>
                    <button className='contactNav sec8findout'>Find out More</button>
                    <div className='arrowsec8'>
                    <img src={arrowLeft} className='arrowLeft sec8' />
                        <img src={arrowRight} className='arrowRight sec8' />
                        </div>
                </div>
                
                <div className='sec8rightSide'>
                <img src={manager} className='sec8manager' />
                    <img src={owner} alt="Notebook" className='sec8owner' />
                  
                    <div className='containersec8'>
                        
  <div class="content">
    <h4 className='ownerName'>Hamoodash Alameri</h4>
                            <p>CEO & Licensed Real<br />Estate Broker<br /><br />Languages:English, Arabic</p>
                            <img src={logo} className='logoOnly' />
  </div>
                </div>
                </div>
                
                </div>
        </>
    )
}
export default Section7;