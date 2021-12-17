import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import TopNavbar from '../TopNavbar';
import styles from './style.module.css';
import MainPage from '../MainPage';
import {
  AuthorsAndListenersPage,
  ConferencePage,
  RewsAndOrgsPage,
  PeoplePage,
  PastConferencesPage
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
      name: 'FOR AUTHORS AND LISTENERS',
      url: '/authandlist',
      getPage: () => <AuthorsAndListenersPage />
    },
    {
      name: 'FOR REVIEWERS AMD SESSION ORGANIZERS',
      url: '/revsandorgs',
      getPage: () => <RewsAndOrgsPage />
    },
    {
      name: 'PEOPLE',
      url: '/people',
      getPage: () => <PeoplePage />
    },
    {
      name: 'PAST CONFERENCES',
      url: '/pastconferences',
      getPage: () => <PastConferencesPage />
    }
  ];
  return (
    <div className={styles.homePage}>
      <Router>
        <div className={styles.topNavBarContainer}>
          <TopNavbar />
        </div>
        <div className={styles.container}>
          <Switch>
            <Route exact path="/home">
              <MainPage />
            </Route>
            {routes.map((route) => (
              <Route key={route.url} path={route.url}>
                {route.getPage()}
              </Route>
            ))}
          </Switch>
        </div>
      </Router>
      <Footer />
    </div>
  );
};
