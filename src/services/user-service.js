import { tokenKey } from "../config";
import githubClient from "./github-client";

// check function maybe converted to promise function

export async function createUser(userData) {
  const data = githubClient("/signup", { body: userData });
  const { token, ...user } = data;
  sessionStorage.setItem(tokenKey, token);
  return user;
};

export async function getUser() {
  const data = githubClient("/profile");
  const { token, ...user } = data;
  return user;
};
