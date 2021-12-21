import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { ImportantDates } from '../../components/ImportantDates/ImportantDates';
import PageContainer from '../../components/PageContainer';
import Publication from '../../components/Publication';
import CallForPapers from '../../components/CallForPapers';

const AuthorsAndListenersPage = () => {
  const { path, url } = useRouteMatch();
  const sidebarLinks = [
    {
      name: 'PROGRAMME SCHEDULE',
      to: `${url}/schedule`
    },
    {
      name: 'REGISTERED ARTICLES',
      to: `${url}/articles`
    },
    {
      name: 'CALL FOR PAPERS',
      to: `${url}/callforpapers`
    },
    {
      name: 'IMPORTANT DATES',
      to: `${url}/importantdates`
    },
    {
      name: 'PUBLICATION',
      to: `${url}/publication`
    },
    {
      name: 'AUTHOR GUIDELINES',
      to: `${url}/authorguidelines`
    }
  ];

  const Content = [
    {
      name: 'PROGRAMME SCHEDULE',
      path: `${path}`,
      content: <div>PROGRAMME SCHEDULE</div>
    },
    {
      name: 'PROGRAMME SCHEDULE',
      path: `${path}/schedule`,
      content: <div>PROGRAMME SCHEDULE</div>
    },
    {
      name: 'REGISTERED ARTICLES',
      path: `${path}/articles`,
      content: <div>REGISTERED ARTICLES</div>
    },
    {
      name: 'CALL FOR PAPERS',
      path: `${path}/callforpapers`,
      content: (
        <>
          <h1>CALL FOR PAPERS</h1>
          <CallForPapers />
        </>
      )
    },
    {
      name: 'IMPORTANT DATES',
      path: `${path}/importantdates`,
      content:
      (
        <>
          <h1>Important Dates</h1>
          <ImportantDates />
        </>
      )
    },
    {
      name: 'PUBLICATION',
      path: `${path}/publication`,
      content: <Publication />
    },
    {
      name: 'AUTHOR GUIDELINES',
      path: `${path}/authorguidelines`,
      content: <div>AUTHOR GUIDELINES</div>
    }
  ].map((link) => (
    <Route key={link.path} exact path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer title="FOR AUTHORS AND LISTENERS" sidebarLinks={sidebarLinks} Content={Content} />;
};

export default AuthorsAndListenersPage;
