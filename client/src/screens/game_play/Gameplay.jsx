import React from "react";
import QuestionBox from "../../components/question_box_editor/QuestionBox";

export default function Gameplay(props) {
  const { questions } = props;

  return (
    <div>
      <QuestionBox questions={questions} />
    </div>
  );
}
