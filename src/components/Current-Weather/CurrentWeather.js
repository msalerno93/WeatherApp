import "./CurrentWeather.css"

import React from 'react'

function CurrentWeather() {
  return (
    <div className="weather">
      <div className="top">
        <p className="city">Belgrade</p>
        <p className="weather-description">Sunny</p>
      </div>
      <img src="" alt="weather" className="weather-icon" />
    </div>
  )
}

export default CurrentWeather