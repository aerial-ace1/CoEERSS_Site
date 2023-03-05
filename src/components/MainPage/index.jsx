import React from 'react';
import './style.css';
import {
  Carousel
  // Image
} from 'react-bootstrap';
import { GalleryCarousel } from '../../Pages/GalleryPage';
import { InTheNewsCar } from '../../Pages/InTheNewsPage';
// import { ImportantDates } from '../ImportantDates/ImportantDates';
// import { BestPaper } from '../BestPaper';
// import brz from './assets/brz.png';
// import sil from './assets/sil.png';
// import gld from './assets/gld.png';

const MainPage = () => (
  <div className="main-page">
    <Carousel className="carousel">
      <Carousel.Item interval={1000}>
        <img
          className="car-img"
          src="https://test.delta.nitt.edu/media/images/NITT.2e16d0ba.fill-1920x837.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>National Institute of Technology, Tiruchirappalli</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="car-img"
          src="https://www.admissionmba.in/wp-content/uploads/2019/10/CDAC-Noida-Campus.jpg"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>CDAC</h3>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="car-img"
          src="https://lh4.googleusercontent.com/hOe_L_XjgFBagMsJJJtPgKBCkkql5BMCaclLDcoGhbEloUBQgC9kROu4ebOuJETgqeLVO0HRp3m_orkvPaQvw9k9MKTgczSIbiIVXUrI1g-ghvMwbOpBMeqV1E7O1G9Chqs2xsvychRceK3Z3kiKRng"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>Mukambo and Cauvery flow, Trichy</h3>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="container mt-5">
      <h1>
        Home
      </h1>
      <p>
        <b>Emergency Response Support System (ERSS)</b>
        {' '}
        is a Pan-India single number
        (112) based emergency response system for citizens in emergencies.
        The Emergency Response Centre is capable of receiving emergency calls
        through voice call to 112, email, panic buttons activated calls and 112
        India mobile App. The objectives include:

      </p>
      <ol style={{ listStyleType: 'lower-alpha' }}>
        <li>
          Providing a single emergency response number across the country.
        </li>
        <li>
          Providing 24 Hours and 7 Days (24x7) efficient and effective response system which
          can receive input from various voice and data services such as voice call,
          SMS, email, Internet of Things, panic buttons in public transport etc. to
          attend to citizen in distress.
        </li>
        <li>
          Identification of location of person in
          distress connecting through voice or data.
        </li>
        <li>
          Automated response system for
          timely dispatch of field resources (police) to the location of incidence using
          the system.
        </li>
        <li>
          GPS (Global Positioning System) enabled dispatch of vehicles to
          locate nearest vehicles.
        </li>
        <li>
          Integration with existing Dial 100, Dial 108 and other
          emergency response systems.
        </li>
        <li>
          Integrate with other relevant systems like CCTNS etc.
          Also, connect to TSP’s (Telecom Service Provider) databases to update subscriber
          information and to connect to GMLC (Gateway Mobile Location Centre) for location update.
        </li>
        <li>
          Provide standardized and easy to use mobile apps, IoT (Internet of Things)
          enabled applications on a Pan-India basis.
        </li>
      </ol>
      <p>
        Intelligence Techniques have potential to alleviate the damage by marshalling relief
        resources more efficiently and effectively. It can accelerate the delivery of
        aid and sharpen the decisions of relief workers on the front lines.
      </p>
      <p>
        Natural disasters are out of the reach and influence of human beings.
        However, a lot can be done to minimize loss of lives.
        Intelligence Techniques is one viable option that can potentially prevent massive
        loss of lives while at the same time make rescue efforts easy and efficient.

      </p>
      {/* <p>
        The main goal of this conference is to share and discuss solutions to
        Emergency Support and Disaster Management through Intelligence.
        The significance of this conference lies in the pressing need for the integration of
        Intelligent solutions to address the challenges for
        Emergency Support and Disaster Management.
        The conference will discuss the various ideologies &
        methods of more Intelligent solutions and also investigates
        the different approaches developed
        in emergency support and disaster management.
        This conference provides opportunities to interact with prominent peoples
        in the field and immensely expand the network of scholars and professionals.
      </p> */}
      <h1>
        About ERSS
      </h1>
      <p>
        Emergency Response Support System (ERSS) is the vision of Govt. of
        India to launch an integrated emergency response system with a single
        emergency number 112, to address different emergencies of citizens. ERSS
        is designed to address all emergency signals received from citizens through
        voice call, SMS, e-mail, panic SOS signal, ERSS web portal etc.
      </p>
      <p>
        ERSS tracks the rescue and service vehicles of all services (Police, Fire, Health etc.)
        in real-time on a digital map of the State/UT and hence it will be possible to direct
        the right vehicle(s) to reach the service requestor and provide necessary support
        immediately.
      </p>
      <p>
        The CoE in ERSS at National Institute of Technology, Tiruchirappalli, operates
        with a primary focus on setting up an automated facility for emergency purpose
        in the capital cities of all States and UTs, called Public Safety Answering Point
        (PSAP), will handle all the emergency signals and provide assistance available to the
        people in distress within the best possible time with the help of Police, Fire & Rescue,
        Health services etc. This multi-faceted unique center offers skill development courses,
        Internships, Research and Development assistance across various sectors.
      </p>
      <br />
      <GalleryCarousel />
      <InTheNewsCar />
      <h1>
        Inauguration
      </h1>
      <p>
        The Centre of Excellence in Emergency Response Support System (CoEERSS) was inaugurated
        by Dr. C. Sylendra Babu, IPS, Director General of Police, Tamil Nadu today in the campus
        of NIT-Tiruchirappalli.
      </p>
      <p>
        Dr. N. Sivakumaran, Professor and Head, CoEERSS welcomed the gathering;  Mr. Kalai Selvan
        A, Director, C-DAC, Thiruvananthapuram was a Special Guest; Mr. Magesh Ethirajan, Director
        General, C-DAC was the Guest of Honour; Dr. Ramakalyan Ayyagari, Dean (Academic),
        NIT-Tiruchirappalli delivered the Presidential Address; Dr. C. Sylendra Babu IPS, Director
        General of Police, Tamil Nadu was the Chief Guest. He formally inaugurated the Centre
        of Excellence in ERSS, following which, he delivered the Inaugural address. He later
        distributed the prizes for a Hackathon event conducted recently as part of a conference
        in NIT-Tiruchirappalli, and interacted with the prize winners. The Vote of Thanks was
        delivered by Dr. Shishaj P. Simon, Professor, department of EEE, NIT-Tiruchirappalli.
      </p>
      <h1>
        About NITT
      </h1>
      <p>
        The National Institute of Technology (formerly known as Regional Engineering College)
        Tiruchirappalli (NITT) was started as a joint and co-operative venture of the Government
        of India and the Government of Tamil Nadu in 1964 with a view to cater the needs of manpower
        in technology for the country. NITT is one of the 31 National Institutes of
        Technology established by the Government of India and ranks First among all the NITs
        in NIRF. The institution offers Undergraduate Courses
        in ten branches and Post Graduate Courses in twenty-one disciplines of Science,
        Engineering & Technology besides M.S. (by Research) and Ph.D. in all the departments.
      </p>
      <br />
      <h1>
        ABOUT  CDAC, TRIVANDRUM
      </h1>
      <p>

        The centre at Thiruvananthapuram has been working in application oriented research,
        design and development for various industrial and customer requirements.
        Over the years, Centre has acquired competency, expertise and extensive experience
        in the areas of Broadcast & Communications, Control & Instrumentation, Networking,
        Power Electronics, ASIC Design and Underwater Electronics.

      </p>
      <p>
        The centre accorded prime importance to making such products easily productionable,
        testable and field maintainable, thereby ensuring highly reliable operation.
        The technology development initiatives are focused in the identified core areas of
        Electronics and Information Technology, with funding from various Sponsors.
        The output of these efforts coupled with the high-value expertise and experience gained
        are conceptualized as products, either entirely new, or with quantum improvements on
        those based on existing technology. Scores of technologies developed have been transferred
        to Technology partners for large-scale production.
      </p>

      {/* <h1>
        Proceedings of ISERDM
      </h1>
      <div className="image-container">
        <a href="https://www.springer.com/series/11156">
          <Image fluid className="image" src="https://entrepreneurship.ieee.org/wp-content/uploads/2020/03/770x320-ieeeexplore.png" />
        </a>
      </div>
      <p>
        After a careful peer review process, it is planned that all accepted papers after proper
        registration will be published in Conference Proceedings by IEEE, which will be included
        IEEE Xplore and submitted to Ei Compendex and Scopus. (Submitted the Proposal)
      </p>
      <br />
      <h1>
        Important Dates
      </h1>
      <ImportantDates /> */}
      {/* <h1>
        Annual Theme
      </h1>
      <Card className="text-center m-auto mt-3 mb-3">
        <Card.Header as="h4">
          Computational Intelligence
          and
          Machine Learning
        </Card.Header>
        <Card.Body>
          <Card.Title>Topics include but are not limited to:</Card.Title>

          <ListGroup variant="flush">
            <ListGroup.Item>Knowledge representation</ListGroup.Item>
            <ListGroup.Item>Deep Learning Techniques</ListGroup.Item>
            <ListGroup.Item>Machine Translation</ListGroup.Item>
            <ListGroup.Item>Information Retrieval</ListGroup.Item>
            <ListGroup.Item>Pattern recognition</ListGroup.Item>
            <ListGroup.Item>Big Data Analytics</ListGroup.Item>
            <ListGroup.Item>Computer Vision</ListGroup.Item>
            <ListGroup.Item>Applications in IoT, Security, Data Mining</ListGroup.Item>
            <ListGroup.Item>Geospatial Information and Technologies</ListGroup.Item>
            <ListGroup.Item>Hyperspectral Imaging</ListGroup.Item>
            <ListGroup.Item>Infrared Remote Sensing</ListGroup.Item>
          </ListGroup>
        </Card.Body>
      </Card>
      <br /> */}
      {/* <BestPaper />
      <h1>
        Technical Co-Sponsors
      </h1>
      <h3>Sponsorship Opportunities</h3>
      <p>
        Sponsorship of
        {' '}
        <b>ISERDM 2023</b>
        {' '}
        provides a company or an organization with a unique opportunity to increase its visibility
        and product awareness within a highly specialized, influential community.
      </p>
      <p>
        Acknowledgements of the sponsors, such as the company&#39;s name, product, and logo,
        will appear in the main page of ISERDM, WWW Server and in all official documentation
        of the conference.
      </p>
      <p>
        For
        {' '}
        <b>ISERDM 2023</b>
        {' '}
        sponsorship opportunities please contact :
      </p>
      <p>
        Dr. P. A. Karthick, Assistant Professor, Department of ICE, NIT, Trichy,
        Email : pakarthick@nitt.edu

      </p>
      <br />
      <div className="row">
        <div className="col-lg-4">
          <h5 className="text-center">
            Gold Sponsorship (INR 75,000 or above)
          </h5>
          <div className="text-center"><Image className="img-fluid m-3
          text-center" src={gld} /></div>
          <ol>
            <li>FOUR full conference registrations</li>
            <li>Exhibits Space</li>
            <li>A full page ad in the Conference Proceedings</li>
            <li>A full page ad in the final conference program</li>
            <li>Inclusion of your company logo in all conference advertising</li>
            <li>Prominent signage identifying company as a Gold patron</li>
            <li>Name and logo in our WWW advertising, linkage to your company website</li>
            <li>Acknowledgement in opening address</li>
          </ol>
        </div>
        <div className="col-lg-4">
          <h5 className="text-center">
            Silver Sponsorship (INR 50,000 or above)
          </h5>
          <div className="text-center"><Image className="img-fluid m-3
          text-center" src={sil} /></div>
          <ol>
            <li>TWO full conference registrations</li>
            <li>Exhibits Space</li>
            <li>A quarter page ad in the final conference program</li>
            <li>Inclusion of your logo in all conference advertising</li>
            <li>Prominent signage identifying company as a Silver patron</li>
            <li>Name and logo in our WWW advertising, linkage to your company website</li>
            <li>Acknowledgement in opening address</li>

          </ol>
        </div>
        <div className="col-lg-4">
          <h5 className="text-center">
            Bronze Sponsorship ( INR  25,000 or above)
          </h5>
          <div className="text-center"><Image className="img-fluid m-3" src={brz} /></div>
          <ol>
            <li>ONE full conference registration</li>
            <li>Exhibits Space</li>
            <li>A quarter page ad in the final conference program</li>
            <li>Inclusion of the logo in all conference advertising</li>
            <li>Prominent signage identifying company as a Bronze patron</li>
            <li>Name and logo in our WWW advertising, linkage to the company website</li>
            <li>Acknowledgement in opening address</li>
          </ol>
        </div> */}
      {/* </div> */}
    </div>
  </div>

);

export default MainPage;
