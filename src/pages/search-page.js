import { useAuth } from "../context/auth-context";


function SearchPage() {
  const { user } = useAuth()
  return (
    <div>
      <p>{user.first_name}</p>
      <p>{user.last_name}</p>
      <p>{user.email}</p>
    </div>
  )
}

export default SearchPage;