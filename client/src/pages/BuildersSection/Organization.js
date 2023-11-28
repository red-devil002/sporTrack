import React from 'react';
import './style.css'; // Import your CSS file
import one from "../1.jpg";
import two from "../2.jpg";
import three from "../3.jpeg";
import four from "../4.jpg";
import five from "../5.jpg";

import react from 'react';
import Fheader from 'components/Fheader';
import Ffooter from 'components/Ffooter';

const MyComponent = () => {
  return (
    <div>
    <Fheader title="Organization information"></Fheader>
        <div>
        <h1 className="bcc1">BCCI</h1>
    </div>
      <div className="container">
      <div className="image-container">
        <div className="row">
          <img src={one} alt="Image 1" />
          <img src={two} alt="Image 2" />
          <img src={three} alt="Image 3" />
        </div>
        <div className="row">
          <img src={four} alt="Image 4" />
          <img src={five} alt="Image 5" />
        </div>
      </div>
      <p>
        <h2>
        At the outset, there is nothing significant about the year 1721, as far as India's political history is concerned. Aurangzeb, the sixth of the great Mughals, had passed away in 1707, and the Empire he and his forefathers had built, had started to disintegrate. The Marathas were gaining in prominence, and in the process of knocking hard on the doors of Delhi. These were prominent happenings; what was peripheral was that 'merchants' from England and France had established 'settlements' in select areas of the subcontinent, and were going about their business of trade.
        </h2>
      </p>
    </div>
    <Ffooter></Ffooter>
    </div>
  );
};

export default MyComponent;