import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Switch from "react-bootstrap/esm/Switch";
import { Route } from "react-router-dom";
import Gameplay from "../../screens/game_play/Gameplay";
import HighScore from "../../components/high_score/HighScore";
import { fetchQuestions } from "../../services/questions";
import { fetchHighScores } from "../../services/highscore";
import { fetchUsers } from "../../services/user";
import "./main.css";

export default function Main(props) {
  const [questions, setQuestions] = useState(null);
  const [highScores, setHighScores] = useState(null);
  const [users, setUsers] = useState(null);

  useEffect(() => {
    const getAllQuestions = async () => {
      const data = await fetchQuestions();
      setQuestions(data.data);
    };
    const getHighScores = async () => {
      const scores = await fetchHighScores();
      setHighScores(scores.data);
    };
    const getUsers = async () => {
      const userData = await fetchUsers();
      setUsers(userData.data);
    };

    getAllQuestions();
    getHighScores();
    getUsers();
  }, []);

  return (
    <>
      <Route path="/" exact>
        <Gameplay questions={questions} />
      </Route>

      <Route path="/highscore" exact>
        <HighScore highScores={highScores} users={users} />
      </Route>
    </>
  );
}
