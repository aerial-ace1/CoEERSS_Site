import React from 'react';
import './style.css';
import {
  Carousel
  // Image
} from 'react-bootstrap';
import { GalleryCarousel } from '../../Pages/GalleryPage';
import { InTheNewsCar } from '../../Pages/InTheNewsPage';
// import { ImportantDates } from '../ImportantDates/ImportantDates';
// import { BestPaper } from '../BestPaper';
// import brz from './assets/brz.png';
// import sil from './assets/sil.png';
// import gld from './assets/gld.png';

const MainPage = () => (
  <div className="main-page">
    <Carousel className="carousel">
      <Carousel.Item interval={1000}>
        <img
          className="car-img"
          src="https://test.delta.nitt.edu/media/images/NITT.2e16d0ba.fill-1920x837.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>National Institute of Technology, Tiruchirappalli</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="car-img"
          src="https://www.admissionmba.in/wp-content/uploads/2019/10/CDAC-Noida-Campus.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>CDAC</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="car-img"
          src="https://lh4.googleusercontent.com/hOe_L_XjgFBagMsJJJtPgKBCkkql5BMCaclLDcoGhbEloUBQgC9kROu4ebOuJETgqeLVO0HRp3m_orkvPaQvw9k9MKTgczSIbiIVXUrI1g-ghvMwbOpBMeqV1E7O1G9Chqs2xsvychRceK3Z3kiKRng"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Mukambo and Cauvery flow, Trichy</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <h1 className="mt-5">
      Home
    </h1>
    <div className="homepage-alt1">
      <div style={{ width: '40rem', margin: '3rem 1rem' }}>
        <p>
          Emergency Response Support System (ERSS) is the vision of Govt. of
          India to launch an integrated emergency response system with a single
          emergency number 112, to address different emergencies of citizens. ERSS
          is designed to address all emergency signals received from citizens through
          voice call, SMS, e-mail, panic SOS signal, ERSS web portal etc.
        </p>
        <p>
          ERSS tracks the rescue and service vehicles of all services (Police, Fire, Health etc.)
          in real-time on a digital map of the State/UT and hence it will be possible to direct
          the right vehicle(s) to reach the service requestor and provide necessary support
          immediately.
        </p>
        <p>
          The CoE in ERSS at National Institute of Technology, Tiruchirappalli, operates
          with a primary focus on setting up an automated facility for emergency purpose
          in the capital cities of all States and UTs, called Public Safety Answering Point
          (PSAP), will handle all the emergency signals and provide assistance available to the
          people in distress within the best possible time with the help of Police, Fire & Rescue,
          Health services etc. This multi-faceted unique center offers skill development courses,
          Internships, Research and Development assistance across various sectors.
        </p>
      </div>
      <GalleryCarousel />

    </div>
    <br />
    <h1>
      Inauguration
    </h1>
    <div className="homepage-alt2">
      <div style={{ width: '40rem', margin: '3rem 1rem' }}>
        <p>
          The Centre of Excellence in Emergency Response Support System (CoEERSS) was inaugurated
          by Dr. C. Sylendra Babu, IPS, Director General of Police, Tamil Nadu today in the campus
          of NIT-Tiruchirappalli.
        </p>
        <p>
          Dr. N. Sivakumaran, Professor and Head, CoEERSS welcomed the gathering;  Mr. Kalai Selvan
          A, Director, C-DAC, Thiruvananthapuram was a Special Guest; Mr. Magesh Ethirajan, Director
          General, C-DAC was the Guest of Honour; Dr. Ramakalyan Ayyagari, Dean (Academic),
          NIT-Tiruchirappalli delivered the Presidential Address; Dr. C. Sylendra Babu IPS, Director
          General of Police, Tamil Nadu was the Chief Guest. He formally inaugurated the Centre
          of Excellence in ERSS, following which, he delivered the Inaugural address. He later
          distributed the prizes for a Hackathon event conducted recently as part of a conference
          in NIT-Tiruchirappalli, and interacted with the prize winners. The Vote of Thanks was
          delivered by Dr. Shishaj P. Simon, Professor, department of EEE, NIT-Tiruchirappalli.
        </p>
      </div>
      <InTheNewsCar />
    </div>
  </div>

);

export default MainPage;
