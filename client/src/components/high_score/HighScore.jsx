import React from "react";
import { Card, Spinner } from "react-bootstrap";
import "./HighScore.css";

export default function HighScore(props) {
  const { highScores, users } = props;
  console.log(users);

  const getName = () => {
    for (let i = 0; i > highScores.length; i++) {
      console.log(highScores[i]);
    }
  };

  return (
    <div className="highscore-div">
      <Card
        className="score-card"
        style={{ width: "60vw", background: "#12263a" }}
      >
        <Card.Body>
          <h1 className="highscore-title">High Scores</h1>

          {!highScores && <Spinner animation="border" variant="light" />}

          {highScores &&
            highScores.map((score) => (
              <p className="score" key={score.id}>
                {`${score.score}`}
              </p>
            ))}
          <br />
          <h1 className="highscore-title">Personal High Scores</h1>
          {!highScores && <Spinner animation="border" variant="light" />}
        </Card.Body>
      </Card>
    </div>
  );
}
