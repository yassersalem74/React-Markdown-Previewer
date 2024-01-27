import React from 'react';

const SidePanel = ({ power, togglePower, changeVolume, volumeInput, currentSound }) => {
  const style = power ? { background: "#0ad82c" } : { background: "red", boxShadow: "none" };

  return (
    <div className="side-panel">
      <div className="label">Drum Machine </div>
      <div className="display" id="display">{currentSound}</div>
      <div>
        <p>Power</p>
        <button style={style} onClick={togglePower}></button>
      </div>
      <div>
        <p>Volume</p>
        <input value={volumeInput} type="range" min="1" max="100" onChange={changeVolume}></input>
      </div>
      <div className="speakers">
        <hr />
        <hr />
        <hr />
        <hr />
        <hr />
      </div>
    </div>
  );
};

export default SidePanel;
