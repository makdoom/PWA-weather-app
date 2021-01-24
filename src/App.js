import "./App.css";

import Weather from "./components/weather/Weather";

function App() {
  console.log(process.env.REACT_APP_API_KEY);
  return (
    <div className="app">
      <Weather />
    </div>
  );
}

export default App;
