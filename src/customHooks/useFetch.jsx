import { useCallback, useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    isError: false,
    errorMsg: "",
  });

  const fetchData = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error();
      }

      const responseData = await response.json();
      setData(responseData);
    } catch (error) {
      setError({
        isError: true,
        errorMsg: error.message || "Something went wrong!",
      });
    }

    setIsLoading(false);
  }, [url]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, isLoading, error };
};

export default useFetch;
