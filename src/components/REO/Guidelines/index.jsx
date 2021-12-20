import React from 'react';
import './style.css';

export const Guidelines = () => (
  <div className="col-12 col-md-8 mx-auto">
    <h1>Reviewer Guidelines</h1>
    <div className="d-flex my-4 align-items-start">
      <div className="mr-3 text-center mt-2">
        <div className="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center styling-color">1</div>
        <span className="text-secondary">STEP</span>
      </div>
      <div className="rounded bg-light step-div p-4">
        <h5 className="mb-3">Login to EasyChair</h5>
        <p className="text-secondary font-weight-light">
          You will be by default logging in as author and you will find
          {' '}
          <a href="https://easychair.org/conferences/?conf=icacni2019">this</a>
          {' '}
          page
        </p>
      </div>
    </div>

    <div className="d-flex my-4 align-items-start">
      <div className="mr-3 text-center mt-2">
        <div className="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center styling-color">2</div>
        <span className="text-secondary">STEP</span>
      </div>
      <div className="rounded bg-light step-div p-4">
        <h5 className="mb-3">Change role to &#39;Subreviewer&#39;</h5>
        <p className="text-secondary font-weight-light">Click &#39;ICACNI 2019&#39; -&gt; &#39;Change Role&#39; -&gt; Subreviewer</p>
      </div>
    </div>

    <div className="d-flex my-4 align-items-start">
      <div className="mr-3 text-center mt-2">
        <div className="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center styling-color">3</div>
        <span className="text-secondary">STEP</span>
      </div>
      <div className="rounded bg-light step-div p-4">
        <h5 className="mb-3">Select article to review</h5>
        <p className="text-secondary font-weight-light">You can see all articles assigned to you under &#39;Review requests&#39;</p>
      </div>
    </div>

    <div className="d-flex my-4 align-items-start">
      <div className="mr-3 text-center mt-2">
        <div className="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center styling-color">4</div>
        <span className="text-secondary">STEP</span>
      </div>
      <div className="rounded bg-light step-div p-4">
        <h5 className="mb-3">Click &#39;Answer request&#39;</h5>
        {/*
        <p className="text-secondary font-weight-light">
        You can see all articles assigned to you under &#39;Review requests&#39;</p> */}
      </div>
    </div>

    <div className="d-flex my-4 align-items-start">
      <div className="mr-3 text-center mt-2">
        <div className="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center styling-color">5</div>
        <span className="text-secondary">STEP</span>
      </div>
      <div className="rounded bg-light step-div p-4">
        <h5 className="mb-3">Click &#39;I agree to review this submission&#39; to review it. Deselect &#39;Send message&#39; and click &#39;Select and/or Send Message&#39;</h5>
        {/* <p className="text-secondary font-weight-light">
          You can see all articles assigned to you under &#39;Review requests&#39;
        </p> */}
      </div>
    </div>

    <div className="d-flex my-4 align-items-start">
      <div className="mr-3 text-center mt-2">
        <div className="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center styling-color">6</div>
        <span className="text-secondary">STEP</span>
      </div>
      <div className="rounded bg-light step-div p-4">
        <h5 className="mb-3">Click &#39;Download submission&#39; to download and read the article</h5>
        {/* <p className="text-secondary font-weight-light">
          You can see all articles assigned to you under &#39;Review requests&#39;
        </p> */}
      </div>
    </div>

    <div className="d-flex my-4 align-items-start">
      <div className="mr-3 text-center mt-2">
        <div className="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center styling-color">7</div>
        <span className="text-secondary">STEP</span>
      </div>
      <div className="rounded bg-light step-div p-4">
        <h5 className="mb-3">Click &#39;Submit review&#39; to review the article online. DO NOT click &#39;DOWNLOAD REVIEW FORM&#39; and submit offline. WE REQUIRE ONLINE REVIEW.</h5>
        {/* <p className="text-secondary font-weight-light">
          You can see all articles assigned to you under &#39;Review requests&#39;
        </p> */}
      </div>
    </div>

    <div className="d-flex my-4 align-items-start">
      <div className="mr-3 text-center mt-2">
        <div className="p-4 rounded-circle text-white font-weight-bold d-flex align-items-center justify-content-center styling-color">8</div>
        <span className="text-secondary">STEP</span>
      </div>
      <div className="rounded bg-light step-div p-4">
        <h5 className="mb-3">Select &#39;Overall Evaluation&#39; and &#39;Reviewer&#39;s Confidence&#39;, Fill &#39;Review&#39; as your comments to authors. Fill &#39;Confidential remarks for the program committee&#39; (if any), and Click &#39;Submit review&#39; to complete the review process.</h5>
        {/* <p className="text-secondary font-weight-light">
          You can see all articles assigned to you under &#39;Review requests&#39;
        </p> */}
      </div>
    </div>

  </div>

);
