import styled from "@emotion/styled";
import CardUser from "../components/CardUser";
import TitleHead from "../components/Title/title";

const WrapperFavorites = styled.div `
    display: flex;
    flex-direction: column;
    gap: 16px;
`
function FavoritesPage({favorites, removeFavorite}) {
    
    return (
        <>
            <TitleHead>Favorites ({favorites.length})</TitleHead>
                <h2>  1 </h2>
            <WrapperFavorites>
                {favorites.map((fav)=>( 
                    <CardUser 
                        key = {fav.id}
                        src = {fav.avatar_url}
                        name = {fav.name}
                        username = {fav.username}
                        isFavorite = {true}
                        onClickStar= {() => removeFavorite({...fav, login: fav.username})}
                    />
                ))}  
            </WrapperFavorites>

        </>

    );
}

export default FavoritesPage;