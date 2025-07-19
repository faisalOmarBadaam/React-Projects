import { useState } from "react";
import "./Searchstyle.css";
export default function SearchBar({ searchHandler }) {
  const [temp, setTemp] = useState("");
  const handleOnChange = (event) => {
    setTemp(event.target.value);
  };
  return (
    <div className="searchBar">
      <input
        value={temp}
        type="text"
        placeholder="location"
        className="city-search"
        onChange={(event) => handleOnChange(event)}
      />
      <button
        onClick={temp ? () => searchHandler(temp) : null}
        className="search-btn"
      >
        Search
      </button>
    </div>
  );
}
