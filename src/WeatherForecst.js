import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";

export default function WeatherForecst() {
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
