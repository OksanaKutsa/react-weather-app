import Weather from "./Weather";

export default function MainCities(props) {
  return (
    <div className="MainCities">
      <div className="row">
        <div className="col-2">
          <a href="/">Sofia</a>
        </div>
        <div className="col-2">
          <a href="/">Lisbon</a>
        </div>
        <div className="col-2">
          <a href="/">Warsaw</a>
        </div>
        <div className="col-2">
          <a href="/">London</a>
        </div>
        <div className="col-2">
          <a href="/">Vilnus</a>
        </div>
      </div>
    </div>
  );
}
