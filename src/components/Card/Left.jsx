import React from 'react';
import {
  Row, Col
} from 'react-bootstrap';
import './left.css';

const Left = ({ src, title, content }) => (
  <>
    <Row>
      <h2>
        <Col className="card-title">{title}</Col>
      </h2>
    </Row>
    <Row>

      <Col>
        <img className="card-img" src={src} alt="professor" />
      </Col>
      <Col>{content}</Col>
    </Row>

  </>
);

export default Left;
