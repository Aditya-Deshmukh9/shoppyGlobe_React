import { useEffect } from "react";
import { useState } from "react";

function useFetchData(url) {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(null);
  const [error, setError] = useState(false);

  const fetchData = async (url) => {
    try {
      setLoading(true);

      const response = await fetch(url);
      const result = await response.json();

      setData(result);
    } catch (error) {
      setError(true);
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData(url);
  }, [url]);

  return {
    loading,
    data,
    error,
  };
}

export default useFetchData;
