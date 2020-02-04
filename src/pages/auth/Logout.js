import { useEffect } from "react";

const Logout = ({ history }) => {
  useEffect(() => {
    localStorage.removeItem("authToken");
    history.push("/login");
  });

  return null;
};

export default Logout;
