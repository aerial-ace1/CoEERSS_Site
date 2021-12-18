import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
import { Venue } from '../../components/Conference/Venue';
import { Lectures } from '../../components/Conference/Lectures';
import { Call } from '../../components/Conference/Call';

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
      content: <Lectures />
    },
    {
      name: 'KEYNOTE LECTURES',
      path: `${path}/keynotelectures`,
      content: <Lectures />
    },
    {
      name: 'VENUE',
      path: `${path}/venue`,
      content: <Venue />
    },
    {
      name: 'CALL FOR 8TH ICANI 2020',
      path: `${path}/callfor2020`,
      content: <Call />
    }
  ].map((link) => (
    <Route key={link.path} exact path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer title="CONFERENCE" sidebarLinks={sidebarLinks} Content={Content} />;
};

export default ConferencePage;
