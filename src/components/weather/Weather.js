import React from "react";
import "./weather.css";

const Weather = () => {
  return (
    <>
      <div className="search__box">
        <input type="text" className="input__field" required />
        <label>Search</label>
      </div>
      <div className="weather__info">info component</div>
    </>
  );
};

export default Weather;
