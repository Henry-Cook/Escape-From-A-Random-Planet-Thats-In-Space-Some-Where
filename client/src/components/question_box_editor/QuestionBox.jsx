import React from "react";
import AceEditor from "react-ace";
import { Button, Spinner } from "react-bootstrap";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-monokai";
import { useState } from "react";
import { useTimer } from "use-timer";
import "./questionBox.css";

export default function QuestionBox(props) {
  const [begin, setBegin] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState({
    question: "",
    answer: "",
    index: "",
  });
  const [continueGame, setContinueGame] = useState(true);
  const [win, setWin] = useState(false);
  let { questions, changeExplode } = props;

  const { time, start, reset } = useTimer({
    initialTime: 2,
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
    props.totalTimeStart();
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

  const testAnswer = () => {
    let answer = new Function(currentQuestion.question)();
    answer.toString() === currentQuestion.answer ? nextRound() : failedGame();
  };

  const nextRound = () => {
    if (currentQuestion.index + 1 === questions.length) {
      playerWon();
    } else {
      nextQuestion(currentQuestion.index + 1);
      startTimer();
    }
  };

  const failedGame = () => {
    setContinueGame(false);
    changeExplode();
  };

  const playerWon = () => {
    props.totalTimePause();
    setWin(true);
  };

  /////
  //////////////////////////////////////////

  return (
    <>
      <div className="question-box">
        <div className="editor">
          {!props.questions && <Spinner animation="border" />}

          {!begin && (
            <>
              <div className="start-text-container">
                <p className="start-text">
                  You have crash landed on an alien planet! You have managed to
                  fix the ship and lift off, but the crash has caused the
                  software to malfunction! Type in the embedded code editor and
                  solve JavaScript based questions to gain altitude and escape
                  the global object!!
                </p>
                <p className="start-text">
                  You have 20 seconds to answer questions, if the time runs out
                  or you submit the wrong answer the ship blows up!! No second
                  chances here!!!
                </p>
              </div>
              <Button variant="primary" onClick={startGame}>
                Start
              </Button>
            </>
          )}

          {begin && continueGame && !win && (
            <>
              <h1>{`Time Left: ${time}`}</h1>
              <AceEditor
                mode="javascript"
                onChange={userInput}
                value={currentQuestion.question}
                theme="monokai"
                name="editor"
                fontSize={18}
                height="40%"
                width="80%"
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

          {win && (
            <>
              <h1>{`You Won, Total Time: ${props.totalTime}`}</h1>
            </>
          )}
        </div>
      </div>
    </>
  );
}
