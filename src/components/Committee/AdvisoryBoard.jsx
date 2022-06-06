import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

export const AdvisoryBoard = ({ technical }) => (
  <div>
    <h1>
      {technical ? 'Technical' : 'Advisory'}
      {' '}
      Board
    </h1>
    <br />

    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        INTERNATIONAL
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            Dr. Ravindra Thamma, Central Connecticut State University, Connecticut, USA
          </ListGroup.Item>
          <ListGroup.Item>
            Dr. Jey Veerasamy, Erik Jonsson School of Engineering & Computer Science, Texas, USA
          </ListGroup.Item>
          <ListGroup.Item>
            Dr. XIAO-ZHI GAO, School of Computing, University of Eastern Finland, Finland
          </ListGroup.Item>
          <ListGroup.Item>
            Dr. Mohan Gurusamy,
            Electrical and Computer Engineering Department, National University of Singapore
          </ListGroup.Item>
          <ListGroup.Item>
            Dr. SEOKBUM KO,
            Department of Electrical and Computer Engineering,
            Division of Biomedical Engineering, University of Saskatchewan, Canada
          </ListGroup.Item>
          <ListGroup.Item>
            Dr.  Celestine Iwendi, School of Creative Technologies,
            University of Bolton, United Kingdom
          </ListGroup.Item>
          <ListGroup.Item>
            Muhammad Fazal Ijaz,
            Department of Intelligent Mechatronics Engineering, Sejong University, Sejong
          </ListGroup.Item>
          <ListGroup.Item>
            Dr.Sakkaravarthi Ramanathan,
            Computing Science and Engineering, Vanier College, Montreal, Canada
          </ListGroup.Item>
          <ListGroup.Item>
            Youngdoo Son, Department of Industrial and Systems Engineering, Dongguk University
          </ListGroup.Item>

        </ListGroup>
      </Card.Body>
    </Card>

    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        National
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>Dr. G. Sivakumar, Indian Institute of Technology, Bombay</ListGroup.Item>
          <ListGroup.Item>
            Dr. Ashim Saha, NATIONAL INSTITUTE OF TECHNOLOGY, AGARTALA
          </ListGroup.Item>
          <ListGroup.Item>
            Dr. Bhaskar Mondal, NATIONAL INSTITUTE OF TECHNOLOGY  PATNA
          </ListGroup.Item>
          <ListGroup.Item>
            Dr. Naresh Babu Muppalaneni, NATIONAL INSTITUTE OF TECHNOLOGY, Silchar
          </ListGroup.Item>
          <ListGroup.Item>
            Dr. S. Selvakumar, National Institute of Technology, Tiruchirappalli
          </ListGroup.Item>
          <ListGroup.Item>
            Dr. N. Ramasubramanian, National Institute of Technology, Tiruchirappalli
          </ListGroup.Item>
          <ListGroup.Item>
            Dr. C. Mala, National Institute of Technology, Tiruchirappalli
          </ListGroup.Item>
          <ListGroup.Item>
            Dr. S. Mary Saira Bhanu, National Institute of Technology, Tiruchirappalli
          </ListGroup.Item>
          <ListGroup.Item>
            Dr. R. Leela Velusamy, National Institute of Technology, Tiruchirappalli
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  </div>
);
