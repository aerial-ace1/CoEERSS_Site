import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import AnnouncedSoon from '../../components/AnnouncedSoon';
import { AuthorGuidelines } from '../../components/AuthorGuidelines/AuthorGuidelines';
import { BestPaper } from '../../components/BestPaper';
import PageContainer from '../../components/PageContainer';
// import { Award } from '../../components/REO/Award';
// import { Call } from '../../components/REO/Call';

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
      name: 'AUTHOR GUIDELINES',
      to: `${url}/authorguidelines`
    },
    {
      name: 'BEST PAPER AWARD',
      to: `${url}/bestpaperaward`
    },
    {
      name: 'PROGRAMME SCHEDULE',
      to: `${url}/programmeschedule`
    },
    {
      name: 'REGISTERED ARTICLES',
      to: `${url}/registeredarticles`
    }
  ];

  const Content = [
    {
      name: 'AUTHOR GUIDELINES',
      path: `${path}/authorguidelines`,
      content: <AuthorGuidelines />
    },
    {
      name: 'BEST PAPER AWARD',
      path: `${path}/bestpaperaward`,
      content: <BestPaper />
    },
    {
      name: 'AUTHOR GUIDELINES',
      path: `${path}`,
      content: <AuthorGuidelines />
    },
    {
      name: 'PROGRAMME SCHEDULE',
      path: `${path}/programmeschedule`,
      content: <Filler title="PROGRAMME SCHEDULE" text="Will be updated..." />
    },
    {
      name: 'REGISTERED ARTICLES',
      path: `${path}/registeredarticles`,
      content: <Filler title="REGISTERED ARTICLES" text="Will be updated..." />
    }
  ].map((link) => (
    <Route key={link.path} exact path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer title="FOR AUTHORS AND LISTENERS" sidebarLinks={sidebarLinks} Content={Content} />;
};

export default RewsAndOrgsPage;
