import React from 'react';
import { Switch } from 'react-router-dom';
import styles from './styles.module.css';
import { DropDown } from '../PageContainer/Dropdown';

const ContentContainer = ({ Content, sidebarLinks }) => (
  <div className={styles.content}>
    <Switch>
      <>
        <DropDown sidebarLinks={sidebarLinks} />
        {Content}
      </>
    </Switch>
  </div>
);

export default ContentContainer;
