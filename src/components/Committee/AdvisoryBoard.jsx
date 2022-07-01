import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

export const AdvisoryBoard = () => (
  <div>
    <h1>Advisory Board</h1>
    <br />
    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        INTERNATIONAL
      </Card.Header>
      <Card.Body>
        <ListGroup variant="flush">
          <ListGroup.Item>
            <b>
              Dr. Ravindra Thamma
            </b>
            ,
            Central Connecticut State University, Connecticut, USA
          </ListGroup.Item>
          <ListGroup.Item>
            <b>
              Dr. Jey Veerasamy
            </b>
            ,
            Erik Jonsson School of Engineering & Computer Science, Texas, USA
          </ListGroup.Item>
          <ListGroup.Item>
            <b>
              Dr Raji Sundararajan
            </b>
            ,
            Purdue University, West Lafayette, Indiana, USA
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Dr. Chung Horng Lung</b>
            , University of Carleton, Canada
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Dr. Xiao-Zhi Gao</b>
            , University of Eastern Finland, Finland
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Dr. Seokbum Ko</b>
            , University of Saskatchewan, Canada
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Dr. Muhammad Fazal Ijaz</b>
            , Sejong University, Sejong
            {' '}
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Dr. George Ghinea</b>
            , Brunel University London
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Dr. Pramod Pawar</b>
            , Sophos, United Kingdom
          </ListGroup.Item>
          <ListGroup.Item>
            <b>
              Dr. Balakrishnan Dasarathy
            </b>
            ,
            University of Maryland Global Campus
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
          <ListGroup.Item>
            <b>Dr. P. S. Pandian</b>
            , Director, DEBEL, DRDO, Bangalore
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Dr. Raja Singh</b>
            , Director, DRDO, Hyderabad
          </ListGroup.Item>
          <ListGroup.Item>
            <b>
              Dr. S. Ramakrishnan
            </b>
            ,
            Indian Institute of Technology, Madras
          </ListGroup.Item>
          <ListGroup.Item>
            <b>Dr. Boby George</b>
            , Indian Institute of Technology Madras
          </ListGroup.Item>
          <ListGroup.Item>
            <b>
              Dr. K. Senthil Kumar
            </b>
            ,
            Director in charge CASR, Centre for Aerospace Research,
            MIT Campus, Anna University, Chennai
          </ListGroup.Item>
          <ListGroup.Item>
            <b>
              Dr. Chandrasekaran K
            </b>
            ,
            National Institute of Technology, Surathkal
          </ListGroup.Item>
          <ListGroup.Item>
            <b>
              Dr. P. Santhi Thilagam
            </b>
            ,
            National Institute of Technology, Surathkal
          </ListGroup.Item>
          <ListGroup.Item>
            <b>
              Dr. S. Selvakumar
            </b>
            ,
            National Institute of Technology, Tiruchirappalli
          </ListGroup.Item>
          <ListGroup.Item>
            <b>
              Dr. M. Bhaskar
            </b>
            , National Institute of Technology,
            Tiruchirappalli
          </ListGroup.Item>
          <ListGroup.Item>
            <b>
              Dr. N. Ramasubramanian
            </b>
            ,
            National Institute of Technology, Tiruchirappalli
          </ListGroup.Item>
          <ListGroup.Item>
            <b>
              Dr. C. Mala
            </b>
            ,
            National Institute of Technology, Tiruchirappalli
          </ListGroup.Item>
          <ListGroup.Item>
            <b>
              Dr. S. Mary Saira Bhanu
            </b>
            ,
            National Institute of Technology, Tiruchirappalli
          </ListGroup.Item>
          <ListGroup.Item>
            <b>
              Dr. R. Leela Velusamy
            </b>
            ,
            National Institute of Technology, Tiruchirappalli
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  </div>
);
