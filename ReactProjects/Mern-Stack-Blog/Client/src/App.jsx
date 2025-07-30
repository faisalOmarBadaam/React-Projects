import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./Component/Header";
import Home from "./Pages/Home/Home";
import CommandBlog from "./Pages/CommandBlog";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs/new" element={<CommandBlog />} />
        <Route
          path="/blogs/:id/edit"
          element={<CommandBlog isUpdate={true} />}
        />
      </Routes>
    </>
  );
}

export default App;
