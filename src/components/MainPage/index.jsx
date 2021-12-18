import React from 'react';
import './style.css';
import {
  Carousel, Image, Card, ListGroup, Row, Col
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
          <h3>ICACNI - 2022</h3>
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
          <h3>ICACNI - 2022</h3>
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
          <h3>ICACNI - 2022</h3>
          <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    <div className="container mt-5">
      <h1>
        About ICACNI
      </h1>
      <p className="m-3 content">
        ICACNI focuses on both theory and applications in the broad areas
        of communication technology, computer science
        & information security. This conference aims to bring together
        academic scientists, professors, research scholars
        and students to share and disseminate information
        on knowledge and scientific research works related to computing,
        networking, and informatics to discuss the practical challenges
        encountered and the solutions adopted. The conference will provide
        the authors and listeners with opportunities for national and international
        collaboration and networking among universities and institutions from India
        and abroad for promoting research and developing technologies. This aims to
        promote translation of basic research into applied investigation and convert
        applied investigation into practice. This conference will also create awareness
        about the importance of basic scientific research in different fields and matching
        this with the product market. Invited and selected speakers will present research
        reports, followed by open discussion.
      </p>
      <br />
      <h1>
        Proceedings of ICACNI
      </h1>
      <div className="image-container">
        <a href="https://www.springer.com/series/11156">
          <Image className="image" src="https://resource-cms.springernature.com/springer-cms/rest/v1/content/29630/data/v1" />

        </a>
      </div>
      <p className="m-3 content">
        Proceedings of ICACNI 2022 will be published by
        Advances in  Intelligent Systems
        and Computing series  Springer.
        In previous eight years (2013 - 2020) also, the proceedings were published by Springer.
      </p>
      <br />
      <h1>
        Important Dates
      </h1>
      <ImportantDates />
      <h1>
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
      <br />
      <h1>
        Technical Co-Sponsors
      </h1>
      <Row className="text-center">
        <Col>
          <Image className="image" src="https://sites.google.com/site/icacni2019/_/rsrc/1569296589106/home/IETE.jpg?height=100&width=100" />
          <p>
            The Institution of Electronics and Telecommunication Engineers
          </p>
        </Col>
        <Col>
          <Image className="image" src="https://sites.google.com/site/icacni2019/_/rsrc/1562669580861/IEEE_CIS.png?height=90&width=233" />
          <p>
            Intelligent Systems Applications Technical Committee,
            IEEE Computational Intelligence Society
          </p>
        </Col>
        <Col>
          <Image className="image" src="https://sites.google.com/site/icacni2019/_/rsrc/1568127787748/home/IEEEGRSSKolkataSection.jpg?height=90&width=132" />
          <p>IEEE Kolkata GRSS Chapter</p>
        </Col>
      </Row>
      <br />
    </div>
  </div>

);

export default MainPage;
