import { useEffect, useState } from "react";
import { Input } from "../components/Input/styles";
import { useAuth } from "../context/auth-context";
import { useDebounce } from "react-haiku";
import { getUser } from "../services/github-api-service";
import Card from "../components/CardsProfile/cardsProfile";

function SearchPage() {
  const { user } = useAuth()
  const [query, setQuery] = useState("")
  const [userData, setUserData] = useState([])
  const debounceValue = useDebounce(query, 1000)
  useEffect(() => {
    console.log(debounceValue)
    getUser(debounceValue).then((data) => {setUserData(data)})
  }, [debounceValue])

  return (
    <div>
      <form>
        <Input
          name="query"
          placeholder="username"
          value={query}
          onChange={(event) => setQuery(event.target.value)}
        />
      </form>
      <div>
        <div>
          <img src={userData.avatar_url} alt="gtihub-avatar"/>
          <h1>{userData.name}</h1>
          <p>{userData.bio}</p>
        </div>
      </div>
      <div>
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
      </div>
    </div>
  )
}

export default SearchPage;