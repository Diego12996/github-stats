import { tokenKey } from "../config";
import githubClient from "./github-client";

// check function maybe converted to promise function

export function login(credentials) {  
  return githubClient("/login", { body: credentials }).then((data) => {
    const { token, ...user } = data;
    sessionStorage.setItem(tokenKey, token);
    return user;
  })
}

export function logout() {
  return githubClient("/logout", { method: "DELETE" });
}
