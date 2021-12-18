import React from 'react';
import { useHistory } from 'react-router';
import Select from 'react-select';
import styles from './styles.module.css';

export const DropDown = ({ sidebarLinks }) => {
  const history = useHistory();
  const options = sidebarLinks.map((link) => ({ value: link.to, label: link.name }));
  const [value, setValue] = React.useState(options.find(
    (link) => link.value === history.location.pathname
  ));
  return (
    <div className={styles.dropDownContainer}>
      <Select
        value={value}
        onChange={(selectedValue) => {
          setValue(selectedValue);
          history.push(selectedValue.value);
        }}
        options={options}
      />
    </div>
  );
};
