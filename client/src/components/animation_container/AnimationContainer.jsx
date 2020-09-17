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
    </div>
  );
}
