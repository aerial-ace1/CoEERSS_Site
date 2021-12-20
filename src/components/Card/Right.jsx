import React from 'react';
import {
  Row, Col
} from 'react-bootstrap';
import './right.css';

const Right = ({ src, title, content }) => (
  <>
    <Row>
      <h2>
        <Col className="card-title">{title}</Col>
      </h2>
    </Row>
    <Row>
      <Col sm>{content}</Col>
      <Col sm>
        <img className="card-img" src={src} alt="professor" />
      </Col>

    </Row>

  </>
);

export default Right;
