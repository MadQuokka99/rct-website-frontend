import React from "react";
import "./HomePageContent.scss";
import "react-h5-audio-player/lib/styles.css";
import AudioPlayer from "react-h5-audio-player";
// import strings from "../../../config/strings";

// const { homepage: homepageStrings } = strings;

const HomePageContent = () => {
  return (
    <>
      <AudioPlayer
        autoPlay={false}
        src="http://rct.unitbv.ro:8000/;?type=http&nocache=38687"
        showSkipControls={false}
        showJumpControls={false}
        volume={0.5}
        loop={false}
        className="audioPlayer-content"
        layout={"horizontal"}
        // other props here
      />
      <div className="content"></div>
    </>
  );
};

export default HomePageContent;
