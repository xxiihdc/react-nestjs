import { useCallback, useState, useEffect } from "react";
import { get } from "@services/apiService";

const useFetch = (url, options = {}) => {
  const [data, setData] = useState(options.initialData || null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchData = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const response = await get(url);
      const result = options.transformData
        ? options.transformData(response.data)
        : response.data;
      setData(result);
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  }, [url, options.transformData]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return { data, loading, error };
};

export default useFetch;
