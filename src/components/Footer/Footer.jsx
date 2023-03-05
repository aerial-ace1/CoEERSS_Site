import './style.css';

import React from 'react';

export const Footer = () => (
  <footer className="page-footer font-small blue">
    <div className="container-fluid text-center text-md-left">
      <div className="row">
        <div className="col-md-6 mt-md-0 mt-3 mb-3">
          <h5 className="text-uppercase">
            Centre of Excellence in Emergency
            <br />
            Response Support System
          </h5>
          National Institute of Technology
          <br />
          Tiruchirappalli — 620 015
          <br />
          {' '}
          Tamil Nadu, India.
          <br />
          <br />
          <i className="fa fa-envelope" />
          {' '}
          <a href="mailto:coeerss@gmail.com">coeerss@gmail.com</a>
          <br />
          {' '}
          <i className="fa fa-phone" />
          {' '}
          <a href="tel:+919985953814">9985953814</a>
          <br />
          {' '}
          <i className="fa fa-phone" />
          {' '}
          <a href="tel:+919944429848">9944429848</a>
        </div>

        <hr className="clearfix w-100 d-md-none pb-0" />

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Pages</h5>
          <ul className="list-unstyled">
            <li><a href="/about/erss">About</a></li>
            <li><a href="/events/events">Events</a></li>
            <li><a href="/gallery">Gallery</a></li>
            <li><a href="/conference/keynotelectures">Conference</a></li>
          </ul>
        </div>

        <div className="col-md-3 mb-md-0 mb-3">
          <h5 className="text-uppercase">Organisation</h5>
          <ul className="list-unstyled">
            <li><a href=" https://nitt.edu/">NIT-Trichy</a></li>
            <li><a href=" https://www.cdac.in/">CDAC</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>
);

// export default Footer
