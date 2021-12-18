import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
// import styles from './style.module.css';

const ConferencePage = () => {
  const { path, url } = useRouteMatch();
  const sidebarLinks = [
    {
      name: 'KEYNOTE LECTURES',
      to: `${url}/keynotelectures`
    },
    {
      name: 'VENUE',
      to: `${url}/venue`
    },
    {
      name: 'CALL FOR 8TH ICANI 2020',
      to: `${url}/callfor2020`
    }
  ];
  const Content = [
    {
      name: 'KEYNOTE LECTURES',
      path: `${path}`,
      content: <div>KEYNOTE LECTURES</div>
    },
    {
      name: 'KEYNOTE LECTURES',
      path: `${path}/keynotelectures`,
      content: <div>KEYNOTE LECTURES</div>
    },
    {
      name: 'VENUE',
      path: `${path}/venue`,
      content: <div>VENUE</div>
    },
    {
      name: 'CALL FOR 8TH ICANI 2020',
      path: `${path}/callfor2020`,
      content: <div>CALL FOR 8TH ICANI 2020</div>
    }
  ].map((link) => (
    <Route key={link.path} exact path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer title="CONFERENCE" sidebarLinks={sidebarLinks} Content={Content} />;
};

export default ConferencePage;
