import api from "./apiConfig";

export const fetchQuestions = async () => {
  const resp = api.get("/questions");
  return resp;
};
