import React from 'react';

import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link45deg } from 'react-bootstrap-icons';
import styles from './style.module.css';

const NewsCard = ({ newsItem }) => (
  <Card className={styles.cardCont} style={{ width: '25rem' }}>
    <Card.Img variant="top" src={newsItem.image} />
    <Card.Body>
      <Card.Text>
        {newsItem.text}
      </Card.Text>
      <section className={styles.links}>
        {newsItem.links.map((link) => (
          <a href={link} target="_blank" rel="noreferrer">
            <Button variant="dark"><Link45deg /></Button>
          </a>
        ))}
      </section>
    </Card.Body>
  </Card>
);

export default NewsCard;
