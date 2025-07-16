export default function Model({ header, body, footer }) {
  return (
    <div className="container">
      <div className="header">
        <span className="close-model-icon">&times;</span>
        <h2>{header ? header : "Header"}</h2>
      </div>

      <div className="body">{body || "this is our model body"}</div>

      <div className="footer">{footer || "this is footer"}</div>
    </div>
  );
}
