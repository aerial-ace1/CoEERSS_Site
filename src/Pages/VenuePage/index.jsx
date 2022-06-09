import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { Venue } from '../../components/Conference/Venue';
import PageContainer from '../../components/PageContainer';

const VenuePage = () => {
  const { path, url } = useRouteMatch();
  const sidebarLinks = [
    {
      name: 'VENUE',
      to: `${url}/venue`
    }
  ];

  const Content = [
    {
      name: 'VENUE',
      path: `${path}/venue`,
      content: <Venue />
    },
    {
      name: 'VENUE',
      path: `${path}`,
      content: <Venue />
    }
  ].map((link) => (
    <Route key={link.path} exact path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer title="VENUE" sidebarLinks={sidebarLinks} Content={Content} />;
};

export default VenuePage;
