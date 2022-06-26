import { useEffect, useState } from "react";
import { Input } from "../components/Input/styles";
import { useDebounce } from "react-haiku";
import { getUser } from "../services/github-api-service";
import Card from "../components/CardsProfile/cardsProfile";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import * as Style from "./styles";

function SearchPage({addFavorite, removeFavorite, favorites, onClickFollowers}) {
  const [query, setQuery] = useState("");
  const [userData, setUserData] = useState(null);
  const debounceValue = useDebounce(query, 1000);

  const isFavorite = !!(favorites.find((favorite)=> favorite.username === userData?.login))

  useEffect(() => {
    getUser(debounceValue).then((data) => {
      setUserData(data);
    }).catch((data) => {
      console.error(data);
      setUserData(null);
    });
  }, [debounceValue]);

  return (
      <>
      <Style.Form onSubmit={(event)=>event.preventDefault()} >
        <Input
          name="query"
          placeholder="username"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </Style.Form>
      { userData && userData.id ? (
        <>
        <Style.Info>
          <Style.Avatar src={userData.avatar_url} alt="github-avatar" />
          <Style.NameContainer>
            <Style.Name>{userData.name|| userData.login}</Style.Name>
            { isFavorite? <AiFillStar onClick={()=>removeFavorite(userData)} color= "#F2C94C"/> :<AiOutlineStar onClick={()=>addFavorite(userData)}/> } 
          </Style.NameContainer>
          <Style.Text>{userData.bio}</Style.Text>
        </Style.Info>
        <Style.Cards>
          <Card
            icon="followers"
            number={userData.followers}
            name="followers"
            onClickCard={() => onClickFollowers(userData)}
          />
          <Card
            icon="following"
            number={userData.following}
            name="following"
          />
          <Card
            icon="repos"
            number={userData.public_repos}
            name="public repos"
          />
          <Card
            icon="gist"
            number={userData.public_gists}
            name="public gist"
          />
        </Style.Cards>
        </>
      ) 
      : (<Style.NoUsers>
          <Style.Github />
          <Style.Message>No users...</ Style.Message>
        </ Style.NoUsers>)        
    }
      
    </>
  )
}

export default SearchPage;