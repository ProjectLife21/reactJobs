import { useState } from "react";

export const useMutation = () => {
  const [error, setError] = useState({
    isError: false,
    errorMsg: "",
  });
  const [loading, setLoading] = useState(false);

  const mutation = async (url, data) => {
    setLoading(true);
    try {
      await fetch(url, {
        method: "POST",
        body: JSON.stringify(data),
      });
    } catch (error) {
      setError({
        isError: true,
        errorMsg: error?.message,
      });
    }

    setLoading(false);
  };

  return { mutation, error, loading };
};
