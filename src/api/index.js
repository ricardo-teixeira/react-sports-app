import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:3004",
  baseURL: "https://jsonplaceholder.typicode.com",
  timeout: 60000
});

export const getUsers = () => instance.get("/users");
export const getUserPosts = userId => instance.get(`/posts?userId=${userId}`);
export const getUserPostsWithComments = userId =>
  instance.get(`/posts?userId=${userId}&_embed=comments`);
export const getUserAlbums = userId => instance.get(`/albums?userId=${userId}`);
export const getUserPhotos = userId =>
  instance.get(`/photos?albumId=${userId}`);

export const getPostComments = userId => instance.get(`/users/${userId}/posts`);

export const getUserAlbumsWithPhotos = userId =>
  instance.get(`/albums?userId=${userId}&_embed=photos`);

export const addUser = user =>
  instance.post("/users", {
    ...user
  });
export const deleteUser = userId => instance.delete(`/users/${userId}`);
