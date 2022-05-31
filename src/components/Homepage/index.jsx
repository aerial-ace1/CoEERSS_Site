import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNavbar from '../TopNavbar';
import styles from './style.module.css';
import MainPage from '../MainPage';
import {
  AuthorsAndListenersPage,
  ConferencePage,
  RewsAndOrgsPage,
  PeoplePage
  // PastConferencesPage
} from '../../Pages';
import { Footer } from '../Footer/Footer';

export const Homepage = () => {
  const routes = [
    {
      name: 'CONFERENCE',
      url: '/conference',
      getPage: () => <ConferencePage />
    },
    {
      name: 'CALL FOR PAPERS',
      url: '/callforpapers',
      getPage: () => <AuthorsAndListenersPage />
    },
    {
      name: 'FOR AUTHORS AND LISTENERS',
      url: '/authorsandlisteners',
      getPage: () => <RewsAndOrgsPage />
    },
    {
      name: 'PEOPLE',
      url: '/people',
      getPage: () => <PeoplePage />
    }
    // {
    //   name: 'PAST CONFERENCES',
    //   url: '/pastconferences',
    //   getPage: () => <PastConferencesPage />
    // }
  ];
  return (
    <div className={styles.homePage}>
      <Router basename="/ISERDM-2023">
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
