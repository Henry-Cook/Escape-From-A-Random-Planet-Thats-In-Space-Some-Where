import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Route } from "react-router-dom";
import Gameplay from "../../screens/game_play/Gameplay";
import HighScore from "../../components/high_score/HighScore";
import { fetchQuestions } from "../../services/questions";
import { fetchHighScores } from "../../services/highscore";
import "./main.css";

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

  return (
    <>
      <Route path="/" exact>
        <Gameplay questions={questions} />
      </Route>

      <Route path="/highscore" exact>
        <HighScore highScores={highScores} />
      </Route>
    </>
  );
}
