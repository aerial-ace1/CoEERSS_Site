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
    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        Disaster Management
      </Card.Header>
      <Card.Body>

        <ListGroup variant="flush">
          <ListGroup.Item>Satellite and drone image processing</ListGroup.Item>
          <ListGroup.Item>Classification of land cover using ML</ListGroup.Item>
          <ListGroup.Item>Classify areas into positive and negative recovery</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">

        Disaster Prediction
      </Card.Header>
      <Card.Body>

        <ListGroup variant="flush">
          <ListGroup.Item>floods prediction</ListGroup.Item>
          <ListGroup.Item>Strom and Rainfall prediction</ListGroup.Item>
          <ListGroup.Item>Forecast flood risk, Cyclone</ListGroup.Item>
          <ListGroup.Item>Earthquake forecast</ListGroup.Item>
          <ListGroup.Item>Emotional Intelligence</ListGroup.Item>
          <ListGroup.Item>Bridge Stature</ListGroup.Item>
          <ListGroup.Item>Viral outbreak</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        In system resource Management
      </Card.Header>
      <Card.Body>

        <ListGroup variant="flush">
          <ListGroup.Item>Fake calls classification</ListGroup.Item>
          <ListGroup.Item>Call capacity improvement during a disaster</ListGroup.Item>
          <ListGroup.Item>AI answers distress and helps calls</ListGroup.Item>
          <ListGroup.Item>Reliable data communication</ListGroup.Item>
          <ListGroup.Item>Data segregation</ListGroup.Item>
          <ListGroup.Item>Data management</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        Disaster Relief
      </Card.Header>
      <Card.Body>

        <ListGroup variant="flush">
          <ListGroup.Item>Crowd evacuation</ListGroup.Item>
          <ListGroup.Item>forest fire</ListGroup.Item>
          <ListGroup.Item>Classification of crowd situation</ListGroup.Item>
          <ListGroup.Item>Determination of evacuation route</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        Monitoring applications
      </Card.Header>
      <Card.Body>

        <ListGroup variant="flush">
          <ListGroup.Item>Power grid</ListGroup.Item>
          <ListGroup.Item>Criminal activity</ListGroup.Item>
          <ListGroup.Item>Healthcare</ListGroup.Item>
          <ListGroup.Item>hazardous vehicle identification (inflammable, gas, fuel)</ListGroup.Item>
          <ListGroup.Item>Industry wastes</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>
    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        Emergency Response
      </Card.Header>
      <Card.Body>

        <ListGroup variant="flush">
          <ListGroup.Item>
            Predictive Modelling of Ambulance Calls, Fire, Theft, Assault,
            Accident, family dispute, Vehicle
            theft, Abuse, Disrupted calls, Medical emergency
          </ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>

    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        Emergency Rescue
      </Card.Header>
      <Card.Body>

        <ListGroup variant="flush">
          <ListGroup.Item>Detecting flood areas using drones</ListGroup.Item>
          <ListGroup.Item>Prevent crowd disasters using ML( SVM, Linear Regression)</ListGroup.Item>
          <ListGroup.Item>Detecting damages to buildings</ListGroup.Item>
        </ListGroup>
      </Card.Body>
    </Card>

  </div>
);
