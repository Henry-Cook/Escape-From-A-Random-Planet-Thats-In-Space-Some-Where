import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { verifyUser } from "../../services/auth";
import { Route, useHistory } from "react-router-dom";
import Gameplay from "../../screens/game_play/Gameplay";
import HighScore from "../../components/high_score/HighScore";
import { fetchQuestions } from "../../services/questions";
import { fetchHighScores } from "../../services/highscore";
import { addQuestion, destroyQuestion } from "../../services/submitQustion";
import "./main.css";
import SubmitQuestion from "../../screens/questions_submit/SubmitQuestion";

export default function Main() {
  const [questions, setQuestions] = useState(null);
  const [highScores, setHighScores] = useState(null);
  const [currentUser, setCurrentUser] = useState(null);
  const [submittedQuestion, setSubmittedQuestion] = useState(null);
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      userData ? setCurrentUser(userData) : history.push("/login");
    };
    const getAllQuestions = async () => {
      const data = await fetchQuestions();
      setQuestions(data.data);
    };
    const getHighScores = async () => {
      const scores = await fetchHighScores();
      setHighScores(scores.data);
    };
    handleVerify();
    getAllQuestions();
    getHighScores();
  }, []);

  const submitQuestion = async (body) => {
    const response = await addQuestion(body);
    setSubmittedQuestion(response);
  };

  const deleteQuestion = async () => {
    const response = await destroyQuestion(submittedQuestion.id);
    setSubmittedQuestion(null);
  };

  return (
    <>
      <Route path="/" exact>
        <Gameplay questions={questions} currentUser={currentUser} />
      </Route>

      <Route path="/highscore" exact>
        <HighScore highScores={highScores} />
      </Route>

      <Route path="/submitquestion" exact>
        <SubmitQuestion
          submitQuestion={submitQuestion}
          currentUser={currentUser}
          submittedQuestion={submittedQuestion}
          deleteQuestion={deleteQuestion}
        />
      </Route>
    </>
  );
}
