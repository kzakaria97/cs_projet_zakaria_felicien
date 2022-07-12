import React from "react";
import "./video.css";

const Video = () => {
  return (
    <div>
      <video
        className="land"
        src="/img/land.mp4"
        muted
        autoPlay={true}
        loop={true}
      ></video>
      <div className="div-play text-center">
        <p>The Beauty</p>
        <h1>LOOKBOOK</h1>
        <p>&#x27A4; PLAY VIDEO</p>
      </div>
    </div>
  );
};

export default Video;
