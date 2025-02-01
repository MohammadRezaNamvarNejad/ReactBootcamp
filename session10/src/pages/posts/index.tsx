import useFetchData from "@/hooks/useFetchData";
import { PostList } from "@/components/PostComponents/PostList";
 const Posts = () => {
  const { data, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/posts"
  );
  if (error) return <div>{error}</div>;
  return (
    <>
      {data?.length > 0 &&
        data.map((post) => (
          <PostList key={post?.id} id={post?.id} title={post?.title} body={post?.body} />
        ))}
    </>
  );
};
export default Posts