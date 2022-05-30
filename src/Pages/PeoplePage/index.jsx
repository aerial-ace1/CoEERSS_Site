import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import AnnouncedSoon from '../../components/AnnouncedSoon';
import PageContainer from '../../components/PageContainer';
import { Committee } from '../../components/Committee';
// import styles from './style.module.css';

const Filler = ({ title, text }) => (
  <div>
    <h1 className="mb-5">{title}</h1>
    <AnnouncedSoon text={text} />
  </div>
);

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
      name: 'ADVISORY BOARD',
      path: `${path}`,
      content: <Filler title="ADVISORY BOARD" text="Will be updated" />
    },
    {
      name: 'ADVISORY BOARD',
      path: `${path}/advisoryboard`,
      content: <Filler title="ADVISORY BOARD" text="Will be updated" />
    },
    {
      name: 'COMMITTEE',
      path: `${path}/committee`,
      content: <Committee />
    },
    {
      name: 'TECHNICAL COMMITTEE',
      path: `${path}/technicalcommittee`,
      content: <Filler title="TECHNICAL COMMITTEE" text="Will be updated" />
    }
  ].map((link) => (
    <Route key={link.path} exact path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer title="PEOPLE" sidebarLinks={sidebarLinks} Content={Content} />;
};

export default PeoplePage;
