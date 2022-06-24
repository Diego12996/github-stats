import CardUser from "./components/CardUser";

function App() {
  return (
    <>
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
