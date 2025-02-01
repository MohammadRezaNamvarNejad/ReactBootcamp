import { mobile } from "@/styles/media";
import { PostListType } from "@/types/postListType";
import styled, { css } from "styled-components";

export const PostList = ({ body, title, id }: PostListType) => {
  return (
    <Card>
      <Title isActive={false} id={id}>
        {title}
      </Title>
      <Body>{body}</Body>
    </Card>
  );
};

const Card = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.2s;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 600px) {
    padding: 15px;
    transition: transform 0.5s;
  }
`;

const Title = styled.h2<{ id?: number; isActive: boolean }>`
  margin-bottom: 10px;
  ${({ id }) =>
    id < 5
      ? css`
          color: #333;
        `
      : css`
          color: red;
        `}
  ${({ isActive }) =>
    isActive
      ? css`
          font-size: 18px;
        `
      : css`
          font-size: 50px;
        `}

  ${mobile(css`
    font-size: 12px;
  `)}
`;

const Body = styled.p`
  font-size: 14px;
  color: #555;

  @media (max-width: 600px) {
    font-size: 12px;
  }
`;
