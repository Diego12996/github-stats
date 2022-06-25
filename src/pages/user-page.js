import Card from "../components/CardsProfile/cardsProfile";
import * as Style from "./styles";

function UserPage({ user, isFavorite, src, name, bio }) {
  return (
    <>
      <div>
        <img src={src} alt="gtihub-avatar"/>
        <h1>{name}</h1>
        <p>{bio}</p>
      </div>
      <div>
        <Card
          icon="followers"
          number={user.followings}
          name="followers"
        >
        </Card>
      </div>
    </>
  )
}

export default UserPage