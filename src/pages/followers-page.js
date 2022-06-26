import CardUser from "../components/CardUser";

function FollowersPage({ followers }) {
  return (
    <>
    <h1>{`Followers (${followers.length})` }</h1>
    { followers.map((foll) => (
      <CardUser 
        key={foll.id}
        isFavorite={false}
        src={foll.avatar_url}
        name={foll.name || foll.login}
        username={foll.login}
      />
    )) }
    </>
  );
};

export default FollowersPage;