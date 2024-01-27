import React, { useState } from 'react';
import Pad from './component/pad';
import SidePanel from './component/sidePanel';

const DATA = [
  { letter: 'Q', keycode: 81, id: 'Open-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
  { letter: 'W', keycode: 87, id: 'Closed-HH', url: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' },
  { letter: 'E', keycode: 69, id: 'Kick-and-Hat', url: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
  { letter: 'A', keycode: 65, id: 'Punchy-Kick', url: 'https://s3.amazonaws.com/freecodecamp/drums/punchy_kick_1.mp3' },
  { letter: 'S', keycode: 83, id: 'Kick', url: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
  { letter: 'D', keycode: 68, id: 'Snare', url: 'https://s3.amazonaws.com/freecodecamp/drums/Brk_Snr.mp3' },
  { letter: 'Z', keycode: 90, id: 'Side-Stick', url: 'https://s3.amazonaws.com/freecodecamp/drums/side_stick_1.mp3' },
  { letter: 'X', keycode: 88, id: 'Clap', url: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
  { letter: 'C', keycode: 67, id: 'Shaker', url: 'https://s3.amazonaws.com/freecodecamp/drums/Give_us_a_light.mp3' },
];

const App = () => {
  const [currentSound, setCurrentSound] = useState('');
  const [power, setPower] = useState(true);
  const [volumeInput, setVolumeInput] = useState(50);
  const [volume, setVolume] = useState(0.5);

  const updateDisplay = (id) => {
    setCurrentSound(id);
  };

  const togglePower = () => {
    const message = !power && 'Welcome';
    setPower(!power);
    setCurrentSound(message);
    setTimeout(() => {
      setCurrentSound('');
    }, 1500);
  };

  const changeVolume = (e) => {
    const newVolume = e.target.value / 100;
    const message = "Volume: " + e.target.value;
    setVolume(newVolume);
    setVolumeInput(e.target.value);
    setCurrentSound(message);
  };

  const colorStyle = power ? { background: '#1ec8ce' } : { background: '#476b68' };

  const pads = DATA.map((pad, i) => (
    <Pad key={i} pad={pad} updateDisplay={updateDisplay} power={power} volume={volume} />
  ));

  return (
    <div className="container">
      <div className="machine">
        <div className="pads">
          {pads}
        </div>
        <SidePanel
          volumeInput={volumeInput}
          togglePower={togglePower}
          changeVolume={changeVolume}
          currentSound={currentSound}
          power={power}
          colorStyle={colorStyle}
        />
      </div>
    </div>
  );
};

export default App;
