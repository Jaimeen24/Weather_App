// import React, { Component } from 'react';

// class DayCard extends Component {
//     render () {
//         return (
//             <div>
//                 <h1>day1</h1>
//             </div>
//         )
//     }
// }

// export default DayCard;

import React from 'react';

import classes from './DayCard.module.css';

var moment = require('moment');

const DayCard = ({ reading }) => {
  let newDate = new Date();
  const weekday = reading.dt * 1000
  newDate.setTime(weekday)

  
//   console.log(reading.weather[0].icon);
  const imgURL = `owf owf-${reading.weather[0].id} owf-5x`

//   const imgURL = "http://openweathermap.org/img/w/" + reading.weather[0].icon + ".png";
//   console.log(imgURL);

  return (
    <div className="col-sm-2">
      <div className={classes.Card}>
        <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
        <p className="text-muted">{moment(newDate).format('MMMM Do')}</p>
        <i className={imgURL}></i>
        <h6>Min</h6>
        <h2>{Math.round(reading.main.temp_min-273.15)} °C</h2>
        <div className="card-body">
          <p className="card-text">{reading.weather[0].description}</p>
        </div>
      </div>
      <hr />
      <div className={classes.Card}>
        <h3 className="card-title">{moment(newDate).format('dddd')}</h3>
        <p className="text-muted">{moment(newDate).format('MMMM Do')}</p>
        <i className={imgURL}></i>
        <h6>Max</h6>
        <h2>{Math.round(reading.main.temp_max-270)} °C</h2>
        <div className="card-body">
          <p className="card-text">{reading.weather[0].description}</p>
        </div>
      </div>
    </div>
  )
}

export default DayCard;