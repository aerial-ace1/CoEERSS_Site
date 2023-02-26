import React from 'react';
import {
  Navbar, Nav, Col
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styles from './style.module.css';
import cdac from './cdac.png';
import nitt from './nitt.png';

const TopNavbar = () => {
  const history = useHistory();
  return (
    <>

      <div className="row m-auto color-brown" style={{ backgroundColor: '#6e3df6', color: 'white' }}>
        <Col lg={3} className="text-center d-flex justify-content-center brand">
          <img
            className={`${styles.nittLogo}`}
            src={nitt}
            alt="NIT Trichy Logo"
          />
        </Col>
        <Col lg={6}>
          <div className={styles.title}>
            <div>
              <h2>CoEERSS-2023</h2>
              <h4>First International Conference on</h4>
              <h6>
                The Centre of Excellence in Emergency Response Support System
                <br />
                Jointly organized by NIT, Tiruchirappalli and CDAC, Trivandrum

              </h6>
              <div style={{ wordBreak: 'break-all' }}>
                <h6>
                  9
                  <sup>th</sup>
                  {' '}
                  -
                  11
                  <sup>th</sup>
                  {' '}
                  January 2023
                </h6>
              </div>
            </div>
          </div>
        </Col>
        <Col lg={3} className="text-center d-flex justify-content-center brand">
          <img
            className={`${styles.nittLogo}`}
            src={cdac}
            style={{ padding: '15px', filter: 'brightness(0) invert(1)' }}
            alt="CDAC Logo"
          />
        </Col>
      </div>
      <Navbar
        className={styles.header}
        collapseOnSelect
        expand="lg"
        variant="dark"
        id="nav"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto justify-content-center">
            <Nav.Link className={styles.colorWhite} onClick={() => history.push('/')}>
              HOME
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} onClick={() => history.push('/gallery')}>
              GALLERY
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} onClick={() => history.push('/inthenews')}>
              IN THE NEWS
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} onClick={() => history.push('/conference/keynotelectures')}>
              CONFERENCE
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} onClick={() => history.push('/events/events')}>
              EVENTS
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} onClick={() => history.push('/callforpapers/topicsofinterest')}>
              CALL FOR PAPERS
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} onClick={() => history.push('/authorsandlisteners/authorguidelines')}>
              FOR AUTHORS AND LISTENERS
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} onClick={() => history.push('/people/committee')}>
              PEOPLE
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} onClick={() => history.push('/venue')}>
              VENUE
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} onClick={() => history.push('/contact')}>
              CONTACT
            </Nav.Link>
            {/* <Nav.Link
                className={styles.colorWhite}
                onClick={() => history.push('/pastconferences')}
              >
                PAST CONFERENCES
              </Nav.Link> */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
};

export default TopNavbar;
