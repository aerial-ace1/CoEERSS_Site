import React from 'react';
import { Container } from 'react-bootstrap';
import Left from './Left';
import Right from './Right';
import './style.css';

export const Card = ({
  align, src, title, content
}) => (
  <div className="card">
    <Container fluid>
      {
        align === 0
      && <Left src={src} title={title} content={content} />
      }
      {
        align === 1
      && <Right src={src} title={title} content={content} />
      }
    </Container>

  </div>
);
