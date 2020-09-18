import api from "./apiConfig";

export const fetchHighScores = () => {
  const resp = api.get("/timedscores");
  return resp;
};

export const fetchUsersScores = (id) => {
  const resp = api.get(`/timedscores/${id}`);
  return resp;
};
