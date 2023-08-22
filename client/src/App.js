
import React, { useState, useEffect } from 'react';
import './App.css';


function TrainDetails() {
  const [trains, setTrains] = useState([]);

  useEffect(() => {
    fetch("/api/trains") // Correct path to your JSON file in the public folder
      .then(res => res.json())
      .then(
        trains=>{
          setTrains(trains)
          console.log(trains)
        }
      )
  }, []);

  return (
    <div>
      <h1>Train Schedule</h1>
      <table>
        <thead>
          <tr>
            <th>Train Number</th>
            <th>Train Name</th>
            <th>Departure Time</th>
            <th>Delay (min)</th>
            <th>AC Price</th>
            <th>Sleeper Price</th>
          </tr>
        </thead>
        <tbody>
          {trains.map((train, index) => (
            <tr key={index}>
              <td>{train.trainNumber}</td>
              <td>{train.trainName}</td>
              <td>{`${train.departureTime.Hours}:${train.departureTime.Minutes}`}</td>
              <td>{train.delayedBy}</td>
              <td>{train.price.AC}</td>
              <td>{train.price.sleeper}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TrainDetails;
