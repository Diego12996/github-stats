const BASE_URI = "https://api.github.com/users/";

export function getUser(username) {
  return fetch(`${BASE_URI}${username}`).then((response) => response.json());
}

export function getRepos(repos_url) {
  return fetch(`${BASE_URI}${repos_url}`).then((response) => response.json());
}

export function getFollowers(followers_url) {
  return fetch(`${BASE_URI}${followers_url}`).then((response) => response.json());
}

export function getFollowings(followings_url) {
  const url = followings_url.slice(0, -13);
  return fetch(`${BASE_URI}${url}`).then((response) => response.json());
}
