import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";
export default function StartRating({ NumberOfStars = 5 }) {
  const [stars, setStars] = useState(0);
  const [starsHover, setStarsHover] = useState(0);

  function handleClick(index) {
    setStars((prev) => (prev === index ? 0 : index));
  }
  function handleMouseOver(index) {
    setStarsHover(index);
  }
  function handleMouseLeave() {
    setStarsHover(stars);
  }
  return [...Array(NumberOfStars)].map((_, index) => {
    const inx = index + 1;
    return (
      <FaStar
        key={inx}
        className={
          inx <= stars
            ? "active"
            : inx <= starsHover
            ? "hover-active"
            : "inactive"
        }
        onClick={() => {
          handleClick(inx);
        }}
        onMouseOver={() => {
          handleMouseOver(inx);
        }}
        onMouseLeave={() => {
          handleMouseLeave();
        }}
        size={40}
      />
    );
  });
}
