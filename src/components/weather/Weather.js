import React, { useState } from "react";
import "./weather.css";

import { fetchWeather } from "../../api/fetchWeather";
import { motion } from "framer-motion";

const Weather = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState({});

  const search = async (e) => {
    if (e.key === "Enter") {
      const data = await fetchWeather(query);
      setWeather(data);
      console.log(data);
    }
  };
  return (
    <>
      <motion.div
        className="search__box"
        initial={{ y: -250 }}
        animate={{ y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <input
          type="text"
          className="input__field"
          required
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyPress={search}
        />
        <label>Search</label>
      </motion.div>
      {weather.main && (
        <motion.div
          className="weather__info"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          whileHover={{
            scale: 1.1,
            boxShadow: "0px 0px 10px rgba(255,255,255,.8)",
          }}
        >
          <h2 className="city__name">
            <span>{weather?.name}</span>
            <sup>{weather.sys?.country}</sup>
          </h2>
          <div className="city__temp">
            {Math.round(weather.main?.temp)}
            <sup>&deg;C</sup>
          </div>
          <div className="info">
            <img
              className="city__icon"
              src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
              alt={weather.weather[0].description}
            />
            <p className="temp__desc">{weather.weather[0].description}</p>
          </div>
        </motion.div>
      )}
    </>
  );
};

export default Weather;
