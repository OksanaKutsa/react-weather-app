import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
import axios from "axios";

export default function WeatherForecst(props) {
  function handleResponse(response) {}
  let apiKey = "427e704ef746829b25864c7ff811b8fc";
  let longitude = props.coord.lon;
  let latitude = props.coord.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="WeatherForecast">
      <div className="row">
        <div className="col">
          <div className="WeatherForecast-day">Mon</div>
          <WeatherIcon code="02d" size={36} />
          <div className="WeatherForecast-temperatures">
            <span className="WeatherForecast-temperature-max">20˚</span>
            <span className="WeatherForecast-temperature-min">11˚</span>
          </div>
        </div>
      </div>
    </div>
  );
}
