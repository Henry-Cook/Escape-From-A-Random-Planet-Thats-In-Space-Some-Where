import api from "./apiConfig";

export const fetchHighScores = () => {
  const resp = api.get("/timedscores");
  return resp;
};
