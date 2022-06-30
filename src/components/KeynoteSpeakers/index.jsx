import React from 'react';

import i1 from './assets/image1.png';
import i2 from './assets/image2.jpg';
import i3 from './assets/image3.jpg';
import i4 from './assets/image4.png';
import i5 from './assets/image5.jpg';
import i6 from './assets/image6.jpg';

export const KeynoteSpeakers = () => (
  <div>
    <h1>Keynote Speakers</h1>
    <div className="text-center m-5 fw-bold">
      <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src={i4} />
      <br />
      Shri. E Magesh, Director General, C-DAC
    </div>
    <div className="text-center m-5 fw-bold">
      <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src={i6} />
      <br />
      Dr.K.Senthil Kumar, Director in charge CASR, Centre for Aerospace Research,
      MIT Campus, Anna University, Chennai
    </div>
    <div className="text-center m-5 fw-bold">
      <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src={i1} />
      <br />
      Shri. A. Kalaiselvan, Executive Director, CDAC, Trivandrum
    </div>
    <div className="text-center m-5 fw-bold">
      <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src={i3} />
      <br />
      Shri. V.Vishnu, I.A.S., District Collector, Tirunelveli District, Tamilnadu
    </div>
    <div className="text-center m-5 fw-bold">
      <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src={i2} />
      <br />
      Shri. G.Jawahar IPS, Superintendent of Police, Nagapattinam
    </div>
    <div className="text-center m-5 fw-bold">
      <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src={i5} />
      <br />
      Dr. S. Kumaravel, Professor, Thanjavur Medical College
    </div>
  </div>
);
