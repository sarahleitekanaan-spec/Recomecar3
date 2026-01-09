import React from 'react';
import './TitleScreen.css';

const TitleScreen = ({ onStart }) => {
  return (
    <div className="title-screen">
      <h1 className="title">RECOMEÇAR</h1>
      <p className="subtitle">UM JOGO SOBRE VIDA</p>
      <button className="btn-primary start-btn" onClick={onStart}>
        COMEÇAR
      </button>
    </div>
  );
};

export default TitleScreen;
