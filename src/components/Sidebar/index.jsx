import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './styles.module.css';

const Sidebar = ({ sidebarLinks }) => {
  console.log(sidebarLinks);
  return (
    <div className={styles.sidebar}>
      {sidebarLinks.map((sidebarLink) => (
        <NavLink
          className={styles.Tab}
          activeClassName={styles.activeTab}
          key={sidebarLink.to}
          to={sidebarLink.to}
        >
          {sidebarLink.name}
        </NavLink>
      ))}
    </div>
  );
};

export default Sidebar;
