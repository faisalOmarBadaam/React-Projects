import { createContext, useEffect, useState } from "react";
import featureFlagsDataServiceCall from "../data.js";
export const FeatureFlagContext = createContext(null);

export default function FeatureFlagGlobalState({ children }) {
  const [isLoading, setIsLoading] = useState(false);
  const [enabledFlags, setEnabledFlags] = useState({});
  async function FetchFeatureFlags() {
    try {
      setIsLoading(true);
      const response = await featureFlagsDataServiceCall();
      setEnabledFlags(response);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    } finally {
      setIsLoading(false);
    }
  }
  useEffect(() => {
    FetchFeatureFlags();
  }, []);
  return (
    <FeatureFlagContext.Provider value={{ enabledFlags, isLoading }}>
      {children}
    </FeatureFlagContext.Provider>
  );
}
