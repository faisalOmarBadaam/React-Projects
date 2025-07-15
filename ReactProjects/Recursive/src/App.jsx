import DarkMood from "./assets/Components/Dark mode";
import QRCodeGenerator from "./assets/Components/QR Code";
import ScrollIndicator from "./assets/Components/scroll-indicator";
import TreeView from "./assets/Components/tree-view";

function App() {
  return (
    <>
      {/* <TreeView menus={menus} /> */}
      {/* <QRCodeGenerator /> */}
      {/* <DarkMood /> */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
    </>
  );
}

export default App;
