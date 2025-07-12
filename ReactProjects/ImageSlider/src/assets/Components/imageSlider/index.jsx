import { useEffect, useState } from "react";
import "./style.css";

export default function ImageSlider({ images }) {
  const [slide, setSlide] = useState(0);
  const [image, setImage] = useState(images[0]);

  useEffect(() => {
    setImage(images[slide]);
  }, [slide]);

  function handleNextImage() {
    setSlide((prev) => prev + 1);
  }
  function handleBackImage() {
    setSlide((prev) => prev - 1);
  }

  return (
    <div className="container">
      <img src={image} className="images" alt="slider" />

      <button
        className="btn-back"
        onClick={handleBackImage}
        style={{ display: slide === 0 ? "none" : "block" }}
      >
        ‹
      </button>

      <button
        className="btn-next"
        onClick={handleNextImage}
        style={{ display: slide >= images.length - 1 ? "none" : "block" }}
      >
        ›
      </button>
      <div className="dots">
        {images.map((_, idx) => (
          <button
            key={idx}
            className={`dot ${idx === slide ? "active" : ""}`}
            onClick={() => setSlide(idx)}
          />
        ))}
      </div>
    </div>
  );
}
