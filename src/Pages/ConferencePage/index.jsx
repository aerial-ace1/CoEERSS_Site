import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
import { Venue } from '../../components/Conference/Venue';
// import { Lectures } from '../../components/Conference/Lectures';
import { Apply } from '../../components/Conference/Apply';
import AnnouncedSoon from '../../components/AnnouncedSoon';

const Filler = ({ title, text }) => (
  <div>
    <h1 className="mb-5">{title}</h1>
    <AnnouncedSoon text={text} />
  </div>
);

const ConferencePage = () => {
  const { path, url } = useRouteMatch();
  const sidebarLinks = [
    {
      name: 'KEYNOTE LECTURES',
      to: `${url}/keynotelectures`
    },
    {
      name: 'LECTURES',
      to: `${url}/lectures`
    },
    {
      name: 'TUTORIAL SPEAKERS',
      to: `${url}/tutorialspeakers`
    },
    {
      name: 'VENUE',
      to: `${url}/venue`
    },
    {
      name: 'How to Apply',
      to: `${url}/how-to-apply`
    }
  ];
  const Content = [
    {
      name: 'KEYNOTE LECTURES',
      path: `${path}`,
      content: <Filler title="KEYNOTE LECTURES" text="Will be updated" />
    },
    {
      name: 'KEYNOTE LECTURES',
      path: `${path}/keynotelectures`,
      content: <Filler title="KEYNOTE LECTURES" text="Will be updated" />
    },
    {
      name: 'LECTURES',
      path: `${path}/lectures`,
      content: <Filler title="LECTURES" text="Will be updated" />
    },
    {
      name: 'TUTORIAL SPEAKERS',
      path: `${path}/tutorialspeakers`,
      content: <Filler title="TUTORIAL SPEAKERS" text="Will be updated" />
    },
    {
      name: 'VENUE',
      path: `${path}/venue`,
      content: <Venue />
    },
    {
      name: 'How to Apply',
      path: `${path}/how-to-apply`,
      content: <Apply />
    }
  ].map((link) => (
    <Route key={link.path} exact path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer title="CONFERENCE" sidebarLinks={sidebarLinks} Content={Content} />;
};

export default ConferencePage;
