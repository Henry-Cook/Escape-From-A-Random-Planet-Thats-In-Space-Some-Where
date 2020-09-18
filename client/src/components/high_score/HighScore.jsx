import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { Card, Spinner } from "react-bootstrap";
import "./HighScore.css";
import { verifyUser } from "../../services/auth";
import { fetchUsersScores } from "../../services/highscore";

export default function HighScore(props) {
  const [currentUser, setCurrentUser] = useState(null);
  const [userScores, setUsersScores] = useState(null);
  const { highScores } = props;
  const history = useHistory();

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      userData ? setCurrentUser(userData) : history.push("/login");
    };
    handleVerify();
  }, []);

  const getUserScores = async () => {
    const scores = await fetchUsersScores(currentUser.id);
    setUsersScores(scores.data);
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
            highScores.map((score, i) => (
              <p className="score" key={score.id}>
                {`${i + 1} ${score.user.username} : ${score.score}`}
              </p>
            ))}
          <br />
          <h1 className="highscore-title">Personal High Scores</h1>
          {!userScores && <Spinner animation="border" variant="light" />}
          {userScores &&
            userScores.map((score, i) => (
              <p className="score" key={score.id}>
                {`${score.score}`}
              </p>
            ))}
        </Card.Body>
      </Card>
    </div>
  );
}
