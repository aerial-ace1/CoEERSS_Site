import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNavbar from '../TopNavbar';
import styles from './style.module.css';
import MainPage from '../MainPage';
import {
  // AuthorsAndListenersPage,
  ConferencePage,
  // RewsAndOrgsPage,
  PeoplePage,
  VenuePage,
  ContactPage,
  GalleryPage,
  InTheNews,
  Events
  // PastConferencesPage
} from '../../Pages';
import { Footer } from '../Footer/Footer';
import About from '../../Pages/ERSSPage';

export const Homepage = () => {
  const routes = [
    {
      name: 'CONFERENCE',
      url: '/conference',
      getPage: () => <ConferencePage />
    },
    {
      name: 'GALLERY',
      url: '/gallery',
      getPage: () => <GalleryPage />
    },
    // {
    //   name: 'CALL FOR PAPERS',
    //   url: '/callforpapers',
    //   getPage: () => <AuthorsAndListenersPage />
    // },
    // {
    //   name: 'FOR AUTHORS AND LISTENERS',
    //   url: '/authorsandlisteners',
    //   getPage: () => <RewsAndOrgsPage />
    // },
    {
      name: 'PEOPLE',
      url: '/people',
      getPage: () => <PeoplePage />
    },
    {
      name: 'VENUE',
      url: '/venue',
      getPage: () => <VenuePage />
    },
    {
      name: 'CONTACT',
      url: '/contact',
      getPage: () => <ContactPage />
    },

    // {
    //   name: 'PAST CONFERENCES',
    //   url: '/pastconferences',
    //   getPage: () => <PastConferencesPage />
    // }
    {
      name: 'IN THE NEWS',
      url: '/inthenews',
      getPage: () => <InTheNews />
    },
    {
      name: 'EVENTS',
      url: '/events',
      getPage: () => <Events />
    },
    {
      name: 'ABOUT',
      url: '/about',
      getPage: () => <About />
    }
  ];
  return (
    <div className={styles.homePage}>
      <Router>
        <div className={styles.topNavBarContainer}>
          <TopNavbar />
        </div>

        <Switch>
          <Route exact path="/">
            <MainPage />
          </Route>
          {routes.map((route) => (
            <Route key={route.url} path={route.url}>
              {route.getPage()}
            </Route>
          ))}
        </Switch>

      </Router>
      <div className={styles.footer}>
        <Footer />
      </div>
    </div>
  );
};
