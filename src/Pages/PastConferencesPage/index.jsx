import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
// import styles from './style.module.css';

const PastConferencePage = () => {
  const { path, url } = useRouteMatch();
  const sidebarLinks = [
    {
      name: 'ICANI2019',
      to: `${url}/icani2019`
    },
    {
      name: 'ICANI2018',
      to: `${url}/icani2018`
    },
    {
      name: 'ICANI2017',
      to: `${url}/icani2017`
    },
    {
      name: 'ICANI2016',
      to: `${url}/icani2016`
    },
    {
      name: 'ICANI2015',
      to: `${url}/icani2015`
    },
    {
      name: 'ICANI2014',
      to: `${url}/icani2014`
    }
  ];

  const Content = [
    {
      name: 'ICANI2019',
      path: `${path}/icani2019`,
      content: <div>ICANI2018</div>
    },
    {
      name: 'ICANI2018',
      path: `${path}/icani2018`,
      content: <div>ICANI2018</div>
    },
    {
      name: 'ICANI2017',
      path: `${path}/icani2017`,
      content: <div>ICANI2017</div>
    },
    {
      name: 'ICANI2016',
      path: `${path}/icani2016`,
      content: <div>ICANI2016</div>
    },
    {
      name: 'ICANI2015',
      path: `${path}/icani2015`,
      content: <div>ICANI2015</div>
    },
    {
      name: 'ICANI2014',
      path: `${path}/icani2014`,
      content: <div>ICANI2014</div>
    }
  ].map((link) => (
    <Route key={link.path} path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer sidebarLinks={sidebarLinks} Content={Content} />;
};

export default PastConferencePage;
