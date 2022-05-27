import React from 'react';
import {
  Navbar, Nav, Col
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styles from './style.module.css';

const TopNavbar = () => {
  const history = useHistory();
  return (
    <>

      <div className="row m-auto color-brown" style={{ backgroundColor: '#962b07', color: 'white' }}>
        <Col lg={3} className="text-center d-flex justify-content-center">
          <img
            className={`${styles.nittLogo}`}
            src="https://www.nitt.edu/home/nittt-mob-latest.png"
            alt="NIT Trichy Logo"
          />
        </Col>
        <Col lg={8}>
          <div className={styles.title}>
            <div>
              <h2>ISERDM-2023</h2>
              <h6>
                First International Conference on
                <br />
                Intelligent Solutions for Emergency Response and Disaster Management
                <br />
                Jointly organized by NIT, Trichy and CDAC, Trivandrum

              </h6>
              <div style={{ wordBreak: 'break-all' }}>
                <h6>
                  9
                  <sup>th</sup>
                  {' '}
                  January 2023 -
                  11
                  <sup>th</sup>
                  {' '}
                  January, 2023
                </h6>
              </div>
            </div>
          </div>

        </Col>
      </div>
      <Navbar
        className={styles.header}
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="m-auto justify-content-center">
            <Nav.Link className={styles.colorWhite} onClick={() => history.push('/')}>
              HOME
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} onClick={() => history.push('/conference/keynotelectures')}>
              CONFERENCE
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} onClick={() => history.push('/authandlist/schedule')}>
              FOR AUTHORS AND LISTENERS
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} onClick={() => history.push('/revsandorgs/reviewerguidelines')}>
              FOR REVIWERS AND SESSION ORGANIZERS
            </Nav.Link>
            <Nav.Link className={styles.colorWhite} onClick={() => history.push('/people/advisoryboard')}>
              PEOPLE
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
