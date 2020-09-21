import api from "./apiConfig";

export const addQuestion = async (body) => {
  const resp = await api.post("/user_submitted_questions", body);
  return resp.data;
};

export const destroyQuestion = async (id) => {
  const resp = await api.delete(`/user_submitted_questions/${id}`);
  return resp.data;
};
