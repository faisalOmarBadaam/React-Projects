import "./App.css";
import { useState } from "react";

export default function App() {
  const [student, setStudent] = useState({
    name: "",
    age: 0,
    SelectedOption: null,
    SelectedRedio: null,
    arrayOfThings: ["apple", "orange", "banana"],
  });
  function changeName(event) {
    setStudent((previos) => ({ ...previos, name: event.target.value }));
  }
  function changeAge(event) {
    setStudent((previos) => ({ ...previos, age: event.target.value }));
  }
  function changeOption(event) {
    setStudent((previos) => ({
      ...previos,
      SelectedOption: event.target.value,
    }));
  }
  function changeRadio(event) {
    setStudent((previos) => ({
      ...previos,
      SelectedRedio: event.target.value,
    }));
  }
  function AddElement() {
    const enterdValue = document.getElementById("Things").value;
    setStudent((previos) => ({
      ...previos,
      arrayOfThings: [...previos.arrayOfThings, enterdValue],
    }));
  }
  function RemoveElement(index) {
    setStudent((previos) => ({
      ...previos,
      arrayOfThings: student.arrayOfThings.filter((_, i) => i !== index),
    }));
  }
  return (
    <>
      <div>
        <input type="text" value={student.name} onChange={changeName} />
        <h3>{student.name}</h3>
      </div>
      <div>
        <input type="number" value={student.age} onChange={changeAge} />
        <h3>{student.age}</h3>
      </div>
      <div>
        <select value={student.SelectedOption} onChange={changeOption}>
          <option value=""></option>
          <option value="visa">visa</option>
          <option value="masterCard">masterCard</option>
          <option value="giftCard">giftCard</option>
        </select>
        <h3>{student.SelectedOption}</h3>
      </div>

      <div>
        <label>
          <input
            type="radio"
            value={"Student"}
            checked={student.SelectedRedio === "Student"}
            onChange={changeRadio}
          />
          Student
        </label>

        <label>
          {" "}
          <input
            type="radio"
            value={"Employee"}
            checked={student.SelectedRedio === "Employee"}
            onChange={changeRadio}
          />
          Employee
        </label>
      </div>
      <br />
      <h3>{student.SelectedRedio}</h3>
      <div>
        <input type="text" id="Things" placeholder="enter a fruit to add" />
        <button onClick={AddElement}>add</button>
      </div>
      <div>
        {student.arrayOfThings.map((value, index) => (
          <li onClick={() => RemoveElement(index)} key={index}>
            {value}
          </li>
        ))}
      </div>
    </>
  );
}
