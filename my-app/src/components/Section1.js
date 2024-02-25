import React, { useState } from 'react';
import '../styles/App.css';
import bg1 from '../media/background1.jpg';
import bg2 from '../media/background2.png';
import bg3 from "../media/G1ESTATE.png";
import icon3Tabs from "../media/icon3Tabspng.png";
import icon1Tabs from "../media/icon1Tabs.png";
import icon2Tabs from "../media/icon2Tabs.png";
import arrowRight from "../media/arrowRight.png";
import whatsapplogo from "../media/whatsapplogo.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons'
import '../styles/App.css';
import logo from '../media/logo.png';
import googlefbrating from '../media/googleFBreview.png';
function Section1() {
    function openCity(evt, cityName) {
        var i, tabcontent, tablinks;
        tabcontent = document.getElementsByClassName("tabcontent");
        for (i = 0; i < tabcontent.length; i++) {
          tabcontent[i].style.display = "none";
        }
        tablinks = document.getElementsByClassName("tablinks");
        for (i = 0; i < tablinks.length; i++) {
          tablinks[i].className = tablinks[i].className.replace(" active", "");
        }
        document.getElementById(cityName).style.display = "block";
        evt.currentTarget.className += " active";
      }
    
    return (
<>
        <div className='main'>
             <header>
    <div className='logo-container'>
        <img src={logo} alt="Logo" className='logo'/>
    </div>
    <nav>
        <a href="#" className="nav-menu-item">Off Plan</a>
        <a href="#">Services</a>
        <a href="#">About Us</a>
        <a href="#">Blog</a>
        <FontAwesomeIcon icon={faEnvelope} className='envelopeIcon'/>
        <FontAwesomeIcon icon={faPhone} className='phoneIcon'/>
                    <button className='contactNav'>Contact Us</button>
        <a className='languageNav'>ENG </a>
        
    </nav>
</header>
            <div className='firstBg-container'>
                <img src={bg1} className='firstBg' /> 
            </div>
            <div className='secondBg-container'>
                <img src={bg2} className='secondBg' />
            </div>
            <div className='thirdBg-container'>
                <img src={bg3} className='thirdBg' />
            </div>
            <img src={whatsapplogo} className='whatsappLogo' width="110px" height="100px"/>
            <div className="section1">
                <img src={googlefbrating} alt="google/fb rating" />
                <h1 className='mainTitle'>G1 REAL ESTATE</h1>
                <p className='descriptionMain'>Discover Unrivaled Luxury in Dubai's Premier Real Estate Market</p>
                <div className='stat1'>
                    <h4 className='mainStat1'>38908</h4>
                    <p className='Stat1Description'>ORN</p>
                </div>
                <div className='stat2'>
                    <h4 className='mainStat2'>1259624</h4>
                    <p className='Stat2Description'>Company License Number</p>
                </div>
            </div>
       
            </div>
            <div className='section2'>
                <div className='tabSection'>
            <div className="tab">
        <button className="tablinks" onClick={(e) => openCity(e, 'London')}>Buy</button>
        <button className="tablinks" onClick={(e) => openCity(e, 'Paris')}>Rent</button>
        <button className="tablinks" onClick={(e) => openCity(e, 'Tokyo')}>List</button>
      </div>
        <div className='tabContent'>
                <div id="London" className="tabcontent">
                    <div className='part1tab'>
        <h3>Location</h3>
                        <input type="text" name="location" className='addressInput inputab1' placeholder='Select your area'/>
                        <img src={icon1Tabs} className='icon1Tabs' />
                        <span className='verticalLine'></span>  
                        </div>
                    <div className='part2tab'>
                    <h3>Property Type</h3>
                        <input type="text" name="location" className='addressInput inputab2' placeholder='Choose property type'/>
                        <img src={icon2Tabs} className='icon2Tabs' />
                        <span className='verticalLine'></span> 
                    </div>
                    <div className='part3tab'>
                    <h3>Budget</h3>
                        <input type="text" name="location" className='addressInput inputab3' placeholder='Select a budget'/>
                        <img src={icon3Tabs} className='icon3Tabs' />
                        <span className='verticalLine'></span> 
                    </div>
                    <button className='contactNav2'>Search</button>
      </div>
        
      <div id="Paris" className="tabcontent">
         
      </div>

      <div id="Tokyo" className="tabcontent">
        <h3>Tokyo</h3>
        <p>Tokyo is the capital of Japan.</p>
                        </div>
                        </div>
                </div>
                <div className='section2part2'>
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
            </div>
            
        </>
    )
}
export default Section1;