import React from "react";
import "./animation.css";

export default function AnimationContainer(props) {
  const { explode, skyColor, lose, gameWon } = props;

  return (
    <div className="animation-box" style={{ backgroundColor: skyColor }}>
      {gameWon && (
        <>
          <div className="animated-cloud-little5">
            <div className="star"></div>
          </div>
          <div className="animated-cloud-little6">
            <div className="star"></div>
          </div>
          <div className="animated-cloud-little7">
            <div className="star"></div>
          </div>
          <div className="animated-cloud-little8">
            <div className="star"></div>
          </div>
          <div className="animated-cloud-little1">
            <div className="star"></div>
          </div>
          <div className="animated-cloud-little2">
            <div className="star"></div>
          </div>
          <div className="animated-cloud-little3">
            <div className="star"></div>
          </div>
          <div className="animated-cloud-little4">
            <div className="star"></div>
          </div>

          <div className="animated-cloud-little1">
            <div className="star"></div>
          </div>
          <div className="animated-cloud-little2">
            <div className="star"></div>
          </div>
          <div className="animated-cloud-little3">
            <div className="star"></div>
          </div>
          <div className="animated-cloud-little4">
            <div className="star"></div>
          </div>
        </>
      )}

      {!lose && !gameWon && (
        <>
          <div className="animated-cloud-little1">
            <div className="cloud"></div>
          </div>
          <div className="animated-cloud-little2">
            <div className="cloud"></div>
          </div>
          <div className="animated-cloud-little3">
            <div className="cloud"></div>
          </div>
          <div className="animated-cloud-little4">
            <div className="cloud"></div>
          </div>

          <div className="animated-cloud-big1">
            <div className="cloud"></div>
          </div>

          <div className="animated-cloud-big2">
            <div className="cloud"></div>
          </div>
        </>
      )}

      <div className="rocket-ship-container">
        <div className="rocket-ship">
          <div className="nose"></div>
          <div className="window"></div>
          <div className="innerwindow"></div>
          <div className="right-fin"></div>
          <div className="left-fin"></div>
          <div className="thruster"></div>
          <div className="propulsion"></div>
        </div>
      </div>

      {explode && (
        <>
          <div className="explosion-animation">
            <div className="explosion">
              <div className="sm-explosion"></div>
              <div className="med-explosion"></div>
              <div className="lg-explosion"></div>
            </div>
          </div>

          <div className="explosion-animation1">
            <div className="explosion1">
              <div className="sm-explosion"></div>
              <div className="med-explosion"></div>
              <div className="lg-explosion"></div>
            </div>
          </div>

          <div className="explosion-animation2">
            <div className="explosion2">
              <div className="sm-explosion"></div>
              <div className="med-explosion"></div>
              <div className="lg-explosion"></div>
            </div>
          </div>

          <div className="explosion-animation3">
            <div className="explosion3">
              <div className="sm-explosion"></div>
              <div className="med-explosion"></div>
              <div className="lg-explosion"></div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
