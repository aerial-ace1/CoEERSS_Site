import React from 'react';
import { ListGroup } from 'react-bootstrap';

export const Call = () => (
  <div>
    <h1>Call for Special Session</h1>
    <p>
      Proposals for organizing special sessions are invited from academicians and industry experts
      from highly-reputed organizations. The proposals should clearly indicate:
    </p>
    <br />

    <ListGroup variant="flush" as="ol" numbered>
      <ListGroup.Item as="li">Session Title</ListGroup.Item>
      <ListGroup.Item as="li">Name(s), designation, and affiliation of session chair(s) and session-committee members</ListGroup.Item>
      <ListGroup.Item as="li">Aims and Objective [200 words]</ListGroup.Item>
      <ListGroup.Item as="li">Topics of Interest [120 words]</ListGroup.Item>
      <ListGroup.Item as="li">Expected number of articles to receive</ListGroup.Item>
      <ListGroup.Item as="li">List of name, affiliation, email of 50 target researchers who can submit articles to this session</ListGroup.Item>
    </ListGroup>

    <p className="mt-3">
      Special session proposals along with a short curriculum vitae of the session chair(s)
      can be mailed to icacni@gmail.com (copy to sambitbaksi@gmail.com) on or before 20 July 2019.
      After review by an external expert panel, decision regarding the special session will be
      intimated within 14 days from submission of the proposal.
    </p>

    <h1>Notes</h1>
    <ListGroup variant="flush" as="ol" numbered>
      <ListGroup.Item as="li">All accepted special sessions will be sponsored to deliver a Best Paper Award at the conference.</ListGroup.Item>
      <ListGroup.Item as="li">A special session must target a particular audience who are probable to submit for the special session. Insufficient number of submissions will lead to drop of the special sessions but the registered articles under the sessions will be considered as regular articles and will be published in the proceedings.</ListGroup.Item>
      <ListGroup.Item as="li">Selection of a special session is subject to the mutual exclusiveness of already requested and approved special issues. If we do have approved a special session topic, we are unable to entertain a second special session on the same topic. All approved special sessions will be listed under SPECIAL SESSIONS tab in left sidebar of the website.</ListGroup.Item>
      <ListGroup.Item as="li">The primary special session chair will be offered 2AC train travel in India and accommodation during the session.</ListGroup.Item>
      <ListGroup.Item as="li">Each special session will be awarded one best paper award.</ListGroup.Item>
    </ListGroup>
  </div>
);
