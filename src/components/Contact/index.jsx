import React from 'react';
import { Col } from 'react-bootstrap';

export const Contact = () => (
  <div className="Contact">
    <h1>
      Contact
    </h1>
    <Col
      md={8}
      className="footer-col"
    >
      Centre of Excellence in Emergency Response Support System,
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
      <a href="mailto:coeerss@gmail.com" style={{ color: 'black' }}>coeerss@gmail.com</a>
      <br />
      Contact Nos.:
      {' '}
      <a href="tel:+919985953814" style={{ color: 'black' }}>9985953814</a>
      ,
      {' '}
      <a href="tel:+919944429848" style={{ color: 'black' }}>9944429848</a>
    </Col>
  </div>
);
