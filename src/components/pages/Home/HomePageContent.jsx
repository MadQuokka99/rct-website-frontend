import React from "react";
import "./HomePageContent.scss";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
// import strings from "../../../config/strings";

// const { homepage: homepageStrings } = strings;

const HomePageContent = () => {
  return (
    <>
      <div className="content">
        <AudioPlayer
          autoPlay={false}
          src="http://rct.unitbv.ro:8000/;?type=http&nocache=38687"
          showSkipControls={false}
          showJumpControls={false}
          volume={0.5}
          loop={false}
          // other props here
        />
      </div>
    </>
  );
};

export default HomePageContent;
