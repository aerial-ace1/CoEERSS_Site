/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from '../Sidebar';
import styles from './styles.module.css';
import ContentContainer from '../ContentContainer';

const PageContainer = ({ title, sidebarLinks, Content }) => (
  <Router basename="/ISERDM-2023">
    <div className="container">
      <div className={styles.pageContainer}>
        <div className={styles.sideBarContainer}>
          <Sidebar title={title} sidebarLinks={sidebarLinks} />
        </div>
        <div className={styles.contentContainer}>
          <ContentContainer Content={Content} sidebarLinks={sidebarLinks} />
        </div>
      </div>
    </div>
  </Router>
);

export default PageContainer;
