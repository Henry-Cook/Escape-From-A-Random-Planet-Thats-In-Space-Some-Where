import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Gameplay from "../../screens/game_play/Gameplay";
import { fetchQuestions } from "../../services/questions";
import "./main.css";

export default function Main() {
  const [questions, setQuestions] = useState(null);

  useEffect(() => {
    const getAllQuestions = async () => {
      const data = await fetchQuestions();
      console.log(data);
      setQuestions(data.data);
    };
    getAllQuestions();
  }, []);

  return (
    <div>
      <Gameplay questions={questions} />
    </div>
  );
}
