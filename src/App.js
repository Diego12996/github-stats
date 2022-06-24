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
    </>
  )
}

export default App;
