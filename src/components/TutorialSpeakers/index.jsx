import React from 'react';

import i1 from './assets/img-0.png';
import i2 from './assets/img-1.jpg';

export const TutorialSpeakers = () => (
  <div>
    <h1>TUTORIAL SPEAKERS</h1>
    <div className="row">
      <div className="text-center m-5 fw-bold col">
        <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src={i1} />
        <br />
        Dr. Senthilkumar Nallusamy, Chief cardiologist, Rana Hospital, Trichy
      </div>
      <div className="text-center m-5 fw-bold col">
        <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src={i2} />
        <br />
        Bala Sriraghavan, Founder & CEO, Datanetiix Solutions
      </div>
    </div>
  </div>
);
