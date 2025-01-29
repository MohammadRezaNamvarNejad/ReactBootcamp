import { MyUl } from "@/components/ui/StyledUl";
import styled from "styled-components";

const Wrapper = styled.div`
  padding: 20px;
  background-color: #f9f9f9;
`;

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  const test = "test";
  return {
    props: { posts, test },
  };
}

const SSGPage = ({ posts }) => (
  <Wrapper>
    <h1>SSG Page</h1>
    <MyUl>
      {posts.slice(0, 5).map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </MyUl>
  </Wrapper>
);

export default SSGPage;

