import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { ImportantDates } from '../../components/ImportantDates/ImportantDates';
// import { RegisteredArticles } from '../../components/RegisteredArticles/RegisteredArticles';
import PageContainer from '../../components/PageContainer';
import Publication from '../../components/Publication';
import { Call } from '../../components/Conference/Call';
// import AnnouncedSoon from '../../components/AnnouncedSoon';
import { Apply } from '../../components/Conference/Apply';

// const Filler = ({ title, text }) => (
//   <div>
//     <h1 className="mb-5">{title}</h1>
//     <AnnouncedSoon text={text} />
//   </div>
// );

const AuthorsAndListenersPage = () => {
  const { path, url } = useRouteMatch();
  const sidebarLinks = [
    {
      name: 'CALL FOR PAPERS',
      to: `${url}/callforpapers`
    },
    {
      name: 'IMPORTANT DATES',
      to: `${url}/importantdates`
    },
    {
      name: 'HOW TO APPLY',
      to: `${url}/how-to-apply`
    },
    {
      name: 'PUBLICATION',
      to: `${url}/publication`
    }
  ];

  const Content = [
    {
      name: 'CALL FOR PAPERS',
      path: `${path}`,
      content: (
        <>
          <h1>CALL FOR PAPERS</h1>
          <Call />
        </>
      )
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
      name: 'HOW TO APPLY',
      path: `${path}/how-to-apply`,
      content: <Apply />
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
    }
  ].map((link) => (
    <Route key={link.path} exact path={link.path}>
      {link.content}
    </Route>
  ));
  return <PageContainer title="CALL FOR PAPERS" sidebarLinks={sidebarLinks} Content={Content} />;
};

export default AuthorsAndListenersPage;
