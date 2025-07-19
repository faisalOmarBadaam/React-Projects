import Model from "./assets/Components/customModelPopup";
import DarkMood from "./assets/Components/Dark mode";
import QRCodeGenerator from "./assets/Components/QR Code";
import ScrollIndicator from "./assets/Components/scroll-indicator";
import CustomTabs from "./assets/Components/Tabs";
import TreeView from "./assets/Components/tree-view";
import ShowGitHubProfile from "./assets/Components/GitHubProfileSearch";
import AutoSearchComplete from "./assets/Components/searchAutocomplete";
import TecTacToe from "./assets/Components/ticTacToe";
import FeatureFlagGlobalState from "./assets/Components/featureFlag/context";
import FeatureFlags from "./assets/Components/featureFlag";
import UseOnClickOutSideTest from "./assets/Components/onClickOutSideHook/test";
import UseWindowResizeTest from "./assets/Components/useWindowResize/test";

function App() {
  return (
    <>
      {/* <TreeView menus={menus} /> */}
      {/* <QRCodeGenerator /> */}
      {/* <DarkMood /> */}
      <ScrollIndicator url={"https://dummyjson.com/products?limit=100"} />
      {/* <CustomTabs tabsContent={tabs} /> */}
      {/* <ShowGitHubProfile
        url={"https://api.github.com/users/faisalOmarBadaam"}
      /> */}

      {/* <AutoSearchComplete /> */}
      {/* <TecTacToe /> */}

      {/* <FeatureFlagGlobalState>
        <FeatureFlags />
      </FeatureFlagGlobalState> */}

      {/* <UseOnClickOutSideTest /> */}

      {/* <UseWindowResizeTest /> */}
    </>
  );
}

export default App;
