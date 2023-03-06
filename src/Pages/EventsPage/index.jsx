import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
import { Hackathon } from '../../components/Events/Hackathon';

const Events = () => {
  const { path, url } = useRouteMatch();
  const sidebarLinks = [
    {
      name: 'HACKATHON',
      to: `${url}/hackathon`
    }
  ];

  const Content = [
    {
      name: 'HACKATHON',
      path: `${path}/hackathon`,
      content: (
        <>
          <h1>HACKATHON</h1>
          <Hackathon />
        </>
      )
    }
  ].map((link) => (
    <Route key={link.path} exact path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer title="HACKATHON" sidebarLinks={sidebarLinks} Content={Content} />;
};

export default Events;
