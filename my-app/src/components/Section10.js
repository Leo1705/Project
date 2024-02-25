import React from 'react';
import arrowRight from "../media/arrowWhite.png";
import logo from "../media/logo.png";
function Section10() {
    return (
        <>
            <div className='section11'>
                <div className='newsletter'>
                    <h4 className='latestUpdates'>Looking for the latest updates?</h4>
                    <input type='email' className='inputEmail' placeholder='Enter your Email' />
                    <span className='arrowLeftcard sec10arrow' ><img src={arrowRight} /></span>
                    <span className='submittingTerms'>By submitting, you agree to our Terms & Conditions and Privacy Policy.
</span>
                </div>
                <div class="footer">
    <div class="footer-logo">
      <img src={logo} alt="Logo" />
      <h3>Your Website Name</h3>
    </div>
    <div>
      <h4>Group 1</h4>
      <a href="#">Page 1</a>
      <a href="#">Page 2</a>
      <a href="#">Page 3</a>
    </div>
    <div>
      <h4>Group 2</h4>
      <a href="#">Page 4</a>
      <a href="#">Page 5</a>
      <a href="#">Page 6</a>
    </div>
    <div>
      <h4>Group 3</h4>
      <a href="#">Page 7</a>
      <a href="#">Page 8</a>
      <a href="#">Page 9</a>
    </div>
    <div>
      <h4>Group 4</h4>
      <a href="#">Page 10</a>
      <a href="#">Page 11</a>
      <a href="#">Page 12</a>
    </div>
  </div>
                </div>
        </>
    )
}
export default Section10;