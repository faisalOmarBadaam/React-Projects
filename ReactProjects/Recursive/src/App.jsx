import Model from "./assets/Components/customModelPopup";
import DarkMood from "./assets/Components/Dark mode";
import QRCodeGenerator from "./assets/Components/QR Code";
import ScrollIndicator from "./assets/Components/scroll-indicator";
import CustomTabs from "./assets/Components/Tabs";
import TreeView from "./assets/Components/tree-view";
import ShowGitHubProfile from "./assets/Components/GitHubProfileSearch";

function App() {
  return (
    <>
      {/* <TreeView menus={menus} /> */}
      {/* <QRCodeGenerator /> */}
      {/* <DarkMood /> */}
      {/* <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} /> */}
      {/* <CustomTabs tabsContent={tabs} /> */}
      <ShowGitHubProfile
        url={"https://api.github.com/users/faisalOmarBadaam"}
      />
    </>
  );
}

export default App;
