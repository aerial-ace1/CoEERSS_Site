import React from 'react';
import Button from 'react-bootstrap/Button';
import { Link45deg } from 'react-bootstrap-icons';

export const Hackathon = () => (
  <div>
    <p>
      As a part of the conference, a 28 Hour Hackathon is also planned jointly with
      Datanetiix Solutions India Pvt. Ltd. on 9th  and 10th  Jan 2023. All undergraduate
      students who are currently pursuing their Bachelors degree, i.e. B.Sc., B.C.A., B
      .B.A., B.Com., B.E., B.Tech., etc. are eligible to participate in the Hackathon.
      Participants, in teams of two, are invited to propose their own problem statements
      in the domains of App Development, Machine Learning, Data Science and IT/Web security.
      The shortlisting is based on how fresh, innovative and novel the ideas are.
      Prize money worth Rs 25000/- has been planned. The hackathon will be conducted completely
      in offline mode, on the premises of NIT-T.
    </p>
    <div style={{ display: 'flex', gap: '1rem' }}>
      <a href="https://nit-hackathon.datanetiix.com/" target="_blank" rel="noreferrer">
        <Button variant="dark">
          <Link45deg />
          Hackathon Details
        </Button>
      </a>
      <a href="https://www.nitt.edu/home/Hackathon_Jan2023.pdf" target="_blank" rel="noreferrer">
        <Button variant="dark">
          <Link45deg />
          Hackathon Poster
        </Button>
      </a>
    </div>
  </div>
);
