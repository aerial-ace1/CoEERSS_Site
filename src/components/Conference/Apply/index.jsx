import React from 'react';
import { Table } from 'react-bootstrap';

export const Apply = () => (
  <div>
    <h1>How to apply</h1>
    <h3>Registration Fee</h3>
    <Table striped bordered hover>
      <thead>
        <tr>
          <th className="text-center">
            Category
          </th>
          <th className="text-center">
            Sub-Category
          </th>
          <th className="text-center">
            Only Tutorial Session
            <br />
            (in INR)
          </th>
          <th className="text-center">
            Only Keynote cum Paper Presentation Session
            <br />
            (in INR)
          </th>
          <th className="text-center">
            All Sessions
            <br />
            (in INR)
          </th>
        </tr>
      </thead>
      <tbody className="text-center">
        <tr>
          <td rowSpan="5">
            Attendee
          </td>
          <td>
            UG / PG Student
          </td>
          <td>
            1100
          </td>
          <td>
            2300
          </td>
          <td>
            3000
          </td>
        </tr>
        <tr>
          <td>
            Research Scholar
          </td>
          <td>
            1500
          </td>
          <td>
            2800
          </td>
          <td>
            4000
          </td>
        </tr>
        <tr>
          <td>
            PDF/ Faculty
          </td>
          <td>
            2000
          </td>
          <td>
            3300
          </td>
          <td>
            5000
          </td>
        </tr>
        <tr>
          <td>
            R &amp; D / Industry Personnel
          </td>
          <td>
            2500
          </td>
          <td>
            4500
          </td>
          <td>
            6500
          </td>
        </tr>
        <tr>
          <td>
            International
          </td>
          <td>
            3000
          </td>
          <td>
            5500
          </td>
          <td>
            8000
          </td>
        </tr>
        <tr>
          <td rowSpan="5">
            Paper Presenter
          </td>
          <td>
            UG / PG Scholar
          </td>
          <td>
            1100
          </td>
          <td>
            5800
          </td>
          <td>
            6500
          </td>
        </tr>
        <tr>
          <td>
            Research Student
          </td>
          <td>
            1500
          </td>
          <td>
            6300
          </td>
          <td>
            7000
          </td>
        </tr>
        <tr>
          <td>
            PDF/ Faculty
          </td>
          <td>
            2000
          </td>
          <td>
            6800
          </td>
          <td>
            8000
          </td>
        </tr>
        <tr>
          <td>
            R &amp; D / Industry Personnel
          </td>
          <td>
            2500
          </td>
          <td>
            8000
          </td>
          <td>
            9500
          </td>
        </tr>
        <tr>
          <td>
            International
          </td>
          <td>
            3000
          </td>
          <td>
            9000
          </td>
          <td>
            11000
          </td>
        </tr>
      </tbody>
    </Table>
    <div>
      <ul>
        <li>Including GST</li>
        <li>Registration fee includes conference kit and certificate.</li>
        <li>No TA/DA will be provided</li>
      </ul>
    </div>
    <br />
    <h3>Registration Procedure</h3>
    For registration, fill the google form:
    {' '}
    <a href="https://forms.gle/2WQiEkWMuukeSNYr7">Link</a>
    <br />
    <b>Proof of payment</b>
    {' '}
    must be uploaded in the google form.
    <br />
    <b>Mode of Payment:</b>
    {' '}
    Registration fee can be paid through State Bank i-collect (State Bank of India)
    <br />
    <b>Payment Procedure:</b>
    <ol>
      <li>
        Go to the SBI-collect using the link:
        {' '}
        Will be updated
        {/* <a href="https://www.onlinesbi.com/sbicollect/icollecthome.htm">Link</a> */}
      </li>
      <li>Select the state as ‘Tamil Nadu’, and category as ‘Educational Institutions’.</li>
      <li>Select “Conference and Workshop NIT Trichy”.</li>
      <li>Select payment category as “Name of the Conference”.</li>
      <li>Make payment through UPI/ Net Banking/ Credit card/ NEFT.</li>
      <li>
        Once the fee is paid, fill up your details and upload the
        payment receipt in the google form.
      </li>
    </ol>

    <b>Registration norms</b>
    <ol>
      <li>
        One regular registration is within six pages including all figures, tables, and references.
        Extra pages will be charged.
      </li>
      <li>One regular registration with one or more additional papers get only one proceeding.</li>
      <li>At least one author for each accepted final paper must pre-register.</li>
    </ol>

    <b>Refund/Cancellation Policy</b>
    <br />
    If a registrant is unable to attend an event for any reason, they may substitute,
    by arrangement with the registrar, someone else of Co-authors or from the same
    institute/organization.
    <br />
    <br />
    <b>Personal Reason</b>
    <br />
    The ISERDM cannot refund or pay any compensation if the registered person could not
    attend the conference.
  </div>
);
