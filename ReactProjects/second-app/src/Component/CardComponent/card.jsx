import "./card.css";
export default function Card() {
  return (
    <div className={"card"}>
      <div className={"card-section"}>
        <h2>Top Section</h2>
        <p>Some content here...</p>
      </div>
      <div className={"divider"}></div>
      <div className={"card-section"}>
        <h2>Bottom Section</h2>
        <p>More content here...</p>
      </div>
    </div>
  );
}
