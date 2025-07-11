import { useEffect, useState, useRef } from "react";

export default function RandomColor() {
  const [color, setColor] = useState("#ffffff");
  const [typeColor, setTypeColor] = useState("HEX");
  const isFirst = useRef(true);
  function RandomNumber(number) {
    return Math.floor(Math.random() * number);
  }
  function handleHEXRandomColor() {
    const HEXArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "f"];
    let HEXColor = "#";
    for (let index = 0; index < 6; index++) {
      HEXColor += HEXArray[RandomNumber(HEXArray.length)];
    }
    setColor(HEXColor);
  }
  function handleRGPRandomColor() {
    const g = RandomNumber(255);
    const r = RandomNumber(255);
    const b = RandomNumber(255);
    setColor(`rgb(${r}, ${g}, ${b})`);
  }
  useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
    } else {
      if (typeColor === "HEX") handleHEXRandomColor();
      else handleRGPRandomColor();
    }
  }, [typeColor]);

  return (
    <div
      style={{
        background: color,
        height: "100vh",
        width: "100vw",
      }}
    >
      <button
        onClick={() => {
          typeColor === "HEX" ? handleHEXRandomColor() : handleRGPRandomColor();
        }}
      >
        Generate Random Color
      </button>
      <button onClick={() => setTypeColor("HEX")}>HEX Color</button>
      <button onClick={() => setTypeColor("RGB")}>RGB Color</button>

      <h3
        style={{
          fontSize: "16px",
          fontWeight: "bold",
          margin: "20px",
          color: "white",
        }}
      >
        {typeColor}
      </h3>
      <h1
        style={{
          fontSize: "24px",
          fontWeight: "bold",
          margin: "20px",
          color: "white",
        }}
      >
        {color}
      </h1>
    </div>
  );
}
