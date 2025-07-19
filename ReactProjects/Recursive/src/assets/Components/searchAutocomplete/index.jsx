import { useEffect, useState } from "react";
import useFetchApi from "./fetchData";
import "./style.css";

export default function AutoSearchComplete() {
  const { data, error, isLoading, fetchData } = useFetchApi(
    "https://dummyjson.com/users"
  );
  const [filteredNames, setFilteredNames] = useState([]);
  const [inputName, setInputName] = useState("");
  useEffect(() => {
    fetchData();
  }, [fetchData]);

  useEffect(() => {
    if (!data?.users) {
      setFilteredNames([]);
      return;
    }
    const lower = inputName.toLowerCase();
    const names = data.users
      .filter((u) => u.firstName.toLowerCase().includes(lower))
      .map((u) => u.firstName);
    setFilteredNames(names);
  }, [data, inputName]);

  if (isLoading) return <div>wait for the data...</div>;
  if (error) return <div>something wrong...</div>;

  const listToShow =
    filteredNames.length > 0
      ? filteredNames
      : data && data.users > 0
      ? data.users.map((u) => u.firstName)
      : [];

  return (
    <div className="container">
      <div className="input-wrapper">
        <input
          type="text"
          placeholder="search about name ..."
          value={inputName}
          onChange={(e) => setInputName(e.target.value.toLowerCase())}
        />
      </div>
      <div className="data-container">
        {listToShow.map((name, idx) => (
          <p key={idx}>{name}</p>
        ))}
      </div>
    </div>
  );
}
