import { useEffect, useState } from "react";
import useFetchApi from "./fetchData";
import "./scroll.css";
export default function ScrollIndicator({ url }) {
  const { data: Products, isLoading, error } = useFetchApi(url);
  const [scrollPercentage, setScrollPercentage] = useState(0);
  useEffect(() => {
    function handleScrollEvent() {
      const howMuchScrolled =
        document.body.scrollTop || document.documentElement.scrollTop;
      const height =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setScrollPercentage((howMuchScrolled / height) * 100);
    }
    window.addEventListener("scroll", handleScrollEvent);

    return () => {
      window.removeEventListener("scroll", () => {});
    };
  }, [scrollPercentage]);
  return (
    <div>
      {isLoading ? <div>loading the data</div> : null}

      {error !== null ? <div>something Wrong</div> : null}
      <div className="container">
        <div className="top-container">
          <h1>Custom scroll indicator</h1>

          <div className="scroll-progress-tracking-container">
            <div
              className="current-progress-bar"
              style={{ width: `${scrollPercentage}%` }}
            ></div>
          </div>
        </div>
        <div className="data-container">
          {Products && Products.length > 0 ? (
            Products.map((item, index) => <p key={index}>{item.title}</p>)
          ) : (
            <div>there is no products to show</div>
          )}
        </div>
      </div>
    </div>
  );
}
