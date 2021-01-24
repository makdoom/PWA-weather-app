import React from "react";
import "./weather.css";

const Weather = () => {
  return (
    <>
      <div className="search__box">
        <input type="text" className="input__field" required />
        <label>Search</label>
      </div>
      <div className="weather__info">
        <h2 className="city__name">
          <span>Mumbai</span>
          <sup>IN</sup>
        </h2>
        <div className="city__temp">
          32 <sup>&deg;C</sup>
        </div>
        <div className="info">
          <img src="" alt="" />
          <p>Mist</p>
        </div>
      </div>
    </>
  );
};

export default Weather;
