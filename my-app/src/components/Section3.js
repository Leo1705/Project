import React, { useState, useEffect } from 'react';
import dubaiarea1 from "../media/dubaiarea1.jpg";
import dubaiarea2 from "../media/dubaiarea2.jpg";
import dubaiarea3 from "../media/dubaiarea3.jpg";
import arrowRight from "../media/arrowRight.png";
import arrowLeft from "../media/arrowLeft.png";
function Section3() {
    const [slideIndex, setSlideIndex] = useState(1);

    useEffect(() => {
      showDivs(slideIndex);
    }, [slideIndex]);
  
    function plusDivs(n) {
      setSlideIndex(slideIndex + n);
    }
  
    function showDivs(n) {
      var i;
      var x = document.getElementsByClassName("mySlides");
      if (n > x.length) {
        setSlideIndex(1);
      }
      if (n < 1) {
        setSlideIndex(x.length);
      }
      for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
      }
      x[slideIndex - 1].style.display = "block";
    }
    return (
        <>
           <div className='section4'>
        <p className='descriptionsec4'>POPULAR AREAS</p>
        <h4 className='mainHeading4'>Explore Dubai's Areas</h4>
        <div className="w3-container">
          <div className="w3-content w3-display-container">

            <div className="w3-display-container mySlides">

              <div className="w3-display-bottomleft w3-large w3-container w3-padding-16 w3-black">
                                <div className='contentdubaiarea db1'>
                                    <img src={dubaiarea1} className='imageDubai1' />
                                    <h5 className='showcontentHead'>Palm Jumeirah</h5>
                                    <p className='showcontentDescription'>Immerse yourself in luxury island living with opulent residences and pristine beaches.</p>
                  </div>
                  <div className='contentdubaiarea db2'>
                                    <img src={dubaiarea2} className='imageDubai1' />
                                    <h5 className='showcontentHead'>Palm Jumeirah</h5>
                                    <p className='showcontentDescription'>Immerse yourself in luxury island living with opulent residences and pristine beaches.</p>
                  </div>
                  <div className='contentdubaiarea db3'>
                                    <img src={dubaiarea3} className='imageDubai1' />
                                    <h5 className='showcontentHead'>Palm Jumeirah</h5>
                                    <p className='showcontentDescription'>Immerse yourself in luxury island living with opulent residences and pristine beaches.</p>
                  </div>
              </div>
            </div>

            <div className="w3-display-container mySlides">
              <img src="img_lights.jpg" alt="Northern Lights" />
              <div className="w3-display-bottomright w3-large w3-container w3-padding-16 w3-black">
                Northern Lights
              </div>
            </div>

          

            <button className="w3-button w3-display-left w3-black btnRight" onClick={() => plusDivs(-1)}><img src={arrowLeft} /></button>
                    <button className="w3-button w3-display-right w3-black  btn2" onClick={() => plusDivs(1)}><img src={arrowRight} /></button>
          </div>
        </div>
      </div>
    </>
     
    )
}
export default Section3;