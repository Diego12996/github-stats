import styled from "@emotion/styled";
import CardUser from "../components/CardUser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  gap: 1rem;
`;

function FollowingPage({ following }) {
  return (
    <>
      <h1>{`Following (${following.length})` }</h1>
      <Container>
      { following.map((foll) => (
        <CardUser 
          key={foll.id}
          isFavorite={false}
          src={foll.avatar_url}
          name={foll.name || foll.login}
          username={foll.login}
        />
      )) }
      </Container>
    </>
  );
};

export default FollowingPage;

