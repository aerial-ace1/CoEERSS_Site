import React from 'react';
import { Image } from 'react-bootstrap';
import map from './assets/map.png';

export const Venue = () => (
  <div className="venue">
    <h1>
      Location
    </h1>
    <a className="m-5" href="https://www.google.com/maps/place/National+Institute+of+Technology+Tiruchirappalli/@10.7589434,78.8110294,17z/data=!4m12!1m6!3m5!1s0x3baa8d47758e1ae1:0xb3e16389eeab05a!2sNational+Institute+of+Technology+Tiruchirappalli!8m2!3d10.7589381!4d78.8132181!3m4!1s0x3baa8d47758e1ae1:0xb3e16389eeab05a!8m2!3d10.7589381!4d78.8132181">
      <Image src={map} className="rounded mx-auto d-block img-thumbnail" />
    </a>
    <h1>ABOUT THE CITY</h1>
    <p className="mb-5">
      Tiruchirappalli is the fourth most populous city of Tamil Nadu.
      It has an area of 11,075 square kilometres.
      It is situated in the centre of the state on the banks of the Kaveri River.
      It is bounded to the north by Namakkal District, to the northeast by Perambalur District,
      to the east by Thanjavur District, to the southeast by Pudukkottai District, to the south by
      Sivaganga and Madurai districts, to the southwest by Dindigul District,
      to the west by Karur District, and to the northwest by Namakkal District.
      The city is a City corporation, the administrative headquarters of Tiruchirapalli District.
    </p>

    <h1>TRAVEL INFORMATION</h1>
    <p>
      Trichy is connected by road to Chennai (320 km) and to all major towns in South India by
      regular bus services. Tiruchirapalli is an important junction on the Southern Railway.
      It connects Chennai, Thanjavur, Madurai, Tuticorin, Tirupati, Rameswaram, Bangalore,
      Coimbatore, Cochin and Mangalore. NIT-Trichy is located about 22 km from Tiruchirapalli
      Junction / Central Bus stand on the Trichy-Thanjavur Highway. The simplest and most economical
      way to reach NIT-Trichy from these two places is by bus. Any city Bus at Tiruchirapalli
      Junction will take you to the central bus stand. Board Thanjavur bound mofussiful or route
      bus. The journey time from Trichy will be around 40 minutes.
    </p>

    <p className="mb-5">
      Trichy also has an international airport, and is connected with Chennai (Madras), Singapore,
      Colombo, Kuwait, Sharjah, Calicut. Indian Airlines connects Trichy with Chennai, Sharjah,
      Calicut Kuwait and Colombo. Air Lanka Service connects Tiruchirapalli with Colombo.
      The best way of reaching NIT-Trichy from Trichy airport will be hiring a taxi.
      Taxis may charge around Rs. 650/-.
    </p>
  </div>
);
