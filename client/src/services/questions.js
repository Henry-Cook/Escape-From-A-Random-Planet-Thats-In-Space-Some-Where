import api from "./apiConfig";

export const fetchQuestions = () => {
  const resp = api.get("/questions");
  return resp;
};
