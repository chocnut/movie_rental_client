const getJson = async resp => {
  return new Promise(resolve => {
    if (resp) {
      resp
        .json()
        .then(json => resolve(json))
        .catch(() => resolve(null));
    } else {
      resolve(null);
    }
  });
};

const url = process.env.REACT_APP_API_URL;

const getToken = () => localStorage.getItem("authToken");

const request = async ({ path, method = "GET", headers = {}, data }) => {
  const token = getToken();
  const response = await fetch(`${url}/api/v1/${path}`, {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...(token && { Authorization: token }),
      ...headers
    },
    ...(method !== "GET" && { body: JSON.stringify(data) })
  });
  return await getJson(response);
};

export default request;
