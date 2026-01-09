import React, { useState, useEffect } from 'react';
import './DialogueBox.css';

const DialogueBox = ({ 
  speaker, 
  text, 
  choices, 
  onChoice, 
  onContinue,
  playerName 
}) => {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);
  const [showChoices, setShowChoices] = useState(false);

  // Substituir {name} e {NAME} no texto
  const processText = (t) => {
    if (!t) return '';
    return t
      .replace(/{name}/gi, playerName)
      .replace(/{NAME}/g, playerName.toUpperCase());
  };

  const processSpeaker = (s) => {
    if (!s) return '';
    return s.replace('{NAME}', playerName.toUpperCase());
  };

  const finalText = processText(text);
  const finalSpeaker = processSpeaker(speaker);

  // Efeito de digitação
  useEffect(() => {
    setDisplayedText('');
    setIsTyping(true);
    setShowChoices(false);
    
    let i = 0;
    const timer = setInterval(() => {
      if (i < finalText.length) {
        setDisplayedText(finalText.slice(0, i + 1));
        i++;
      } else {
        clearInterval(timer);
        setIsTyping(false);
        if (choices && choices.length > 0) {
          setTimeout(() => setShowChoices(true), 200);
        }
      }
    }, 25);

    return () => clearInterval(timer);
  }, [text, finalText, choices]);

  // Click para pular digitação ou continuar
  const handleClick = () => {
    if (isTyping) {
      setDisplayedText(finalText);
      setIsTyping(false);
      if (choices && choices.length > 0) {
        setTimeout(() => setShowChoices(true), 200);
      }
    } else if (!choices || choices.length === 0) {
      onContinue?.();
    }
  };

  const handleChoice = (choice) => {
    onChoice?.(choice);
  };

  return (
    <div className="dialogue-container" onClick={handleClick}>
      <div className="dialogue-box">
        <div className="speaker-name">{finalSpeaker}</div>
        <div className="dialogue-text">{displayedText}</div>
        
        {showChoices && choices && choices.length > 0 && (
          <div className="choices-container">
            {choices.map((choice, index) => (
              <button
                key={index}
                className="choice-btn"
                onClick={(e) => {
                  e.stopPropagation();
                  handleChoice(choice);
                }}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {choice.text}
              </button>
            ))}
          </div>
        )}
        
        {!isTyping && (!choices || choices.length === 0) && (
          <div className="click-continue">Toque para continuar...</div>
        )}
      </div>
    </div>
  );
};

export default DialogueBox;
