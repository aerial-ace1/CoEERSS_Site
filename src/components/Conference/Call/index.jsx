import React from 'react';
import { Card, ListGroup } from 'react-bootstrap';

export const Call = () => (
  <div>
    <p>
      The conference will bring together leading academic scientists,
      researchers and scholars in the domain of interest from around the world.
      Topics of interest for submission include, but are not limited to:
    </p>
    <br />
    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        Artificial Intelligence
      </Card.Header>
      <Card.Body>

        <ListGroup variant="flush">
          <ListGroup.Item>AI Algorithms</ListGroup.Item>
          <ListGroup.Item>Artificial Intelligence tools & Applications</ListGroup.Item>
          <ListGroup.Item>Automatic Control</ListGroup.Item>
          <ListGroup.Item>Bioinformatics</ListGroup.Item>
          <ListGroup.Item>Natural Language Processing</ListGroup.Item>
          <ListGroup.Item>CAD Design & Testing</ListGroup.Item>
          <ListGroup.Item>Computer Vision and Speech Understanding</ListGroup.Item>
          <ListGroup.Item>Data Mining and Machine Learning Tools</ListGroup.Item>
          <ListGroup.Item>Fuzzy Logic</ListGroup.Item>
          <ListGroup.Item>Heuristic and AI Planning Strategies and Tools</ListGroup.Item>
          <ListGroup.Item>Computational Theories of Learning</ListGroup.Item>
          <ListGroup.Item>Hybrid Intelligent Systems</ListGroup.Item>
          <ListGroup.Item>Information Retrieval</ListGroup.Item>
          <ListGroup.Item>Intelligent System Architectures</ListGroup.Item>
          <ListGroup.Item>Knowledge Representation</ListGroup.Item>
          <ListGroup.Item>Knowledge-based Systems</ListGroup.Item>
          <ListGroup.Item>Mechatronics</ListGroup.Item>
          <ListGroup.Item>Multimedia & Cognitive Informatics</ListGroup.Item>
          <ListGroup.Item>Neural Networks</ListGroup.Item>
          <ListGroup.Item>Parallel Processing</ListGroup.Item>
          <ListGroup.Item>Pattern Recognition</ListGroup.Item>
          <ListGroup.Item>Robotics</ListGroup.Item>
          <ListGroup.Item>Semantic Web Techniques and Technologies</ListGroup.Item>
          <ListGroup.Item>Soft computing theory and applications</ListGroup.Item>
          <ListGroup.Item>Software & Hardware Architectures</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
    <br />
  </div>
);
