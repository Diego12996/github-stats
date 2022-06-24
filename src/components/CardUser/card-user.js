import * as Style from "./styles";

function CardUser() {
  return (
    <Style.Container>
      <Style.Info>
        <Style.Avatar 
          src="https://avatars.githubusercontent.com/u/94902863?v=4"
          alt="github-avatar"
        />
        <div>
          <Style.Name>Enmanuel Chipana</Style.Name>
          <Style.Username>emachipana</Style.Username>
        </div>
      </Style.Info>
      <Style.Star />
    </Style.Container>
  );
};

export default CardUser;
