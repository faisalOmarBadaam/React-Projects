import { useState } from "react";
import "./color-picker.css";
export default function ColorPicker() {
  const [color, setColor] = useState("#FFFFFF");

  return (
    <>
      <div className="color-picker-container">
        <h1>Color Picker</h1>
        <div className="color-display" style={{ background: color }}>
          <p>selected Color</p>
        </div>
        <label>Select a color </label>
        <input
          type="color"
          value={color}
          onChange={(event) => {
            setColor(event.target.value);
          }}
        />
      </div>
    </>
  );
}
