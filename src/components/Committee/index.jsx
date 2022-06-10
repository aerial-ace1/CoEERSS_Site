import React from 'react';
import { Card } from 'react-bootstrap';

export const Committee = () => (
  <div>
    <h1>Committee</h1>
    <br />
    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        Patron
      </Card.Header>
      <Card.Body className="d-flex justify-content-around flex-wrap">
        <div>
          <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://clip2022.nitt.edu/images/director.png" />
          <br />
          Dr. G. Aghila, Director, NIT, Trichy
        </div>
        <div>
          <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://media-exp1.licdn.com/dms/image/C5603AQEatW8IY41OmQ/profile-displayphoto-shrink_800_800/0/1516323192531?e=1660176000&v=beta&t=l5zBTZkQzzSbHaH6BQBOC6fe2rSiawL6VU3JbwzBfrU" />
          <br />
          Shri. E Magesh, Director General, C-DAC
        </div>
      </Card.Body>
    </Card>

    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        General Chairman
      </Card.Header>
      <Card.Body className="d-flex justify-content-around flex-wrap">
        <div>
          <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://www.nitt.edu/www/uploads/1256_tkr.jpg" />
          <br />
          Dr. T. K. Radhakrishnan, Professor, NIT, Trichy
        </div>
        <div>
          <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://media-exp1.licdn.com/dms/image/C4E03AQHSHgwTZsEcZQ/profile-displayphoto-shrink_400_400/0/1517750323142?e=1660176000&v=beta&t=Qly19LkMQjYblt7QrjMIy1m3UbjiwguglSE4_OQVhL0" />
          <br />
          Shri. A. Kalaiselvan, Executive Director,
          CDAC, Trivandrum
        </div>
      </Card.Body>
    </Card>
    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        General Secretary
      </Card.Header>
      <Card.Body className="d-flex justify-content-around flex-wrap">
        <div>
          <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://www.nitt.edu/home/academics/departments/eee/people/faculty/MVK.jpg" />
          <br />
          Dr. M. Venkata Kirthiga
        </div>
        <div>
          <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://www.nitt.edu/home/academics/departments/ca/facultymca/janet/janet%20black%20(1).jpg" />
          <br />
          Dr. B. Janet
        </div>
        <div>
          <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://www.nitt.edu/home/academics/departments/cse/faculty/brindham/index.jpg" />
          <br />
          Dr. M. Brindha
        </div>
      </Card.Body>
    </Card>
    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        Technical Chairman
      </Card.Header>
      <Card.Body className="d-flex justify-content-around flex-wrap">
        <div>
          <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://www.nitt.edu/home/academics/departments/eee/people/faculty/simon/SPS.jpg" />
          <br />
          Dr. Sishaj P Simon
        </div>
        <div>
          <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://www.nitt.edu/home/academics/departments/ece/faculty/beki/rebekka%20profile%20picture.png" />
          <br />
          Dr. B. Rebekka
        </div>
      </Card.Body>
    </Card>
    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        Organizing Chairman
      </Card.Header>
      <Card.Body className="d-flex justify-content-around flex-wrap">
        <div>
          <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://www.nitt.edu/home/academics/departments/ice/faculty/sivakumaran//nsk.jpg" />
          <br />
          Dr. N. Sivakumaran
        </div>
        <div>
          <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="http://www.nitt.edu/home/academics/departments/ice/faculty/srinivasan/Dr.%20K.%20Srinivasan_3.jpg" />
          <br />
          Dr. K. Srinivasan
        </div>
      </Card.Body>
    </Card>
    <Card className="text-center m-auto mt-3 mb-3">
      <Card.Header as="h4">
        Organizing Secretary
      </Card.Header>
      <Card.Body className="d-flex justify-content-around flex-wrap">
        <div>
          <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=SgRHn0AAAAAJ&citpid=4" />
          <br />
          Dr. P. A. Karthick
        </div>
      </Card.Body>
    </Card>
  </div>
);
