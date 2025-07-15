import { useState } from "react";
import "./style.css";
export default function CustomTabs({ tabsContent = [] }) {
  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  function handleOnClickTab(index) {
    setCurrentTabIndex(index);
  }
  return (
    <div className="wrapper">
      {tabsContent.map((tab, index) => (
        <div
          onClick={() => handleOnClickTab(index)}
          key={index}
          className={`tap-header ${currentTabIndex === index ? "active" : ""}`}
        >
          {tab.title}
        </div>
      ))}

      <div className="tab-content">
        {tabsContent[currentTabIndex] && tabsContent[currentTabIndex].content}
      </div>
    </div>
  );
}
