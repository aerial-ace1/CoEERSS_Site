import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './style.css';

export const Footer = () => (
  <footer className="site-footer bg-red" id="footer">
    <Container>
      <Row>
        <Col
          md={8}
          className="footer-col"
        >
          <h3 className="footer-heading1 mb-1">Contact</h3>
          Department of CSE
          {' '}
          <br />
          National Institute of Technology
          <br />
          Tiruchirappalli — 620 015
          <br />
          {' '}
          Tamil Nadu, India.
          <br />
          E-mail ID:
          {' '}
          <a href="mailto:iserdm2023.nitt@gmail.com">iserdm2023.nitt@gmail.com</a>
          <br />
          Contact Nos.:
          {' '}
          <a href="tel:+919985953814">9985953814</a>
          ,
          {' '}
          <a href="tel:+919944429848">9944429848</a>
        </Col>
        <Col
          md={4}
        />
      </Row>
    </Container>
  </footer>
);
