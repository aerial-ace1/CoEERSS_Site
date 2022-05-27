import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import AnnouncedSoon from '../../components/AnnouncedSoon';
import PageContainer from '../../components/PageContainer';
// import { Award } from '../../components/REO/Award';
// import { Call } from '../../components/REO/Call';

import { Guidelines } from '../../components/REO/Guidelines';

const Filler = ({ title, text }) => (
  <div>
    <h1 className="mb-5">{title}</h1>
    <AnnouncedSoon text={text} />
  </div>
);

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
      content: <Filler title="CALL FOR SPECIAL SESSIONS" text="Will be updated" />
    }
  ].map((link) => (
    <Route key={link.path} exact path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer title="FOR REVIWERS AND SESSION ORGANIZERS" sidebarLinks={sidebarLinks} Content={Content} />;
};

export default RewsAndOrgsPage;
