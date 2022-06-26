import styled from "@emotion/styled";
import CardRepo from "../components/CardRepo";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 1rem 0;
  gap: 1rem;
`;

function ReposPage({ repos }) {
  return (
    <>
      <h1>{ `Public Repos (${repos.length})` }</h1>
      <Container>
        { repos.map((repo) => (
          <CardRepo 
            key={repo.id}
            language={repo.language}
            name={repo.full_name}
            description={repo.description}
            stars={repo.stargazers_count}
            forks={repo.forks_count}
          />
        )) }
      </Container>
    </>
  );
};

export default ReposPage;