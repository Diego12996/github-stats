import { useEffect, useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import Footer from "./components/footer/footer";
import FollowersPage from "./pages/followers-page";
import FollowingPage from "./pages/following-page";
import ReposPage from "./pages/repos-page";
import FavoritesPage from "./pages/favorites-page";
import SearchPage from "./pages/search-page";
import { Container } from "./pages/styles";
import { createFavorite, getFavorites, removeFavorite } from "./services/favorites-service";
import { getFollowers, getFollowings, getRepos } from "./services/github-api-service";
import ProfilePage from "./pages/profile-page";

function AuthenticatedApp() {

  const [favorites, setFavorites] = useState([]);
  const [external, setExternal] = useState({
    followers: [],
    following: [],
    repos: []
  });

  const { followers, following, repos } = external;
 
  const navigate = useNavigate();

  useEffect(() =>{
    getFavorites().then(setFavorites).catch(console.error);
  }
  ,[favorites])

  function handleGetFollowers(userData) {
    getFollowers(userData.followers_url).then((data) => {
      setExternal({ ...external, followers: data });
    }).catch(console.error);
    navigate("/followers");
  }

  function handleGetFollowing(userData) {
    getFollowings(userData.following_url).then((data) => {
      setExternal({ ...external, following: data });
    }).catch(console.error);
    navigate("/following");
  }

  function handleGetRepos(userData) {
    getRepos(userData.repos_url).then((data) => {
      setExternal({ ...external, repos: data });
    }).catch(console.error);
    navigate("/repos");
  }

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
              onClickFollowers={handleGetFollowers}
              onClickFollowing={handleGetFollowing}
              onClickRepos={handleGetRepos}
          />
        }/>
        <Route path="/following" element= {<FollowingPage following={following}/>} />
        <Route path="/followers" element= {<FollowersPage followers={followers}/>} />
        <Route path="/repos" element= {<ReposPage repos={repos}/>} />
        <Route path="/favorites" element= {<FavoritesPage favorites= {favorites} removeFavorite={handleRemoveFavorite} />} />
        <Route path="/profile" element= {<ProfilePage/>}/>
      </Routes>
      <Footer/>
    </Container>
  )
}

export default AuthenticatedApp;
