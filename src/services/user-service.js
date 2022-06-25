import { tokenKey } from "../config";
import githubClient from "./github-client";

export function createUser(userData) {
  return githubClient("/signup", { body: userData }).then((data) => {
    const { token, ...user } = data;
    sessionStorage.setItem(tokenKey, token);
    return user;
  });
};

export function getUser() {
  return githubClient("/profile").then((data) => {
    const { token, ...user } = data;
    return user;
  })
};
