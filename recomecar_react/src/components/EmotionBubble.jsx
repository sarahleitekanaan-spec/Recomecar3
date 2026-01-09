import React from 'react';
import './EmotionBubble.css';

const EmotionBubble = ({ mood, show }) => {
  if (!show || !mood) return null;
  
  return (
    <div className={`emotion-bubble ${show ? 'show' : ''}`}>
      {mood}
    </div>
  );
};

export default EmotionBubble;
