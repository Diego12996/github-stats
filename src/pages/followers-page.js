import styled from "@emotion/styled";
import CardUser from "../components/CardUser";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  gap: 1rem;
`;


function FollowersPage({ followers }) {
  return (
    <>
    <h1>{`Followers (${followers.length})` }</h1>
    <Container>
      { followers.map((foll) => (
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

export default FollowersPage;