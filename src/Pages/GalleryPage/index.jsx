import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import styles from './style.module.css';

const images = {};
function importAll(r) {
  r.keys().forEach((key) => {
    images[key] = r(key);
  });
}
importAll(require.context('./assets', false, /\.jpg$/));
// In your JSX component, you can access the images like this:

// In your JSX component, you can access the images like this:

const GalleryPage = () => (
  <div className={styles.box}>
    <h1 className={styles.heading}>Gallery</h1>
    <div className={styles.gridContainer}>
      {Object.keys(images).map((key) => (
        <img className={styles.gridItem} key={key} src={images[key]} alt="gallery" draggable="false" />
      ))}
    </div>
  </div>
);

export default GalleryPage;

export function GalleryCarousel() {
  return (
    <Carousel variant="dark" style={{ height: '30rem', overflowY: 'clip' }}>
      {Object.keys(images).map((key) => (
        <Carousel.Item>
          <img className={styles.gridItem} key={key} src={images[key]} alt="gallery" draggable="false" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}
