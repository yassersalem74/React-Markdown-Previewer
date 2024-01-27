import React, { useState, useEffect } from 'react';

const Pad = ({ pad, power, volume, updateDisplay }) => {
  const [playing, setPlaying] = useState(false);

  const handleKeyPress = (e) => {
    if (e.keyCode === pad.keycode) {
      onPlay();
    }
  };

  const onPlay = () => {
    if (power) {
      const sound = document.getElementById(pad.letter);
      sound.currentTime = 0;
      sound.volume = volume;
      sound.play();
      updateDisplay(pad.id);
      setPlaying(true);
      setTimeout(() => {
        setPlaying(false);
      }, 100);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeyPress);
    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  });

  const style = !power ? { background: '#476b68' } : playing ? onStyle : offStyle;

  return (
    <div style={style} className="outer-drum-pad">
      <div className="drum-pad" id={pad.id} onClick={onPlay}>
        <audio id={pad.letter} src={pad.url} className="clip"></audio>
        {pad.letter}
      </div>
    </div>
  );
};

const onStyle = { transform: "scale(0.95)", boxShadow: "1px 1px 4px 4px cyan, -1px -1px 4px 4px cyan" };
const offStyle = { transform: "scale(1)", boxShadow: "none" };

export default Pad;
