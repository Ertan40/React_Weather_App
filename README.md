# Weather App
A React-based weather application that fetches and displays the current weather for a user-specified city using the OpenWeather API. The app includes features such as caching weather data in localStorage to reduce API calls for frequently accessed cities, and displaying current time and weather details in a simple and clean UI.

## Features
 - Fetches real-time weather data for a specified city using the OpenWeather API.
 - Caches daily weather data in localStorage to minimize API calls and provide a faster experience for frequently searched cities.
 - Displays weather information including temperature, "feels like" temperature, wind speed, and a brief description.
 - Responsive design with a simple user interface.
 - Shows current date and time for added context.
   
## Built With
 - React - Front-end JavaScript library for building user interfaces.
 - Vite - Next-generation front-end tooling for fast development.
 - OpenWeather API - Provides current weather data for any location.

## Usage
1. Enter a city name in the input field and click "Get weather" to fetch weather information.
2. If the city name is valid, the app will display:
  - City name
  - Current temperature
  - Feels-like temperature
  - Wind speed
  - Weather description (e.g., "clear sky")
3. Cached data: The app saves the weather data for each city for the current day, reducing repeated API calls if the same city is searched multiple times in a day.

## Key Files
 - App.jsx: Contains the main app logic, including fetching weather data from the API, caching it in localStorage, and managing state.
 - CityInput.jsx: Handles the input form where users can enter a city name.
 - Main.jsx: Displays the weather data for the selected city and the current time.

## Links
 - OpenWeather API
# License
This project is open source and available under the MIT License.
