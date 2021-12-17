import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from '../Sidebar';
import styles from './styles.module.css';
import ContentContainer from '../ContentContainer';

const PageContainer = ({ sidebarLinks, Content }) => {
  console.log(sidebarLinks);
  return (
    <Router>
      <div className={styles.sideBarContainer}>
        <Sidebar sidebarLinks={sidebarLinks} />
      </div>
      <div className={styles.contentContainer}>
        <ContentContainer Content={Content} />
      </div>
    </Router>
  );
};

export default PageContainer;
