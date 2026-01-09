import React from 'react';
import './HUD.css';

const HUD = ({ chapter, title, emotion }) => {
  return (
    <>
      <div className="chapter-indicator">
        <div className="chapter-number">CAPÍTULO {chapter}</div>
        <div className="chapter-title">{title}</div>
      </div>
      
      <div className="emotion-indicator">
        <div className="emotion-label">EMOCIONAL</div>
        <div className="emotion-bar">
          <div 
            className="emotion-fill" 
            style={{ width: `${emotion}%` }}
          />
        </div>
      </div>
    </>
  );
};

export default HUD;
