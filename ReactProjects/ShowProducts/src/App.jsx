import "./App.css";
import LoadDataFromAPI from "./assets/Components/LoadData";
function App() {
  return (
    <>
      <LoadDataFromAPI url="https://dummyjson.com/products" limit={10} />
    </>
  );
}

export default App;
