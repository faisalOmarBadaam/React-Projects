import { useRef, useState } from "react";
import useOutSideClick from ".";

export default function UseOnClickOutSideTest() {
  const ref = useRef();
  const [showContent, setShowContent] = useState(false);
  useOutSideClick(ref, () => setShowContent(false));
  return (
    <div>
      {showContent ? (
        <div ref={ref}>
          <h1>This is random content</h1>
          <p>to close it please click out side</p>
        </div>
      ) : (
        <button onClick={() => setShowContent(true)}>show Content</button>
      )}
    </div>
  );
}
