import { useEffect, useState } from "react";
import "./style.css";
export default function LoadDataFromAPI({ url, limit = 10 }) {
  const [isLoading, setIsLoading] = useState(false);
  const [errorMassage, seterrorMassage] = useState(null);
  const [data, setData] = useState([]);
  const [skip, setSkip] = useState(0);
  const baseURL = url;
  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      const json = await fetch(`${baseURL}?limit=${limit}&skip=${skip}`)
        .then((response) => response.json())
        .catch((errorData) => seterrorMassage(errorData))
        .finally(setIsLoading(false));

      setData(json.products);
    }

    fetchData(url);
  }, [skip]);
  if (isLoading) {
    return <div>data is fetching</div>;
  }
  if (errorMassage != null) {
    return <div>something wrong</div>;
  }
  return (
    <div className="container">
      <div className="container-item">
        {data.map((item) => (
          <div key={item.id} className="item">
            <div className="image">
              <img src={item.images[0]} alt={item.description} />
            </div>
            <div className="item-name">{item.title}</div>
          </div>
        ))}
      </div>
      <button
        disabled={skip <= 90 ? false : true}
        onClick={() => {
          skip <= 90 ? setSkip((prev) => prev + 10) : null;
        }}
      >
        Show More
      </button>
      {skip <= 90 ? null : <div>you reached to the last page </div>}
    </div>
  );
}
