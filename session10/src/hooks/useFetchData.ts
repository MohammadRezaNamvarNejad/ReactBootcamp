import { PostListType } from "@/types/postListType";
import { useEffect, useState } from "react";

type props = {
  data: Array<PostListType>;
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
