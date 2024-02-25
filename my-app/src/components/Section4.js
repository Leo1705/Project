import React from 'react';
import icon1 from "../media/sec4icon1.png";
import icon2 from "../media/sec4icon2.png";
import icon3 from "../media/sec4icon3.png";
import icon4 from "../media/sec4icon4.png";
import icon5 from "../media/sec4icon5.png";
import bgpic1 from "../media/sec4img1.jpg";
import bgpic2 from "../media/sec4img2.png";
function Section4() {
    return (
        <>
            <div className='section5'>
                <div className='sec5content'>
                <p>WHY CHOOSE US</p>
                <h4 className='sec5head'>Experience Unmatched Trust, Confidence, Privacy, and Time Efficiency in Real Estate</h4>
               
                </div>
                <div className='imagesSec5'>
                    <img src={bgpic1} className='sec5Img1' />
                    <img src={bgpic2} className='sec5Img2' />
                </div>
                <div className='sec5rightside'>
                    <p className='sec5rightDescription'>Discover why we're your top choice for your dream home. With expertise and personalized service, we make your dream a reality</p>
                    <div className='iconGroup'>
                        <img src={icon1} className='iconsec5' />
                        <span className='sec5iconhead'>Expertise in luxury Real estate</span>
                        <span className='sec5iconDescription'>Dubai's luxury property market specialists. Exclusive homes for discerning buyers.</span>
                    </div>
                    <div className='iconGroup'>
                        <img src={icon2} className='iconsec5' />
                        <span className='sec5iconhead'>Tailored Services for Investors</span>
                        <span className='sec5iconDescription'>Investment advisory for high-net-worth individuals. Strategic insights for lucrative opportunities.</span>
                    </div>
                    <div className='iconGroup'>
                        <img src={icon3} className='iconsec5' />
                        <span className='sec5iconhead'>Exceptional Customer Service</span>
                        <span className='sec5iconDescription'>Dedication to exceeding client expectations. Personalized attention and seamless experiences.</span>
                    </div>
                    <div className='iconGroup'>
                        <img src={icon4} className='iconsec5' />
                        <span className='sec5iconhead'>Commitment to Excellence</span>
                        <span className='sec5iconDescription'>Pursuit of perfection in every aspect. Delivering excellence in service and outcomes.</span>
                    </div>
                    <div className='iconGroup'>
                        <img src={icon5} className='iconsec5' />
                        <span className='sec5iconhead'>Transparent and Ethical Practices</span>
                        <span className='sec5iconDescription'>Upholding integrity and transparency. Ethical standards in all transactions.
</span>
               </div>
                </div>
                </div>
        </>
    )
}
export default Section4;