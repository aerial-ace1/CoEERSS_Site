import React from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import Select from 'react-select';
import Sidebar from '../Sidebar';
import styles from './styles.module.css';
import ContentContainer from '../ContentContainer';

const PageContainer = ({ title, sidebarLinks, Content }) => {
  const history = useHistory();
  const options = sidebarLinks.map((link) => ({ value: link.to, label: link.name }));
  return (
    <Router>
      <div className={styles.pageContainer}>
        <div className={styles.sideBarContainer}>
          <Sidebar title={title} sidebarLinks={sidebarLinks} />
        </div>
        <h5 className={styles.title}>{title}</h5>
        <div className={styles.dropDownContainer}>
          <Select
            value={{ value: sidebarLinks[0].to, label: sidebarLinks[0].name }}
            onChange={(selectedValue) => {
              history.push(selectedValue.value);
            }}
            options={options}
          />
        </div>
        <div className={styles.contentContainer}>
          <ContentContainer Content={Content} />
        </div>
      </div>
    </Router>
  );
};

export default PageContainer;
