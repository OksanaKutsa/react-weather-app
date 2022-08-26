export default function FormattedDate(props) {
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[props.date.getDay()];
  let hours = props.date.getHours();
  if (hours < 10) {
    hours = `0${hours}`;
  }

  let minutes = props.date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  let months = [
    "01",
    "02",
    "03",
    "04",
    "05",
    "06",
    "07",
    "08",
    "09",
    "10",
    "11",
    "12",
  ];
  let month = months[props.date.getMonth()];
  let todayDate = props.date.getDate();
  if (todayDate < 10) {
    todayDate = `0${todayDate}`;
  }
  let year = props.date.getFullYear();
  return (
    <div className="date">
      <div className="time">
        {day} {hours}:{minutes}
      </div>
      <div className="fullDate">
        {todayDate}/{month}/{year}
      </div>
    </div>
  );
}
