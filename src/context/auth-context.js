import { createContext, useContext, useEffect, useState } from "react";
import { tokenKey } from "../config";
import * as auth from "../services/auth-service";
import { getUser, createUser } from "../services/user-service";

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    getUser().then(setUser).catch(console.error);
  }, []);

  function login(credentials) {
    auth.login(credentials).then(setUser).catch((error) => setError(error.message));
  };

  function logout() {
    auth.logout().then(() => {
      sessionStorage.removeItem(tokenKey);
      setUser(null);
    });
  };

  function signup(userData) {
    createUser(userData).then(setUser).catch((error) => setError(error.message));
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        error,
        login,
        logout,
        signup
      }}
    >
      { children }
    </AuthContext.Provider>
  );
};

function useAuth() {
  return useContext(AuthContext);
}

export { AuthProvider, useAuth };
