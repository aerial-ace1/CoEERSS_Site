import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
// import { Lectures } from '../../components/Conference/Lectures';
// import { Apply } from '../../components/Conference/Apply';
// import AnnouncedSoon from '../../components/AnnouncedSoon';
import { KeynoteSpeakers } from '../../components/KeynoteSpeakers';
import { TutorialSpeakers } from '../../components/TutorialSpeakers';
import { EventText } from '../../components/Events/EventText';

// const Filler = ({ title, text }) => (
//   <div>
//     <h1 className="mb-5">{title}</h1>
//     <AnnouncedSoon text={text} />
//   </div>
// );

const ConferencePage = () => {
  const { path, url } = useRouteMatch();
  const sidebarLinks = [
    {
      name: 'KEYNOTE SPEAKERS',
      to: `${url}/keynotelectures`
    },
    {
      name: 'CONFERENCE',
      to: `${url}/conference`
    },
    {
      name: 'TUTORIAL SPEAKERS',
      to: `${url}/tutorialspeakers`
    }
  ];
  const Content = [
    {
      name: 'KEYNOTE SPEAKERS',
      path: `${path}`,
      content: <KeynoteSpeakers />
    },
    {
      name: 'CONFERENCE',
      path: `${path}/conference`,
      content: (
        <>
          <h1>CONFERENCE</h1>
          <EventText />
        </>
      )
    },
    {
      name: 'KEYNOTE SPEAKERS',
      path: `${path}/keynotelectures`,
      content: <KeynoteSpeakers />
    },
    {
      name: 'TUTORIAL SPEAKERS',
      path: `${path}/tutorialspeakers`,
      content: <TutorialSpeakers />
    }
  ].map((link) => (
    <Route key={link.path} exact path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer title="CONFERENCE" sidebarLinks={sidebarLinks} Content={Content} />;
};

export default ConferencePage;
