import "./App.css";
import { useState } from "react";
function App() {
  const [formInfo, setFormInfo] = useState({
    name: "",
    phoneNumber: "",
    age: 0,
    isEmployee: false,
    salary: "",
  });
  function handleName(event) {
    setFormInfo(() => ({ ...formInfo, name: event.target.value }));
  }
  function handlePhone(event) {
    setFormInfo(() => ({ ...formInfo, phoneNumber: event.target.value }));
  }
  function handleAge(event) {
    setFormInfo(() => ({ ...formInfo, age: event.target.value }));
  }
  function handleIsEmployee() {
    setFormInfo((previos) => ({ ...previos, isEmployee: !previos.isEmployee }));
  }
  function handleSalary(event) {
    setFormInfo(() => ({ ...formInfo, salary: event.target.value }));
  }
  return (
    <>
      <div className="form-container">
        <h1>Requesting a Loan</h1>
        <hr />
        <br />
        <form>
          <label>Name</label>
          <input type="text" value={formInfo.name} onChange={handleName} />
          <br />
          <label>Phone Number</label>
          <input
            type="text"
            value={formInfo.phoneNumber}
            onChange={handlePhone}
          />
          <br />
          <label>Age</label>
          <input type="number" value={formInfo.age} onChange={handleAge} />
          <br />
          <label>Are you an employee</label>
          <input
            type="checkbox"
            value={formInfo.isEmployee}
            onChange={handleIsEmployee}
            checked={formInfo.isEmployee != false}
          />
          <br />
          <label>salary</label>
          <select value={formInfo.salary} onChange={handleSalary}>
            <option value={"more then 500"}>more then 500</option>
            <option value={"more then 5000"}>more then 5000</option>
            <option value={"more then 10000"}>more then 10000</option>
          </select>
          <></>
          <button type="submit">submit</button>
        </form>
      </div>
    </>
  );
}

export default App;
