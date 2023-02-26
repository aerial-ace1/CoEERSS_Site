import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link45deg } from 'react-bootstrap-icons';
import styles from './style.module.css';

const images = {};
function importAll(r) {
  r.keys().forEach((key) => {
    images[key] = r(key);
  });
}
importAll(require.context('./assets', false, /\.png/));

const NewsCard = ({ newsItem }) => (
  <Card className={styles.cardCont} style={{ width: '25rem' }}>
    <Card.Img variant="top" src={images[newsItem.image]} />
    <Card.Body>
      <Card.Text>
        {newsItem.text}
      </Card.Text>
      <section className={styles.links}>
        {newsItem.links.map((link) => (
          <a href={link} key={link} target="_blank" rel="noreferrer">
            <Button variant="dark"><Link45deg /></Button>
          </a>
        ))}
      </section>
    </Card.Body>
  </Card>
);

export default NewsCard;
