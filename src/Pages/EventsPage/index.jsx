import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import PageContainer from '../../components/PageContainer';
import { Hackathon } from '../../components/Events/Hackathon';
import { KeynoteSpeakers } from '../../components/KeynoteSpeakers';
import { TutorialSpeakers } from '../../components/TutorialSpeakers';
import { EventText } from '../../components/Events/EventText';

const Events = () => {
  const { path, url } = useRouteMatch();
  const sidebarLinks = [
    {
      name: 'CONFERENCE',
      to: `${url}/conference`
    },
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
    },
    {
      name: 'CONFERENCE',
      path: `${path}/conference`,
      content: (
        <>
          <h1>CONFERENCE</h1>
          <EventText />
          <KeynoteSpeakers />
          <TutorialSpeakers />
        </>
      )
    }
  ].map((link) => (
    <Route key={link.path} exact path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer title="EVENTS" sidebarLinks={sidebarLinks} Content={Content} />;
};

export default Events;
