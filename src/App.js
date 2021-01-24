import "./App.css";

import { fetchWeather } from "./api/fetchWeather";
import Weather from "./components/weather/Weather";

function App() {
  return (
    <div className="app">
      <Weather />
    </div>
  );
}

export default App;
