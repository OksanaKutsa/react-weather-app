import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultcity="Lisbon" />
        <footer>
          <a
            href="https://github.com/OksanaKutsa/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            Open-sourse code{" "}
          </a>{" "}
          made by
          <a href="http://oksanakutsa.com/" target="_blank" rel="noreferrer">
            {" "}
            Oksana Kutsa{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
