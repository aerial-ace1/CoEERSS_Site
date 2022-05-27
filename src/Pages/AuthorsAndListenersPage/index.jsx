import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { ImportantDates } from '../../components/ImportantDates/ImportantDates';
// import { RegisteredArticles } from '../../components/RegisteredArticles/RegisteredArticles';
import { AuthorGuidelines } from '../../components/AuthorGuidelines/AuthorGuidelines';
import PageContainer from '../../components/PageContainer';
import Publication from '../../components/Publication';
import { Call } from '../../components/Conference/Call';
import AnnouncedSoon from '../../components/AnnouncedSoon';

const Filler = ({ title, text }) => (
  <div>
    <h1 className="mb-5">{title}</h1>
    <AnnouncedSoon text={text} />
  </div>
);

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
      content: <Filler title="PROGRAMME SCHEDULE" text="Will be updated" />
    },
    {
      name: 'PROGRAMME SCHEDULE',
      path: `${path}/schedule`,
      content: <Filler title="PROGRAMME SCHEDULE" text="Will be updated" />
    },
    {
      name: 'REGISTERED ARTICLES',
      path: `${path}/articles`,
      content: <Filler title="REGISTERED ARTICLES" text="Will be updated" />
    },
    {
      name: 'CALL FOR PAPERS',
      path: `${path}/callforpapers`,
      content: (
        <>
          <h1>CALL FOR PAPERS</h1>
          <Call />
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
      content: <AuthorGuidelines />
    }
  ].map((link) => (
    <Route key={link.path} exact path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer title="FOR AUTHORS AND LISTENERS" sidebarLinks={sidebarLinks} Content={Content} />;
};

export default AuthorsAndListenersPage;
