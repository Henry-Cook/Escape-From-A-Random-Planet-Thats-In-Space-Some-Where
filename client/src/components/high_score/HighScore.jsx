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

  let userData;

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser();
      if (userData) {
        getUser().then(() => {
          getUserScores();
        });
      } else {
        history.push("/login");
      }
    };
    const getUser = async () => {
      userData = await verifyUser();
    };
    const getUserScores = async () => {
      const scores = await fetchUsersScores(userData.id);
      setUsersScores(scores.data);
    };
    handleVerify();
  }, []);

  const displayHighScore = (score, i) => {
    let hours = Math.floor(score.score / 60);
    let minutes = score.score - hours * 60;
    if (hours < 1) {
      return (
        <p className="score" key={score.id}>
          {(i === 0 && "🥇") || (i === 1 && "🥈") || (i === 2 && "🥉") || "🏆"}
          {score.user.username} : 0{hours}:{minutes}
        </p>
      );
    } else if (minutes < 10 && hours < 10) {
      return (
        <p className="score" key={score.id}>
          {(i === 0 && "🥇") || (i === 1 && "🥈") || (i === 2 && "🥉") || "🏆"}
          {score.user.username} : 0{hours}:0{minutes}
        </p>
      );
    } else if (minutes > 10 && hours < 10) {
      return (
        <p className="score" key={score.id}>
          {(i === 0 && "🥇") || (i === 1 && "🥈") || (i === 2 && "🥉") || "🏆"}
          {score.user.username} : 0{hours}:{minutes}
        </p>
      );
    } else {
      return (
        <p className="score" key={score.id}>
          {(i === 0 && "🥇") || (i === 1 && "🥈") || (i === 2 && "🥉") || "🏆"}
          {score.user.username} : {hours}:{minutes}
        </p>
      );
    }
  };

  const displayUserScore = (score, i) => {
    let hours = Math.floor(score.score / 60);
    let minutes = score.score - hours * 60;
    if (hours < 1) {
      return (
        <p className="score" key={score.id}>
          {(i === 0 && "🥇") || (i === 1 && "🥈") || (i === 2 && "🥉") || "🏆"}0
          {hours}:{minutes}
        </p>
      );
    } else if (minutes < 10 && hours < 10) {
      return (
        <p className="score" key={score.id}>
          {(i === 0 && "🥇") || (i === 1 && "🥈") || (i === 2 && "🥉") || "🏆"}0
          {hours}:0{minutes}
        </p>
      );
    } else if (minutes > 10 && hours < 10) {
      return (
        <p className="score" key={score.id}>
          {(i === 0 && "🥇") || (i === 1 && "🥈") || (i === 2 && "🥉") || "🏆"}0
          {hours}:{minutes}
        </p>
      );
    } else {
      return (
        <p className="score" key={score.id}>
          {(i === 0 && "🥇") || (i === 1 && "🥈") || (i === 2 && "🥉") || "🏆"}
          {hours}:{minutes}
        </p>
      );
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
            highScores.map((score, i) => <>{displayHighScore(score, i)}</>)}
          <br />
          <h1 className="highscore-title">Personal High Scores</h1>
          {!userScores && <Spinner animation="border" variant="light" />}
          {userScores &&
            userScores.map((score, i) => displayUserScore(score, i))}
        </Card.Body>
      </Card>
    </div>
  );
}
