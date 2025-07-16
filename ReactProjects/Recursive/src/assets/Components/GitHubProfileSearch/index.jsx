import { useState } from "react";
import useFetchApi from "./fetchData";
import Card from "./card";

export default function ShowGitHubProfile() {
  const [userNameInput, setUserNameInput] = useState("");
  const { data, isLoading, error, fetchData } = useFetchApi(
    `https://api.github.com/users/${userNameInput}`
  );
  function handleOnChangeInput(event) {
    setUserNameInput(event.target.value);
  }

  return (
    <div className="container">
      {isLoading && <div>data is loading...</div>}
      <div className="input-wrapper">
        <label htmlFor="" name="input-user-name"></label>
        <input
          type="text"
          name="input-user-name"
          placeholder="enter yor username here "
          value={userNameInput}
          onChange={(event) => handleOnChangeInput(event)}
        />
        <button onClick={fetchData}>Find Profile</button>
      </div>
      {data && <Card data={data} />}

      {error && <div>{error.massage}</div>}
    </div>
  );
}
