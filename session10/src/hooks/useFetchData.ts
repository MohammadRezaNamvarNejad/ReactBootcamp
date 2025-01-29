import { useEffect, useState } from "react";
type Comment = {
    body: string;
    email: string;
    id: number;
    name: string;
    postId: number;
  };
  
type props = {
  data: Array<Comment>;
  error: string;
};
const useFetchData = (endpoint) => {
  const [data, setData] = useState();
  const [error, setError] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(endpoint);
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err);
      }
    };
    fetchData();
  }, [endpoint]);

  return { data, error } as props;
};

export default useFetchData;
