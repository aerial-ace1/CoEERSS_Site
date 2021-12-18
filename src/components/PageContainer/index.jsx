import React from 'react';
import { BrowserRouter as Router, useHistory } from 'react-router-dom';
import Select from 'react-select';
import Sidebar from '../Sidebar';
import styles from './styles.module.css';
import ContentContainer from '../ContentContainer';

const PageContainer = ({ title, sidebarLinks, Content }) => {
  const history = useHistory();
  const options = sidebarLinks.map((link) => ({ value: link.to, label: link.name }));
  const [value, setValue] = React.useState({
    value: sidebarLinks[0].to,
    label: sidebarLinks[0].name
  });
  return (
    <Router>
      <div className="container">
        <div className={styles.pageContainer}>
          <div className={styles.sideBarContainer}>
            <Sidebar title={title} sidebarLinks={sidebarLinks} />
          </div>
          <div className={styles.dropDownContainer}>
            <Select
              value={value}
              onChange={(selectedValue) => {
                console.log(selectedValue.value);
                setValue(selectedValue);
                history.push(selectedValue.value);
              }}
              options={options}
            />
          </div>
          <div className={styles.contentContainer}>
            <ContentContainer Content={Content} />
          </div>
        </div>
      </div>
    </Router>
  );
};

export default PageContainer;
