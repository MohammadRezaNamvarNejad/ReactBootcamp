import { MyUl } from '@/components/ui/StyledUl';
import styled from 'styled-components';

const Wrapper = styled.div`
  padding: 20px;
  background-color: #e0f7fa;
`;

export async function getServerSideProps() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const users = await res.json();

  return {
    props: { users },
  };
}

const SSRPage = ({ users }) => (
  <Wrapper>
    <h1>SSR Page</h1>
    <MyUl>
      {users.map((user) => (
        <li key={user.id}>{user.name}</li>
      ))}
    </MyUl>
  </Wrapper>
);

export default SSRPage;
