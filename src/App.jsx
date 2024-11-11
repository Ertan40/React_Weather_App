import { useState, useEffect } from "react";
import CityInput from "./components/CityInput";
import Main from "./components/Main";

function App() {
  const [data, setData] = useState(null);
  const [city, setCity] = useState("Sofia");
  const [inputCity, setInputCity] = useState("");

  const fetchApiData = async (cityName) => {
    const API_KEY = import.meta.env.VITE_API_KEY;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${cityName}${API_KEY}`;

    const today = new Date().toDateString();
    const localKey = `WEATHER-${cityName}-${today}`;

    try {
      const cachedData = JSON.parse(localStorage.getItem(localKey));
      if (cachedData) {
        setData(cachedData);
        console.log("Fetched from cache.");
        return;
      }
    } catch (error) {
      console.log("Error retrieving cached data:", error);
      localStorage.removeItem(localKey);
    }

    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const apiData = await response.json();
      localStorage.setItem(localKey, JSON.stringify(apiData));
      setData(apiData);
      console.log("Fetched from API");
    } catch (error) {
      console.log("Failed to fetch data:", error);
      setData(null); // Clear previous data if the fetch fails
    }
  };

  useEffect(() => {
    fetchApiData(city);
  }, [city]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setCity(inputCity);
    setInputCity("");
  };

  return (
    <>
      <img src="/header.jpg" alt="banner" className="banner-img" />
      <div className="app-container">
        <CityInput
          inputCity={inputCity}
          onInputChange={setInputCity}
          onSubmit={handleSubmit}
        />

        {data ? (
          <Main data={data} />
        ) : (
          <div>Data not found or invalid city name</div>
        )}
      </div>

      <footer>
        <p className="footer-p">
          © UNTITLED. ALL RIGHTS RESERVED. | DESIGN BY <strong>Ertan</strong>
        </p>
      </footer>
    </>
  );
}

export default App;
