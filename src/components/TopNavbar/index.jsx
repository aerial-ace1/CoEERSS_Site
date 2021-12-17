import React from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
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
            <h1 className="m-auto">ICACNI-2022</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className={`${styles.xsTopNavElems} me-auto justify-content-end`}>
              <Nav.Link className={styles.colorWhite} onClick={() => history.push('/conference')}>
                CONFERENCE
              </Nav.Link>
              <Nav.Link className={styles.colorWhite} onClick={() => history.push('/authandlist')}>
                FOR AUTHORS AND LISTENERS
              </Nav.Link>
              <Nav.Link className={styles.colorWhite} onClick={() => history.push('/authandlist')}>
                FOR REVIWERS AND SESSION ORGANIZERS
              </Nav.Link>
              <Nav.Link className={styles.colorWhite} onClick={() => history.push('/authandlist')}>
                PEOPLE
              </Nav.Link>
              <Nav.Link className={styles.colorWhite} onClick={() => history.push('/authandlist')}>
                PAST CONFERENCES
              </Nav.Link>
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
              <Nav.Link className={styles.colorWhite} onClick={() => history.push('/conference')}>
                CONFERENCE
              </Nav.Link>
              <Nav.Link className={styles.colorWhite} onClick={() => history.push('/authandlist')}>
                FOR AUTHORS AND LISTENERS
              </Nav.Link>
              <Nav.Link className={styles.colorWhite} onClick={() => history.push('/revsandorgs')}>
                FOR REVIWERS AND SESSION ORGANIZERS
              </Nav.Link>
              <Nav.Link className={styles.colorWhite} onClick={() => history.push('/people')}>
                PEOPLE
              </Nav.Link>
              <Nav.Link className={styles.colorWhite} onClick={() => history.push('/pastconference')}>
                PAST CONFERENCES
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default TopNavbar;
