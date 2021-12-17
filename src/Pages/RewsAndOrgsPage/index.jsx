import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
// import styles from './style.module.css';

const RewsAndOrgsPage = () => {
  const { path, url } = useRouteMatch();
  const sidebarLinks = [
    {
      name: 'REVIEWER GUIDELINES',
      to: `${url}/reviewerguidelines`
    },
    {
      name: 'CALL FOR SPECIAL SESSIONS',
      to: `${url}/callforspecialsession`
    },
    {
      name: 'OUTSTANDING REVIEWER AWARD',
      to: `${url}/outsrevieweaward`
    }
  ];

  const Content = [
    {
      name: 'REVIEWER GUIDELINES',
      path: `${path}/reviewerguidelines`,
      content: <div>REVIEWER GUIDELINES</div>
    },
    {
      name: 'CALL FOR SPECIAL SESSIONS',
      path: `${path}/callforspecialsession`,
      content: <div>CALL FOR SPECIAL SESSIONS</div>
    },
    {
      name: 'OUTSTANDING REVIEWER AWARD',
      path: `${path}/outsrevieweaward`,
      content: <div>OUTSTANDING REVIEWER AWARD</div>
    }
  ].map((link) => (
    <Route key={link.path} path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer sidebarLinks={sidebarLinks} Content={Content} />;
};

export default RewsAndOrgsPage;
