import CardRepo from "./components/CardRepo/card-repo";
import CardUser from "./components/CardUser";
import TitleHead from "./components/Title";

function App() {
  return (
    <>
      <TitleHead></TitleHead>
      <CardUser 
        src="https://avatars.githubusercontent.com/u/94902863?v=4"
        name="Enmanuel Chipana"
        username="emachipana"
        isFavorite
      />
      <CardUser 
        src="https://avatars.githubusercontent.com/u/91627176?v=4"
        name="Lucho Zelada"
      />
      <CardRepo 
        language="Ruby"
        name="calencli"
        description="This is a best repo"
        stars={15}
        forks={1}
      />
      <CardRepo 
        language="CSS"
        name="portfolio"
          
      />
    </>
  )
}

export default App;
