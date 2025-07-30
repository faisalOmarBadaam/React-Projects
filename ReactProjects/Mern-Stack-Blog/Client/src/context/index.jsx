import { useState } from "react";
import GlobalContext from "./context.js";
export default function GlobalStateContext({ children }) {
  const [form, setForm] = useState({
    title: "",
    description: "",
  });
  return (
    <GlobalContext.Provider value={{ form, setForm }}>
      {children}
    </GlobalContext.Provider>
  );
}
