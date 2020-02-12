import request from "./request";

export const fetchRentals = () => request({ path: "rentals" });

export const doRent = id =>
  request({
    path: "rentals",
    method: "POST",
    data: {
      rental: {
        movie_id: id
      }
    }
  });
