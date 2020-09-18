import api from "./apiConfig";

export const fetchUsers = () => {
  const resp = api.get("/users");
  return resp;
};
