import React from 'react';
import first from './assets/1.png';

export const Committee = () => (
  <div>
    <h1>Committee</h1>
    <br />
    <div style={{
      display: 'flex',
      justifyContent: 'center',
      flexFlow: 'row wrap',
      alignItems: 'center',
      gap: '4rem'
    }}
    >
      <div>
        <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://www.nitt.edu/home/academics/departments/ice/faculty/sivakumaran//nsk.jpg" />
        <br />
        Dr. N. Sivakumaran
      </div>
      <div>
        <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://www.nitt.edu/home/academics/departments/eee/people/faculty/simon/SPS.jpg" />
        <br />
        Dr. Sishaj P Simon
      </div>
      <div>
        <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://www.nitt.edu/www/uploads/1256_tkr.jpg" />
        <br />
        Dr. T. K. Radhakrishnan
      </div>
      <div>
        <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://www.nitt.edu/home/academics/departments/eee/people/faculty/MVK.jpg" />
        <br />
        Dr. M. Venkata Kirthiga
      </div>
      <div>
        <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://www.nitt.edu/home/academics/departments/cse/faculty/brindham/index.jpg" />
        <br />
        Dr. M. Brindha
      </div>
      <div>
        <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://www.nitt.edu/home/academics/departments/ece/faculty/beki/rebekka%20profile%20picture.png" />
        <br />
        Dr. B. Rebekka
      </div>

      <div>
        <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://www.nitt.edu/home/academics/departments/ca/facultymca/janet/janet%20black%20(1).jpg" />
        <br />
        Dr. B. Janet
      </div>
      <div>
        <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="http://www.nitt.edu/home/academics/departments/ice/faculty/srinivasan/Dr.%20K.%20Srinivasan_3.jpg" />
        <br />
        Dr. K. Srinivasan
      </div>
      <div>
        <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://scholar.googleusercontent.com/citations?view_op=view_photo&user=SgRHn0AAAAAJ&citpid=4" />
        <br />
        Dr. P. A. Karthick
      </div>
      <div>
        <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://www.nitt.edu/home/academics/departments/prod/faculty/satheeshv.jpg" />
        <br />
        Dr. Satheeshkumar V
      </div>
      <div>
        <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src={first} />
        <br />
        Dr. Sriram Shankar
      </div>
      <div>
        <img alt="" style={{ borderRadius: '50%', width: '200px', height: '200px' }} src="https://www.nitt.edu/home/academics/departments/cse/faculty/usha/usha.jpg" />
        <br />
        Dr. Usha Kiruthika S
      </div>
    </div>
  </div>
);
