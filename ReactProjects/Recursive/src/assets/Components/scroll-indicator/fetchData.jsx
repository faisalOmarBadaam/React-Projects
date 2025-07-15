import { useEffect, useState } from "react";

export default function useFetchApi(url) {
  const [data, setData] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData(url) {
      const fetchedData = await fetch(url)
        .then((response) => response.json())
        .catch((error) => setError(error))
        .finally(setIsloading(false));
      if (
        fetchedData &&
        fetchedData.products &&
        fetchedData.products.length > 0
      ) {
        setData(fetchedData.products);
      }
    }

    fetchData(url);
  }, [url]);
  return { data, error, isLoading };
}
