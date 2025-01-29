import styled from "styled-components";

type props = {
  name: string;
  body: string;
};
export const CommentsBox = ({ name, body }: props) => {
  return (
    <Box>
      <span>{name}</span>
      <li>{body}</li>
    </Box>
  );
};
const Box = styled.div`
  padding: 16px;
  background-color: white;
  li {
    color: black;
  }
  span {
    color: blue;
  }
`;
