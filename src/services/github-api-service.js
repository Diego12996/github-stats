const BASE_URI = "https://api.github.com/users/";

export function getUser(username) {
  return fetch(`${BASE_URI}${username}`).then((response) => response.json());
}

export function getRepos(repos_url) {
  return fetch(`${BASE_URI}${repos_url}`).then((response) => response.json());
}
