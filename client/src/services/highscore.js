import api from "./apiConfig";

export const fetchHighScores = () => {
  const resp = api.get("/timedscores");
  return resp;
};

export const fetchUsersScores = (id) => {
  const resp = api.get(`/timedscores/${id}`);
  return resp;
};

export const addUsersScores = (id, score) => {
  const resp = api.post(`/timed_scores`, { user_id: id, score: score });
  return resp;
};
