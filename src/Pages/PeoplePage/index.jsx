import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
// import styles from './style.module.css';

const RewsAndOrgsPage = () => {
  const { path, url } = useRouteMatch();
  const sidebarLinks = [
    {
      name: 'ADVISORY BOARD',
      to: `${url}/advisoryboard`
    },
    {
      name: 'COMMITTEE',
      to: `${url}/committee`
    }
  ];

  const Content = [
    {
      name: 'ADVISORY BOARD',
      path: `${path}/advisoryboard`,
      content: <div>ADVISORY BOARD</div>
    },
    {
      name: 'COMMITTEE',
      path: `${path}/committee`,
      content: <div>COMMITTEE</div>
    }
  ].map((link) => (
    <Route key={link.path} path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer sidebarLinks={sidebarLinks} Content={Content} />;
};

export default RewsAndOrgsPage;
