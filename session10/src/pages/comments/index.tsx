import { CommentsBox } from "@/components/CommentsBox";
import useFetchData from "@/hooks/useFetchData";
import styled from "styled-components";

const Comments = () => {
  const { data, error } = useFetchData(
    "https://jsonplaceholder.typicode.com/comments"
  );

  if (error) return <Wrapper>Error loading data.</Wrapper>;
  if (!data) return <Wrapper>Loading...</Wrapper>;

  return (
    <Wrapper>
      <h1>Hook Page</h1>
      <ul>
        {data.slice(0, 10).map((comment) => (
          <CommentsBox
            key={comment.id}
            body={comment.body}
            name={comment.name}
          />
        ))}
      </ul>
    </Wrapper>
  );
};
export default Comments;

const Wrapper = styled.div`
  padding: 20px;
  background-color: #fbe9e7;
`;
