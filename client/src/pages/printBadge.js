import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import '../Styles/badge.css';

export default function Badge() {
  const navigate = useNavigate();
  const { state } = useLocation();
  console.log(state);

  return (
    <div className="badge-page">
      <div className="front">
        <h4>Front</h4>
        <div className="badge-front">
          <img
            src="./images/image-placeholder.png"
            className="front-image"
            alt={state._id}
          />
          <img
            src="./images/qrsample.svg.png"
            className="qr-code"
            alt="qr code"
          />
          <div className="pii">
            <h5>Full Name:</h5>
            <p>
              {state.firstName} {state.lastName}
            </p>
            <h5>Department:</h5>
            <p>{state.department}</p>
            <h5>Authorization ID-Badge:</h5>
            <p>{state._id}</p>
          </div>
          <img
            src="./images/sample-company.png"
            className="sample-company"
            alt="sample-company"
          />
        </div>
      </div>
      <div className="back">
        <h4>Back</h4>
        <div className="badge-back">
          <img src="./images/longbarcode.png" className="barcode" alt="" />
          <p>LOREM-{state._id}-IPSUM</p>
          <div className="signature">
            <img
              src="./images/image-placeholder.png"
              className="avatar"
              alt=""
            />
            <input />
            <br />
          </div>
          <h5>Valid Signature</h5>
        </div>
      </div>
      <button
        onClick={() => {
          navigate('/');
        }}
      >
        Return to Master Tracker
      </button>
      <button
        onClick={() => {
          navigate(-1);
        }}
      >
        {'< Back'}
      </button>
    </div>
  );
}
