import React from "react";
import AceEditor from "react-ace";
import { Button, Spinner } from "react-bootstrap";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import { useState } from "react";
import { useTimer } from "use-timer";

export default function QuestionBox(props) {
  const [begin, setBegin] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "",
    answer: "",
    index: "",
  });
  const [continueGame, setContinueGame] = useState(true);
  // const [index, setIndex] = useState(0);
  let { questions } = props;

  const { time, start, pause, reset, isRunning } = useTimer({
    initialTime: 200,
    timerType: "DECREMENTAL",
    endTime: 0,
    onTimeOver: () => {
      failedGame();
    },
  });

  ///////////////////////////////////////////
  ///// GAME LOGIC

  const startGame = () => {
    setBegin(true);
    nextQuestion(0);
  };

  const nextQuestion = (index) => {
    setCurrentQuestion({
      question: questions[index].question,
      answer: questions[index].answer,
      index: questions.indexOf(questions[index]),
    });
    startTimer();
  };

  const startTimer = () => {
    reset();
    start();
  };

  const userInput = (value) => {
    setCurrentQuestion({
      ...currentQuestion,
      question: value,
    });
  };

  const testAnswer = (e) => {
    let answer = new Function(currentQuestion.question)();
    answer.toString() === currentQuestion.answer ? nextRound() : failedGame();
  };

  const nextRound = () => {
    nextQuestion(currentQuestion.index + 1);
    startTimer();
  };

  const failedGame = () => {
    setContinueGame(false);
  };

  /////
  //////////////////////////////////////////

  return (
    <>
      <div></div>
      <div className="editor">
        {!props.questions && <Spinner animation="border" />}

        {!begin && (
          <>
            <Button variant="primary" onClick={startGame}>
              Start
            </Button>
          </>
        )}

        {begin && continueGame && (
          <>
            <h1>{`Time Left: ${time}`}</h1>
            <AceEditor
              mode="javascript"
              onChange={userInput}
              value={currentQuestion.question}
              theme="monokai"
              name="editor"
              fontSize={14}
              showPrintMargin={true}
              showGutter={true}
              highlightActiveLine={true}
              setOptions={{
                enableBasicAutocompletion: true,
                enableLiveAutocompletion: true,
                showLineNumbers: true,
                tabSize: 2,
                wrap: true,
              }}
            />
            <Button variant="info" onClick={testAnswer}>
              Submit
            </Button>
          </>
        )}
        {!continueGame && (
          <>
            <h1>you lost!</h1>
          </>
        )}
      </div>
    </>
  );
}
