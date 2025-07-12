import "./App.css";
import useFetch from "./assets/Components/imageFetch";
import ImageSlider from "./assets/Components/imageSlider";

function App() {
  const { data, loading, error } = useFetch(
    "https://picsum.photos/v2/list?page=1&limit=5"
  );
  if (loading) {
    return <div>waiting for the images</div>;
  }
  if (error) {
    return <div>something wrong {error.message}</div>;
  }
  const imageUrls = data.map((item) => item.download_url);

  return <>{<ImageSlider images={imageUrls} />}</>;
}

export default App;
