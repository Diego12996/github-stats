import * as Style from "./styles";

function CardUser({ isFavorite, src, name, username, onClickStar }) {
  return (
    <Style.Container>
      <Style.Info>
        <Style.Avatar 
          src= {src}
          alt="github-avatar"
        />
        <div>
          <Style.Name>{name}</Style.Name>
          { isFavorite && (<Style.Username>{username}</Style.Username>) }
        </div>
      </Style.Info>
      { isFavorite && (<Style.Star onClick={onClickStar} />) }
    </Style.Container>
  );
};

export default CardUser;
