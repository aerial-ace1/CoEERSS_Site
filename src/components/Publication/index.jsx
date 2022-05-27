import React from 'react';
import { Image } from 'react-bootstrap';
// import styles from './styles.module.css';
// import image from './Assets/springer-logo.svg';
// import { Card } from '../Card/Card';
// import author1 from './Assets/JKMandal.jpg';
// import author2 from './Assets/IMukherjee.jpeg';
// import author3 from './Assets/PKSa.jpg';
// import author4 from './Assets/sbakshi.jpg';
// import author5 from './Assets/SChatterji.png';

const Publication = () => (
  <>
    <div className="image-container">
      <a href="https://www.springer.com/series/11156">
        <Image className="image" src="https://entrepreneurship.ieee.org/wp-content/uploads/2020/03/770x320-ieeeexplore.png" />
      </a>
    </div>
    <p className="m-3 content">
      After a careful reviewing process, all accepted and presented papers
      after proper registration and presentation,
      will be published into Conference Proceedings by IEEE, which will be
      included IEEE Xplore and submitted for Ei Compendex and Scopus.
    </p>
  </>
);

export default Publication;
