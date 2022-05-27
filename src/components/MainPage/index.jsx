import React from 'react';
import './style.css';
import {
  Carousel, Image, Row, Col
} from 'react-bootstrap';
import { ImportantDates } from '../ImportantDates/ImportantDates';

const MainPage = () => (
  <div className="main-page">
    <Carousel className="carousel">
      <Carousel.Item interval={1000}>
        <img
          className="car-img"
          src="https://clip2022.nitt.edu/images/cse.png"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>ISERDM-2023</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img
          className="car-img"
          src="https://clip2022.nitt.edu/images/cse.png"
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3>ISERDM-2023</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="car-img"
          src="https://clip2022.nitt.edu/images/cse.png"
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3>ISERDM-2023</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="container mt-5">
      <h1>
        About ISERDM
      </h1>
      <p className="m-3 content">
        <p>
          The International Conference on “
          <b>Intelligent Solutions for Emergency Support and Disaster Management</b>
          ,” jointly Organized by CoE in Emergency Response Support System (ERSS)/
          National Institute of Technology Tiruchirappalli, and Centre for
          Development of Advanced Computing (CDAC),
          Trivandrum, is deliberated to step in widening the knowledge of Sustainable
          developments through the participation of researchers, academicians,
          and professionals from all over the country.
        </p>
        <p>
          Emergency Response Support System (ERSS) is a Pan-India single number
          (112) based emergency response system for citizens in emergencies.
          The Emergency Response Centre is capable of receiving emergency calls
          through voice call to 112, email, panic buttons activated calls and 112
          India mobile App. The objectives include: i. Providing a single
          emergency response number across the country. ii. Providing 24
          Hours and 7 Days (24x7) efficient and effective response system which
          can receive input from various voice and data services such as voice call,
          SMS, email, Internet of Things, panic buttons in public transport etc. to
          attend to citizen in distress. iii. Identification of location of person in
          distress connecting through voice or data. iv. Automated response system for
          timely dispatch of field resources (police) to the location of incidence using
          the system. v. GPS (Global Positioning System) enabled dispatch of vehicles to
          locate nearest vehicles. vi. Integration with existing Dial 100, Dial 108 and other
          emergency response systems. vii. Integrate with other relevant systems like CCTNS etc.
          Also, connect to TSP’s (Telecom Service Provider) databases to update subscriber
          information and to connect to GMLC (Gateway Mobile Location Centre) for location update.
          viii. Provide standardized and easy to use mobile apps, IoT (Internet of Things)
          enabled applications on a Pan-India basis. Intelligence
          Techniques have potential to alleviate the damage by marshalling relief
          resources more efficiently and effectively. It can accelerate the delivery of
          aid and sharpen the decisions of relief workers on the front lines.

        </p>
        <p>
          Natural disasters are out of the reach and influence of human beings.
          However, a lot can be done to minimize loss of lives.
          Intelligence Techniques is one viable option that can potentially prevent massive
          loss of lives while at the same time make rescue efforts easy and efficient.

        </p>
        <p>
          The main goal of this conference is to share and discuss solutions to
          Emergency Support and Disaster Management through Intelligent techniques.
          The significance of this conference lies in the pressing need for the integration of
          Intelligent solutions to address the challenges for
          Emergency Support and Disaster Management.
          The conference will discuss the various ideologies &
          methods of more Intelligent solutions and also investigates
          the different approaches developed
          in emergency support and disaster management.
          This conference provides opportunities to interact with prominent peoples
          in the field and immensely expand your network of scholars and professionals.

        </p>
      </p>
      <br />
      <h1>
        Proceedings of ISERDM
      </h1>
      <div className="image-container">
        <a href="https://www.springer.com/series/11156">
          <Image className="image" src="https://entrepreneurship.ieee.org/wp-content/uploads/2020/03/770x320-ieeeexplore.png" />
        </a>
      </div>
      <p className="m-3 content">
        After a careful reviewing process, all accepted and presented papers
        after proper registration and presentation,
        will be published into Conference Proceedings by IEEE, which will be
        included IEEE Xplore and submitted for Ei Compendex and Scopus.
      </p>
      <br />
      <h1>
        Important Dates
      </h1>
      <ImportantDates />
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
      <h1>
        Technical Co-Sponsors
      </h1>
      <Row className="text-center">
        <Col>
          <Image className="image" src="https://odishanewsinsight.com/wp-content/uploads/2018/12/Ministry-of-Home-Affairs.png" />
          {/* <p>
            Ministry of Home Affairs
          </p> */}
        </Col>

      </Row>
      <br />
    </div>
  </div>

);

export default MainPage;
