import githubClient from "./github-client";

export function getFavorites() {
  return githubClient("/favorites");
};

export function createFavorite(data) {
  return githubClient("/favorites", { body: data });
};

export function removeFavorite(id) {
  return githubClient(`/favorites/${id}`, { method: "DELETE" });
};
