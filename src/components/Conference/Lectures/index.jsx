import React from 'react';
import AnnouncedSoon from '../../AnnouncedSoon';
// import { Row } from 'react-bootstrap';
// import { Card } from '../../Card/Card';

// const Content = (
//   <div className="container d-flex h-100">
//     <div className="row justify-content-center align-self-center">
//       <h5>Padma Shri Ajoy Kumar Ray</h5>
//       <p>
//         Retired Professor, Indian Institute of Technology,
//         Kharagpur, India
//         Former Director, Indian Institute of Engineering Science And Technology, Shibpur, India
//       </p>
//     </div>
//   </div>
// );

export const Lectures = () => (
  <>
    <h1 className="mb-5">Lectures</h1>
    <AnnouncedSoon text="To be announced..." />
    {/* <Row className="mb-5">
      <Card align={0} src="https://sites.google.com/site/icacni2019/_/rsrc/1569300973786/AKRay.jpg?height=200&width=170" title="Recent Advancement in Machine Learning" content={Content} />
    </Row>
    <Row className="mb-5">
      <Card align={1} src="https://sites.google.com/site/icacni2019/_/rsrc/1569300973786/AKRay.jpg?height=200&width=170" title="Recent Advancement in Machine Learning" content={Content} />
    </Row> */}
  </>
);
