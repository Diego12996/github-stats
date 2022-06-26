import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Footer from "./components/footer/footer";
import SearchPage from "./pages/search-page";
import { Container } from "./pages/styles";
import { createFavorite, getFavorites, removeFavorite } from "./services/favorites-service";

function AuthenticatedApp() {

  const [favorites, setFavorites] = useState([]);
 
  useEffect(() =>{
    getFavorites().then(setFavorites).catch(console.error);
  }
  ,[favorites])

  function handleAddFavorite(user) {
    const data = {
      name: user.name || user.login,
      username: user.login,
      avatar_url: user.avatar_url
    }
    
    createFavorite(data)
    .then((newFavorite)=> setFavorites([...favorites, newFavorite]))
    .catch(console.error)
  }

  function handleRemoveFavorite(user) {   
    const favorite = favorites.find((favorite)=> favorite.username === user.login); 
    removeFavorite(favorite.id).then(()=>{ 
      const newFavorites = favorites.filter((favorite )=> favorite.username === user.login);
      setFavorites(newFavorites);
    }).catch(console.error)
  }

  return (
    <Container>
      <Routes>  
        <Route index path="/search" element={
          <SearchPage  
              addFavorite={handleAddFavorite} 
              removeFavorite={handleRemoveFavorite} 
              favorites={favorites} 
          />
        }/>
        <Route path="/followings" element= {<h1>Followings</h1>} />
        <Route path="/followers" element= {<h1>Followers</h1>} />
        <Route path="/repos" element= {<h1>repos</h1>} />
        <Route path="/favorites" element= {<h1>favorites</h1>} />
        <Route path="/profile" element= {<h1>profile</h1>} />
      </Routes>
      <Footer/>
    </Container>
  )
}

export default AuthenticatedApp;
