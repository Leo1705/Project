import React from 'react';
import bg1 from "../media/background1sec5.jpg";
import bg2 from "../media/background2sec5.jpg";
import arrowRight from "../media/arrowRight.png";
import arrowLeft from "../media/arrowLeft.png";
function Section5() {
    return (
        <>
            <div className='section6'>
                <div className='sec5Content'>
                    <p className='descriptionsec5'>FEATURED PLANS</p>
                    <h4 className='headingsec5'>Off-Plan Developments</h4>
                </div>
                <button className="w3-button w3-display-left w3-black btnRight btnleft" ><img src={arrowLeft} /></button>
                    <button className="w3-button w3-display-right w3-black  btn2 "><img src={arrowRight} /></button>
                <div className='sec5contentBox'>
                    <img src={bg1} className='bg1sec5contentbox' />
                    <h4 className='sec5contentboxhead'>Golden Sands</h4>
                    <p className='sec5contentboxtext'>Exclusive desert oasis offering modern design, lush landscaping, and tranquility.</p>
                </div>
                <div className='sec5contentBox'>
                    <img src={bg2} className='bg1sec5contentbox' />
                    <h4 className='sec5contentboxhead'>Crystal Lagoon</h4>
                    <p className='sec5contentboxtext'>Luxe waterfront lifestyle with stunning views and modern amenities.</p>
                </div>
                <button className='contactNav sec6btnlast'>Explore More</button>
            </div>
            
        </>
    )
}
export default Section5;