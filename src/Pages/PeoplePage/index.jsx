import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
import { Committee } from '../../components/Committee';

const PeoplePage = () => {
  const { path, url } = useRouteMatch();
  const sidebarLinks = [
    {
      name: 'COMMITTEE',
      to: `${url}/committee`
    }
  ];

  const Content = [
    {
      name: 'COMMITTEE',
      path: `${path}/committee`,
      content: <Committee />
    }
  ].map((link) => (
    <Route key={link.path} exact path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer title="PEOPLE" sidebarLinks={sidebarLinks} Content={Content} />;
};

export default PeoplePage;
