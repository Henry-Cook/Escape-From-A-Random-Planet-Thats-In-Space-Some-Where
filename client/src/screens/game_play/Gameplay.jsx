import React, { useState } from "react";
import QuestionBox from "../../components/question_box_editor/QuestionBox";
import { useTimer } from "use-timer";
import "./gameplay.css";
import AnimationContainer from "../../components/animation_container/AnimationContainer";

export default function Gameplay(props) {
  const [explode, setExplode] = useState(null);
  const { time, start, pause, reset, isRunning } = useTimer({
    initialTime: 0,
  });

  const { questions } = props;

  const changeExplode = () => {
    setExplode(true);
  };

  return (
    <div className="gameplay">
      <div className="animation">
        <AnimationContainer explode={explode} />
      </div>

      <div className="questions">
        <QuestionBox
          questions={questions}
          totalTime={time}
          totalTimeStart={start}
          totalTimePause={pause}
          changeExplode={changeExplode}
        />
      </div>
    </div>
  );
}
