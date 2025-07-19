import { useRef } from "react";
import useFetchApi from "./fetchData";
export default function ScrollIndicator({ url }) {
  const { data: Products, isLoading, error } = useFetchApi(url);
  const ref = useRef();
  const refSection1 = useRef();
  const refSection2 = useRef();
  const refSection3 = useRef();

  function handleToDown() {
    ref.current.scrollIntoView({ behavior: "smooth" });
  }
  function handleToUp() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }
  function handleToSection(refSection) {
    refSection.current.scrollIntoView({ behavior: "smooth" });
  }
  return (
    <div>
      {isLoading ? <div>loading the data</div> : null}

      {error !== null ? <div>something Wrong</div> : null}
      <div style={{ height: "100vh", textAlign: "center" }}>
        {/* <div className="top-container">
          <h1>Custom scroll indicator</h1>

          <div className="scroll-progress-tracking-container">
            <div
              className="current-progress-bar"
              style={{ width: `${scrollPercentage}%` }}
            ></div>
          </div>
        </div> */}
        <div>
          <button onClick={handleToDown}>To Bottom</button>
          <button
            onClick={() => {
              handleToSection(refSection1);
            }}
          >
            To section 1
          </button>
          <button
            onClick={() => {
              handleToSection(refSection2);
            }}
          >
            To section 2
          </button>
          <button
            onClick={() => {
              handleToSection(refSection3);
            }}
          >
            To section 3
          </button>
        </div>
        <div
          ref={refSection1}
          className="thirdSection"
          style={{ backgroundColor: "red" }}
        >
          <div
            style={{
              margin: "50px",
              textAlign: "center",
            }}
          >
            {Products && Products.length > 0 ? (
              Products.map((item, index) => <p key={index}>{item.title}</p>)
            ) : (
              <div>there is no products to show</div>
            )}
          </div>
        </div>
        <div
          ref={refSection2}
          className="secondSection"
          style={{ backgroundColor: "green" }}
        >
          <div
            style={{
              margin: "50px",
              textAlign: "center",
            }}
          >
            {Products && Products.length > 0 ? (
              Products.map((item, index) => <p key={index}>{item.title}</p>)
            ) : (
              <div>there is no products to show</div>
            )}
          </div>
        </div>
        <div
          ref={refSection3}
          className="firstSection"
          style={{ backgroundColor: "blue" }}
        >
          <div
            style={{
              margin: "50px",
              textAlign: "center",
            }}
          >
            {Products && Products.length > 0 ? (
              Products.map((item, index) => <p key={index}>{item.title}</p>)
            ) : (
              <div>there is no products to show</div>
            )}
          </div>
        </div>
        <div ref={ref}></div>
        <button onClick={handleToUp}>to up</button>
      </div>
    </div>
  );
}
