import DarkMood from "./assets/Components/Dark mode";
import QRCodeGenerator from "./assets/Components/QR Code";
import ScrollIndicator from "./assets/Components/scroll-indicator";
import CustomTabs from "./assets/Components/Tabs";
import TreeView from "./assets/Components/tree-view";

function App() {
  const tabs = [
    {
      title: "tab1",
      content: "from tab 1",
    },
    {
      title: "tab2",
      content: "from tab 2",
    },
    {
      title: "tab3",
      content: "from tab 3",
    },
  ];
  return (
    <>
      {/* <TreeView menus={menus} /> */}
      {/* <QRCodeGenerator /> */}
      {/* <DarkMood /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      <CustomTabs tabsContent={tabs} />
    </>
  );
}

export default App;
