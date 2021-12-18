import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

export const Call = () => (
  <div>
    <p className="mt-3">
      The ICACNI core committee invites proposals from institutes for co-organizing the 10th
      conference in 2020. The preferred conference date is during 2nd or 3rd week of March 2020.
      Other nearby dates can be discussed. The committee expects the co-organizing institution to
      bear some responsibilities of managing the conference, and hence a group of active organizers
      is most welcome.
    </p>
    <br />
    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        Deadlines
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item as="li">
            <b>Submission of Proposals</b>
            {' '}
            : 31-Aug-2019
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <b>Discussion with applicants</b>
            {' '}
            : 01-Sep-2019 to 31-Oct-2019
          </ListGroup.Item>
          <ListGroup.Item as="li">
            <b>Final decision</b>
            {' '}
            : 30-Nov-2019
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
    <br />
    <h1>How to apply</h1>

    <p className="mt-3 md-3">
      Applications can be submitted to icacni2019@gmail.com and a copy of the same can
      be copied (cc) to sambitbaksi@gmail.com with a subject line as &#34;Proposal to
      co-organize 8th ICACNI 2020:

      &#60;Name of the Center/Department/Section&#62;,
      &#60;Name of the Institution&#62;&#34;
    </p>

    Following attachments should accompany the application e-mail:
    <br />

    <ListGroup variant="flush" as="ol" numbered>
      <ListGroup.Item as="li">
        A scanned copy of the letter / email from the head of the
        department/centre/laboratory proposing to host the conference,
        which should be forwarded and approved by head of the institute (Director/Dean/Registrar).
      </ListGroup.Item>
      <ListGroup.Item as="li">
        The Professional Curriculum Vitae of the applicant
        (who will serve as one of the Programme Co-Chairs if proposal is accepted).
      </ListGroup.Item>
      <ListGroup.Item as="li">
        A list of 10 members of the conference organizing committee
        with link of webpages of every member. Consent should be taken
        from every member before including their names. These people will
        serve in organizing committee if proposal is accepted.
      </ListGroup.Item>
      <ListGroup.Item as="li">
        A list of possible 15 collaborators (along with links of their webpages)
        of the applicant who will play major roles in the conference. Consent should be
        taken from every member before including their names. These people will be included
        in TPC if proposal is accepted.
      </ListGroup.Item>
    </ListGroup>
    <br />

    <h1>Notes</h1>
    <ListGroup variant="flush" as="ol" numbered>
      <ListGroup.Item as="li">
        Any premier institute across the globe are eligible to apply.
      </ListGroup.Item>
      <ListGroup.Item as="li">
        We do not require any financial assistance from the hosting institution,
        but the dedicated engagement of the faculty members to make the conference a success.
      </ListGroup.Item>
      <ListGroup.Item as="li">
        Our core committee members will also actively participate and support the host
        institute to co-organize a successful conference.
      </ListGroup.Item>
      <ListGroup.Item as="li">
        Mere fulfilment of eligibility does not assure the conference hosting.
      </ListGroup.Item>
      <ListGroup.Item as="li">
        Preference will be given to departments with more relevance to research in computer
        science and related fields as this is a conference dedicated to computer science.

      </ListGroup.Item>
      <ListGroup.Item as="li">
        Any query regarding the procedure of applying or any other related discussion can
        be mailed to icacni2019@gmail.com and a copy of the same can be copied (cc) to
        sambitbaksi@gmail.com with a subject line as &#34;Query regarding proposal to co-organize
        8th ICACNI 2020: &#60;Name of the Center/Department/Section&#62;,
        &#60;Name of the Institution&#62;&#34;

      </ListGroup.Item>
    </ListGroup>
  </div>
);
