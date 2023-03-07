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

// const GalleryPage = () => (
//   <div className={styles.box}>
//     <h1 className={styles.heading}>Gallery</h1>
//     <div className={styles.gridContainer}>
//       {Object.keys(images).map((key) => (
//         <img className={styles.gridItem} key={key}
//            src={images[key]} alt="gallery" draggable="false" />
//       ))}
//     </div>
//   </div>
// );

export function GalleryCarousel() {
  return (
    <Carousel variant="dark" style={{ width: 'min(80%,30rem)' }}>
      {Object.keys(images).map((key) => (
        <Carousel.Item key={key}>
          <img style={{ width: 'min(100%,30rem)', aspectRatio: '1/1', overflow: 'clip' }} className={styles.gridItem} key={key} src={images[key]} alt="gallery" draggable="false" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export function GalleryPage() {
  return (
    <Carousel variant="dark" style={{ width: 'min(80%,35rem)', margin: '1rem auto' }}>
      {Object.keys(images).map((key) => (
        <Carousel.Item key={key}>
          <img style={{ width: 'min(100%,35rem)', aspectRatio: '1/1', overflow: 'clip' }} className={styles.gridItem} key={key} src={images[key]} alt="gallery" draggable="false" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default GalleryPage;
