import React from 'react';
import {
  Row, Col
} from 'react-bootstrap';
import './right.css';

const Right = ({ src, title, content }) => (
  <>
    <Row>
      <h1>
        <Col className="card-title">{title}</Col>
      </h1>
    </Row>
    <Row>
      <Col>{content}</Col>
      <Col>
        <img className="card-img" src={src} alt="professor" />
      </Col>

    </Row>

  </>
);

export default Right;
