import { useState, useEffect } from "react";
export default function useScrollPercentage() {
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

  return scrollPercentage;
}
