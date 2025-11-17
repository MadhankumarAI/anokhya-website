import React from 'react';
import './Sponsors.css';
import img1 from './images/cocoa.jpg';
import img2 from './images/Canam.png';
import img3 from './images/Netzy.jpg';
import nalani from "/public/nalanis.png";
import img4 from "./images/vastralaya.jpg";

const Sponsors = () => {
  return (
    <div className='spons'>
      <div className="sponsors_head">
        <h2>Sponsors</h2>
        <p>Click to Discover Sponsor Offerings!</p>
      </div>
      <div className='sponsMain'>
        <a href={"/"}> <div className='card blue-bg'>
          <img className='card-image' src={nalani} alt="nalini" />

        </div></a>

        <a href='https://www.canamgroup.com'><div className='card'>
          <img className='card-image' src={img2} alt="Canam Sponsor" />
        </div></a>

         <a href='https://www.netzytechnosoft.com/'><div className='card'>
          <img className='card-image' src={img3} alt="Netzy Technosoft" />
        </div></a>

        <a href='#'><div className='card black-bg'>
          <img className='card-image' src={img4} alt="Vastralaya" />
        </div></a>
      </div>


    </div>
  );
}

export default Sponsors;
