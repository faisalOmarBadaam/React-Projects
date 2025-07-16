import { useCallback, useState } from "react";

export default function useFetchApi(url) {
  const [data, setData] = useState(null);
  const [isLoading, setIsloading] = useState(false);
  const [error, setError] = useState(null);
  const fetchData = useCallback(async () => {
    setIsloading(true);
    const fetchedData = await fetch(url)
      .then((response) => response.json())
      .catch((error) => setError(error))
      .finally(() => setIsloading(false));
    if (fetchedData) {
      setData(fetchedData);
    }
  }, [url]);
  return { data, error, isLoading, fetchData };
}
