import { useState } from "react";
import { garbingData } from "./data";
import "./style.css";
export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [EnableMultipleSelection, SetEnableMultipleSelection] = useState(false);
  const [MultipleSelection, setMultipleSelection] = useState([]);

  function handleSingleSelection(getCurrentId) {
    setSelected((prev) => {
      return getCurrentId === prev ? null : getCurrentId;
    });
  }
  function handleMutableSelection(getCurrentId) {
    let copyArray = [...MultipleSelection];
    if (copyArray.includes(getCurrentId)) {
      copyArray.splice(copyArray.indexOf(getCurrentId), 1);
    } else {
      copyArray.push(getCurrentId);
    }
    setMultipleSelection(copyArray);
  }
  return (
    <div className="wrapper">
      <button
        onClick={() => {
          SetEnableMultipleSelection(!EnableMultipleSelection);
        }}
      >
        Enable Multi Selection
      </button>
      <div className="accordian">
        {garbingData && garbingData.length > 0 ? (
          garbingData.map((dataItem) => (
            <div className="item" key={dataItem.id}>
              <div
                onClick={() => {
                  if (EnableMultipleSelection) {
                    handleMutableSelection(dataItem.id);
                  } else {
                    handleSingleSelection(dataItem.id);
                  }
                }}
                className="title"
              >
                <h3>{dataItem.question}</h3>
                <span>+</span>
              </div>
              {EnableMultipleSelection &&
                MultipleSelection.includes(dataItem.id) && (
                  <div className="content">{dataItem.answer}</div>
                )}

              {!EnableMultipleSelection && selected === dataItem.id && (
                <div className="content">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>No data found</div>
        )}
      </div>
    </div>
  );
}
