import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

export const Committee = () => (
  <div>
    <h1>Committee</h1>
    <br />
    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        Patron
      </Card.Header>
      <Card.Body>

        <ListGroup variant="flush">
          <ListGroup.Item>Dr. G. Aghila, Director, NIT, Trichy </ListGroup.Item>
          <ListGroup.Item>Shri. E Magesh, Director General, C-DAC </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>

    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        General Chairman
      </Card.Header>
      <Card.Body>

        <ListGroup variant="flush">
          <ListGroup.Item>Dr. T. K. Radhakrishnan, Professor, NIT, Trichy</ListGroup.Item>
          <ListGroup.Item>
            Shri. A. Kalaiselvan, Executive Director,
            CDAC, Trivandrum
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        General Secretary
      </Card.Header>
      <Card.Body>

        <ListGroup variant="flush">
          <ListGroup.Item>Dr. M. Venkata Kirthiga</ListGroup.Item>
          <ListGroup.Item>Dr. B. Janet</ListGroup.Item>
          <ListGroup.Item>Dr. M. Brindha</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        Technical Chairman
      </Card.Header>
      <Card.Body>

        <ListGroup variant="flush">
          <ListGroup.Item>Dr. Sishaj P Simon</ListGroup.Item>
          <ListGroup.Item>Dr. B. Rebekka</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        Organizing Chairman
      </Card.Header>
      <Card.Body>

        <ListGroup variant="flush">
          <ListGroup.Item>Dr. N. Sivakumaran</ListGroup.Item>
          <ListGroup.Item>Dr. K. Srinivasan</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        Organizing Secretary
      </Card.Header>
      <Card.Body>

        <ListGroup variant="flush">
          <ListGroup.Item>Dr. P. A. Karthick</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
  </div>
);
