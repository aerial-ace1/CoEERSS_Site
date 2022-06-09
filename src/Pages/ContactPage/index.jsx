import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { Contact } from '../../components/Contact';
import PageContainer from '../../components/PageContainer';

const ContactPage = () => {
  const { path, url } = useRouteMatch();
  const sidebarLinks = [
    {
      name: 'CONTACT',
      to: `${url}/contact`
    }
  ];

  const Content = [
    {
      name: 'CONTACT',
      path: `${path}/contact`,
      content: <Contact />
    },
    {
      name: 'CONTACT',
      path: `${path}`,
      content: <Contact />
    }
  ].map((link) => (
    <Route key={link.path} exact path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer title="Contact" sidebarLinks={sidebarLinks} Content={Content} />;
};

export default ContactPage;
