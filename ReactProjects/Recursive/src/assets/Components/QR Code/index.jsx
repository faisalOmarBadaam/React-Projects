import { useState } from "react";
import QRCode from "react-qr-code";

export default function QRCodeGenerator() {
  const [inputStatus, setInputStatus] = useState("");
  const [QRStatus, setQRStatus] = useState("");
  function handleQR() {
    setQRStatus(inputStatus);
    setInputStatus("");
  }
  return (
    <div>
      <h1>this is QRCode reader</h1>
      <br />
      <input
        type="text"
        name="qr-code"
        value={inputStatus}
        onChange={(e) => {
          setInputStatus(e.target.value);
        }}
        placeholder="Enter your text here"
      />
      <button
        disabled={inputStatus && inputStatus.trim() !== "" ? false : true}
        onClick={() => handleQR()}
      >
        Generate Code
      </button>
      <hr />
      <div>
        <QRCode id="qr-code-value" value={QRStatus} size={400} />
      </div>
    </div>
  );
}
