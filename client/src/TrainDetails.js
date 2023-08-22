TrainDetails.js

import React from "react";
import "./TrainCard.css"; // Import the CSS file for styling

function TrainDetails({ train }) {
  return (
    <div className="container">
      <div className="train-details">
        <div className="train-heading">
          <div className="train-details container">
            <div className="train-name">
              {train.trainName} ({train.trainNumber})
            </div>
            <div className="train-days">Runs on: M T W T F S S</div>
            <a href="#" className="train-schedule">
              Train Schedule
            </a>
          </div>
        </div>
        <div className="train-body">
          <div className="class-box">
            <div className="class-name">AC</div>
            <div className="class-price">Price: {train.price.AC}</div>
            <div className="seats-available">
              Seats Available: {train.seatsAvailable.AC}
            </div>
          </div>
          <div className="class-box">
            <div className="class-name">Sleeper</div>
            <div className="class-price">Price: {train.price.sleeper}</div>
            <div className="seats-available">
              Seats Available: {train.seatsAvailable.sleeper}
            </div>
          </div>
        </div>
        <div className="train-footer" style={{marginRight:"auto",marginLeft:"auto"}}>
          <button className="book-now-button">Book Now</button>
        </div>
      </div>
    </div>
  );
}

export default TrainDetails;
