import React from 'react';
import './ChapterEnd.css';

const ChapterEnd = ({ playerName, emotion, choicesMade, onContinue }) => {
  return (
    <div className="chapter-end">
      <h2 className="end-title">Fim do Capítulo 1</h2>
      <p className="end-subtitle">
        A jornada de <span className="highlight">{playerName}</span> está apenas começando...
      </p>
      
      <div className="stats-container">
        <div className="stat-box">
          <div className="stat-label">FORÇA EMOCIONAL</div>
          <div className="stat-value">{emotion}%</div>
        </div>
        <div className="stat-box">
          <div className="stat-label">ESCOLHAS</div>
          <div className="stat-value">{choicesMade}</div>
        </div>
      </div>
      
      <button className="btn-primary" onClick={onContinue}>
        CONTINUAR →
      </button>
    </div>
  );
};

export default ChapterEnd;
