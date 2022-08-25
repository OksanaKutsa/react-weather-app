import "./Weather.css";

export default function Weather() {
  return (
    <div className="Weather">
      <form>
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Enter a city..."
              className="form-control"
            />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary" />
          </div>
        </div>
      </form>
      <h1>Kyiv</h1>
      <ul>
        <li>Wednesday 16:52</li>
        <li>Cloudy</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <img src="" alt="cloud" />
          15˚C
        </div>
        <div className="col-6">
          <ul>
            <li>Precipitation : 15%</li>
            <li>Humidity : 70%</li>
            <li>Wind : 10 km/h</li>
          </ul>
        </div>
      </div>
    </div>
  );
}