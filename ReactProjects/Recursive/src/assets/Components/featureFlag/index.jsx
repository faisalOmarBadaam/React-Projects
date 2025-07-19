import DarkMood from "../Dark mode";
import CustomTabs from "../Tabs";
import TreeView from "../tree-view";
import ShowGitHubProfile from "../GitHubProfileSearch";
import TecTacToe from "../ticTacToe";
import { useContext } from "react";
import menus from "../tree-view/data";
import { FeatureFlagContext } from "./context";

export default function FeatureFlags() {
  const { enabledFlags, isLoading } = useContext(FeatureFlagContext);
  const componentsToRender = [
    {
      key: "showLightAndDarkMood",
      component: <DarkMood />,
    },
    {
      key: "showTecTacToeBoard",
      component: <TecTacToe />,
    },

    {
      key: "showTreeView",
      component: <TreeView menus={menus} />,
    },
    {
      key: "showGitHubProfile",
      component: <ShowGitHubProfile />,
    },
  ];
  function CheckEnabledFlags(getCurrentKey) {
    return enabledFlags[getCurrentKey];
  }
  if (isLoading) return <div>wait for data ... </div>;
  return (
    <div>
      <div>Feature Flags</div>
      <div>
        {componentsToRender.map((componentItem) =>
          CheckEnabledFlags(componentItem.key) ? (
            <div key={componentItem.key}>{componentItem.component}</div>
          ) : null
        )}
      </div>
    </div>
  );
}
