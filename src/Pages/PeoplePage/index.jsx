import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
import { Committee } from '../../components/Committee';
import { AdvisoryBoard } from '../../components/Committee/AdvisoryBoard';
import { TechnicalBoard } from '../../components/Committee/TechnicalBoard';
// import styles from './style.module.css';

const PeoplePage = () => {
  const { path, url } = useRouteMatch();
  const sidebarLinks = [
    {
      name: 'ADVISORY BOARD',
      to: `${url}/advisoryboard`
    },
    {
      name: 'COMMITTEE',
      to: `${url}/committee`
    },
    {
      name: 'TECHNICAL COMMITTEE',
      to: `${url}/technicalcommittee`
    }
  ];

  const Content = [
    {
      name: 'COMMITTEE',
      path: `${path}`,
      content: <Committee />
    },
    {
      name: 'ADVISORY BOARD',
      path: `${path}/advisoryboard`,
      content: <AdvisoryBoard />
    },
    {
      name: 'COMMITTEE',
      path: `${path}/committee`,
      content: <Committee />
    },
    {
      name: 'TECHNICAL COMMITTEE',
      path: `${path}/technicalcommittee`,
      content: <TechnicalBoard />
    }
  ].map((link) => (
    <Route key={link.path} exact path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer title="PEOPLE" sidebarLinks={sidebarLinks} Content={Content} />;
};

export default PeoplePage;
