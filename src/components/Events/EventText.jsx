import React from 'react';
import Button from 'react-bootstrap/Button';
import { Image } from 'react-bootstrap';
import { Link45deg } from 'react-bootstrap-icons';
import first from './assets/1.jpeg';

export const EventText = () => (
  <div>
    <p>
      The International Conference on “Intelligent Solutions for Emergency Support and
      Disaster Management,” jointly Organized by CoE in Emergency Response Support System
      (ERSS)/ National Institute of Technology Tiruchirappalli, and Centre for Development
      of Advanced Computing (CDAC), Trivandrum, is deliberated to step in widening the
      knowledge of Sustainable development through the participation of researchers,
      academicians, and professionals from all over India.
    </p>
    <p>
      The main goal of this conference is to share and discuss solutions to Emergency
      Support and Disaster Management through Intelligence. The significance of this
      conference lies in the pressing need for the integration of Intelligent solutions
      to address the challenges for Emergency Support and Disaster Management. The
      conference will discuss the various ideologies & methods of more Intelligent
      solutions and also investigates the different approaches developed in emergency
      support and disaster management. This conference provides opportunities to interact
      with prominent peoples in the field and immensely expand the network of scholars
      and professionals.
    </p>
    <p>
      More than 30 research articles on Artificial Intelligence, Disaster Management Prediction
      and relief, System resource management, monitoring applications, Emergency response and
      Emergency rescue will be presented. Through 8 keynote lectures, eminent experts will be
      sharing their research expertise.
    </p>
    <p>
      The conference will be inaugurated by Dr.V.Thiruppugazh, IAS (Retd), Chairman, the Advisory
      Committee on Flood Mitigation for Chennai Metro, Former Advisor, of National Disaster
      Management Authority (NDMA), Ministry of Home Affairs. It will be presided by Dr G Aghila,
      Director, NIT-T. The Guest of Honour will be Shri E Magesh, Director General, C-DAC. Special
      invitees are Shri. Vishnu Venugopal, IAS, District Collector, Tirunelveli and Shri. V. Badri
      Narayanan, IPS, Superintendent of Police, Coimbatore.
    </p>
    <p>
      Keynote speakers include Dr. Chung-Horng Lung, Professor, Carleton University, Ottawa,
      Canada, Dr K Radhakrishnan, Former Director, Sree Chitra Thirunal Institute for Medical
      Sciences & Technology (SCTIMST), Thiruvananthapuram, Dr S Kumaravel, Professor and Head,
      Orthopaedics, Thanjavur Medical College, Mr Bala Sriraghavan, CEO and Founder,
      Datanetiix Solutions Inc., USA.
    </p>
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      flexFlow: 'column wrap'
    }}
    >
      <Image style={{ width: '80%', padding: '10px' }} src={first} />
      <a href="https://iserdm2023.nitt.edu/" target="_blank" rel="noreferrer" style={{ margin: '1rem 0' }}>
        <Button variant="dark">
          <Link45deg />
          ISERDM-2023
        </Button>
      </a>
    </div>
  </div>
);
