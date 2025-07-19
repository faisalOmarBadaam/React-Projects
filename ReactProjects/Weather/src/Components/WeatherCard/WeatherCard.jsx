import { useState } from "react";
import SearchBar from "../Search/search";
import "./style.css";
import useFetch from "../customHooks/fetchData";
export default function WeatherCard() {
  const [searchText, setSearchText] = useState("landon");

  const { data, isLoading, errorMassage } =
    useFetch(`https://api.openweathermap.org/data/2.5/weather?q=${searchText}&appid=22aa374835493f67062b05dd4dd3291c
`);
  function searchHandler(value) {
    setSearchText(value);
    console.log(value);
  }

  if (isLoading) {
    return <div>loading...</div>;
  }
  if (errorMassage) {
    return <div>Error: {errorMassage.message || String(errorMassage)}</div>;
  }
  if (data) {
    return (
      <div className="container">
        <SearchBar searchHandler={searchHandler} />
        <p className="city-name">{searchText}</p>
        <p className="temp">{Math.round(data.main.temp - 273.15)}°C</p>
        <p className="clouds">{data.weather[0].main}</p>
        <div className="extra-info">
          <p>Wind: {data.wind.speed} m/s</p>
          <p>Humidity: {data.main.humidity}%</p>
        </div>
      </div>
    );
  }
}
