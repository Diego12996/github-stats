import { useEffect, useState } from "react";
import { Input } from "../components/Input/styles";
import { useDebounce } from "react-haiku";
import { getUser } from "../services/github-api-service";
import Card from "../components/CardsProfile/cardsProfile";
import * as Style from "./styles";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [userData, setUserData] = useState(null);
  const debounceValue = useDebounce(query, 1000);

  useEffect(() => {
    getUser(debounceValue).then((data) => {
      setUserData(data);
    }).catch((data) => {
      console.error(data);
      setUserData(null);
    });
  }, [debounceValue]);

  return (
    <Style.UserContainer>
      <Style.Form>
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
          <Style.Name>{userData.name}</Style.Name>
          <Style.Text>{userData.bio}</Style.Text>
        </Style.Info>
        <Style.Cards>
          <Card
            icon="followers"
            number={userData.followers}
            name="followers"
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
      : "No users..."
    }
      
    </Style.UserContainer>
  )
}

export default SearchPage;