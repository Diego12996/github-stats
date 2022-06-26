import styled from "@emotion/styled";
import CardUser from "../components/CardUser";

const WrapperFavorites = styled.div `
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 1rem 0;
    gap: 1rem;
`
function FavoritesPage({favorites, removeFavorite}) {
    return (
        <>
            <h1>Favorites ({favorites.length})</h1>
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