import request from "./request";

export const fetchMovies = () => request({ path: "movies" });
