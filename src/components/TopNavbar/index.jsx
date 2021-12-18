import React from 'react';
import {
  Navbar, Container, Nav
} from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import styles from './style.module.css';

const TopNavbar = () => {
  const history = useHistory();
  return (
    <>
      <Navbar
        className={styles.header}
        collapseOnSelect
        expand="lg"
        variant="dark"
      >
        <Container>
          <Navbar.Brand className={styles.brand} href="/">
            <img
              className={styles.nittLogo}
              src="https://www.nitt.edu/home/nittt-mob-latest.png"
              alt="NIT Trichy Logo"
            />
            <div className={styles.title}>
              <div>
                <h2>ICACNI-2022</h2>
                <div style={{ wordBreak: 'break-all' }}>
                  <h6>
                    10
                    <sup>th</sup>
                    {' '}
                    March, 2022 -
                    15
                    <sup>th</sup>
                    {' '}
                    March, 2022
                  </h6>
                </div>
              </div>
            </div>

          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`${styles.xsTopNavElems} me-auto justify-content-end`}>
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
        </Container>
      </Navbar>
      <Navbar className={styles.navbar} collapseOnSelect expand="lg">
        <Container>
          <Navbar.Collapse
            className={styles.NavElements}
            id="responsive-navbar-nav"
          >
            <Nav className="justify-content-end">
              <Nav.Link className={styles.navLinks} onClick={() => history.push('/conference/keynotelectures')}>
                CONFERENCE
              </Nav.Link>
              <Nav.Link className={styles.navLinks} onClick={() => history.push('/authandlist/schedule')}>
                FOR AUTHORS AND LISTENERS
              </Nav.Link>
              <Nav.Link className={styles.navLinks} onClick={() => history.push('/revsandorgs/reviewerguidelines')}>
                FOR REVIWERS AND SESSION ORGANIZERS
              </Nav.Link>
              <Nav.Link className={styles.navLinks} onClick={() => history.push('/people/advisoryboard')}>
                PEOPLE
              </Nav.Link>
              {/* <Nav.Link
                className={styles.navLinks}
                onClick={() => history.push('/pastconferences')}
              >
                PAST CONFERENCES
              </Nav.Link> */}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
