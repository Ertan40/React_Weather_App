export default function Main(props) {
  const { data } = props; // Destructure data from props correctly

  return (
    <div className="main-container">
      <div className="current-time">
        <h2>Current time:</h2>
        <p>Date: {new Date().toLocaleDateString()}</p>
        <p>Time: {new Date().toLocaleTimeString()}</p>
      </div>
      <div className="current-weather">
        <h2>Current weather:</h2>
        <p>City: {data?.name}</p>
        <p>Temperature: {data?.main.temp} °C</p>
        <p>Feels like: {data?.main.feels_like} °C</p>
        <p>Wind speed: {data?.wind.speed} m/s</p>
        <p>Description: {data?.weather[0].description}</p>
      </div>
    </div>
  );
}
