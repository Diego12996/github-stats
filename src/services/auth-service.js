import { tokenKey } from "../config";
import githubClient from "./github-client";

// check function maybe converted to promise function

export async function login(credentials) {  
  const data = await githubClient("/login", { body: credentials });
  const { token, ...user } = data;
  sessionStorage.setItem(tokenKey, token);
  return user;
}

export async function logout() {
  return await githubClient("/logout", { method: "DELETE" });
}
