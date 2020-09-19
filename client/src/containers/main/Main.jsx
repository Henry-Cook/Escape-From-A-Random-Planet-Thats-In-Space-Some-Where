import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Route } from "react-router-dom";
import Gameplay from "../../screens/game_play/Gameplay";
import HighScore from "../../components/high_score/HighScore";
import { fetchQuestions } from "../../services/questions";
import { fetchHighScores } from "../../services/highscore";
import { addQuestion } from "../../services/submitQustion";
import "./main.css";
import SubmitQuestion from "../../screens/questions_submit/SubmitQuestion";

export default function Main() {
  const [questions, setQuestions] = useState(null);
  const [highScores, setHighScores] = useState(null);

  useEffect(() => {
    const getAllQuestions = async () => {
      const data = await fetchQuestions();
      setQuestions(data.data);
    };
    const getHighScores = async () => {
      const scores = await fetchHighScores();
      setHighScores(scores.data);
    };
    getAllQuestions();
    getHighScores();
  }, []);

  const submitQuestion = async (body) => {
    const response = await addQuestion(body);
  };

  return (
    <>
      <Route path="/" exact>
        <Gameplay questions={questions} />
      </Route>

      <Route path="/highscore" exact>
        <HighScore highScores={highScores} />
      </Route>

      <Route path="/submitquestion" exact>
        <SubmitQuestion submitQuestion={submitQuestion} />
      </Route>
    </>
  );
}
