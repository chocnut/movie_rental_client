import request from "./request";

export const fetchMovies = () => request({ path: "movies" });

export const fetchMovie = id => request({ path: `movies/${id}` });
