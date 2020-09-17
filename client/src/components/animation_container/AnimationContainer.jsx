import React from "react";
import "./animation.css";
import imgPath from "./assets/stars.png";

export default function AnimationContainer() {
  return (
    <div className="animation-box" style={{ backgroundColor: "#12263a" }}>
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
    </div>
  );
}
