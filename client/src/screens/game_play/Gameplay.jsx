import React from "react";
import QuestionBox from "../../components/question_box_editor/QuestionBox";
import { useTimer } from "use-timer";

export default function Gameplay(props) {
  const { time, start, pause, reset, isRunning } = useTimer({
    initialTime: 0,
  });

  const { questions } = props;

  return (
    <div>
      <QuestionBox
        questions={questions}
        totalTime={time}
        totalTimeStart={start}
        totalTimePause={pause}
      />
    </div>
  );
}
