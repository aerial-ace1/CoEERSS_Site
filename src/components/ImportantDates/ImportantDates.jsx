import React from 'react';
import './style.css';

export const ImportantDates = () => (
  <div className="container">
    <div className="main-timeline">
      <div className="timeline">
        <div className="icon" />
        <div className="date-content">
          <div className="date-outer">
            <span className="date">
              <span className="month">
                June 15
                <sup>th</sup>
              </span>
              <span className="year">2022</span>
            </span>
          </div>
        </div>
        <div className="timeline-content">
          <h5 className="title">Start Date of Submission</h5>
        </div>
      </div>
      <div className="timeline">
        <div className="icon" />
        <div className="date-content">
          <div className="date-outer">
            <span className="date">
              <span className="month">
                <span style={{
                  textDecoration: 'line-through',
                  color: 'red'
                }}
                >
                  Aug 15
                  <sup>th</sup>
                </span>
                <br />
                <span>Sept 15</span>
                <sup>th</sup>
              </span>
              <span className="year">2022</span>
            </span>
          </div>
        </div>
        <div className="timeline-content">
          <h5 className="title">Submission Deadline</h5>
        </div>
      </div>
      <div className="timeline">
        <div className="icon" />
        <div className="date-content">
          <div className="date-outer">
            <span className="date">
              <span className="month">
                Oct 30
                <sup>th</sup>
              </span>
              <span className="year">2022</span>
            </span>
          </div>
        </div>
        <div className="timeline-content">
          <h5 className="title">Notification Date (on or before)</h5>
        </div>
      </div>
      <div className="timeline">
        <div className="icon" />
        <div className="date-content">
          <div className="date-outer">
            <span className="date">
              <span className="month">
                Nov 15
                <sup>th</sup>
              </span>
              <span className="year">2022</span>
            </span>
          </div>
        </div>
        <div className="timeline-content">
          <h5 className="title">
            Submission of camera ready paper
          </h5>
        </div>
      </div>
      <div className="timeline">
        <div className="icon" />
        <div className="date-content">
          <div className="date-outer">
            <span className="date">
              <span className="month">
                Nov 20
                <sup>th</sup>
              </span>
              <span className="year">2022</span>
            </span>
          </div>
        </div>
        <div className="timeline-content">
          <h5 className="title">
            Registration Deadline
          </h5>
        </div>
      </div>
    </div>
  </div>
);
