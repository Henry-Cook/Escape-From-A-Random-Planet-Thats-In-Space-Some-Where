import React, { useState } from "react";
import QuestionBox from "../../components/question_box_editor/QuestionBox";
import { useTimer } from "use-timer";
import "./gameplay.css";
import AnimationContainer from "../../components/animation_container/AnimationContainer";

export default function Gameplay(props) {
  const [explode, setExplode] = useState(null);
  const [skyColor, setColor] = useState("#12263a");
  const [lose, setLose] = useState(null);
  const [gameWon, setGameWon] = useState(null);
  const { time, start, pause, reset, isRunning } = useTimer({
    initialTime: 0,
  });

  const setSkyColor = (color) => {
    setColor(color);
  };

  const { questions } = props;

  const changeExplode = (state) => {
    setExplode(state);
  };

  return (
    <div className="gameplay">
      <div className="animation">
        <AnimationContainer
          explode={explode}
          skyColor={skyColor}
          lose={lose}
          gameWon={gameWon}
        />
      </div>

      <div className="questions">
        <QuestionBox
          questions={questions}
          totalTime={time}
          totalTimeStart={start}
          totalTimePause={pause}
          changeExplode={changeExplode}
          setSkyColor={setSkyColor}
          setLose={setLose}
          setGameWon={setGameWon}
          quickReset={reset}
        />
      </div>
    </div>
  );
}
