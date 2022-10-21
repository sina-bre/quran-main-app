import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url: string) => {
  const [data, setData] = useState("");
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    setLoading(true);
    setData("");
    setError(false);
    const source = axios.CancelToken.source();
    axios
      .get(url, { cancelToken: source.token })
      .then((res) => {
        setLoading(false);
        //checking for multiple responses for more flexibility
        //with the url we send in.
        res.data.content && setData(res.data.content);
        //   res.content && setData(res.content);
      })
      .catch((err) => {
        setLoading(false);
        setError(true);
      });
    return () => {
      source.cancel();
    };
  }, [url]);

  return { data, loading, error };
};
export default useFetch;
