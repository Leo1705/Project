import React from 'react';
import bg1 from "../media/sec9bg1.jpg";
import man from "../media/sec9man.jpg";
function Section8() {
    return (
        <>
            <div className='section9'>
                <div className='sec9content'>
                    <p className='sec9before'>Our Testimonials</p>
                    <h4 className='sec9headmain'>Hear It From Them</h4>
                </div>
                <div className='sec9main'>
                <div class="containersec9">
                        <img src={bg1} alt="Notebook" className='sec9bg1' />
                        
                        <div class="contentsec9">
                       
                            <img src={man} className='manroundsec9' />
                           

    <p className='sec9descard'>G1 Real Estate is my go-to for property investments. Their professionalism and results-driven approach exceed expectations every time.</p>
    <br />
                            <p className='sec9name'>John Smith</p>
                           
                            <span className='sec9poz'>Financial Analysit</span>
                        </div>
</div>
                </div>
            </div>
        </>
    )
}
export default Section8;