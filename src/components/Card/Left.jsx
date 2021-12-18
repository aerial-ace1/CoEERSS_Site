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

      <Col sm>
        <img className="card-img" src={src} alt="professor" />
      </Col>
      <Col sm>{content}</Col>
    </Row>

  </>
);

export default Left;
