const AudioPlayer = ({ width, background, minWidth }) => {
  return (
    <audio
      controls
      autoPlay={false}
      style={{
        width: `${width}`,
        background: `${background ? "#F0C2BD" : "unset"}`,
        minWidth: `${minWidth}`,
      }}
    >
      <source src="http://rct.unitbv.ro:8000/;?type=http&nocache=38687" />
      Your browser does not support the audio element.
    </audio>
  );
};

export default AudioPlayer;
