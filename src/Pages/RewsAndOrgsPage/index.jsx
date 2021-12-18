import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
import { Award } from '../../components/REO/Award';
import { Call } from '../../components/REO/Call';
import { Guidelines } from '../../components/REO/Guidelines';

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
      path: `${path}`,
      content: <Guidelines />
    },
    {
      name: 'REVIEWER GUIDELINES',
      path: `${path}/reviewerguidelines`,
      content: <Guidelines />
    },
    {
      name: 'CALL FOR SPECIAL SESSIONS',
      path: `${path}/callforspecialsession`,
      content: <Call />
    },
    {
      name: 'OUTSTANDING REVIEWER AWARD',
      path: `${path}/outsrevieweaward`,
      content: <Award />
    }
  ].map((link) => (
    <Route key={link.path} exact path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer title="FOR REVIWERS AND SESSION ORGANIZERS" sidebarLinks={sidebarLinks} Content={Content} />;
};

export default RewsAndOrgsPage;
