import request from "./request";

export const doLogin = values =>
  request({ path: "tokens", method: "POST", data: values });
