import api from "./apiConfig";

export const addQuestion = async (body) => {
  console.log(body);
  const resp = await api.post("/user_submitted_questions", body);
  return resp.data;
};
