import React, { useState } from 'react';
import './NameScreen.css';

const NameScreen = ({ onSubmit }) => {
  const [name, setName] = useState('');

  const handleSubmit = () => {
    onSubmit(name.trim() || 'Marina');
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleSubmit();
    }
  };

  return (
    <div className="name-screen">
      <h2 className="name-title">Como ela se chama?</h2>
      <input
        type="text"
        className="name-input"
        placeholder="Digite o nome..."
        maxLength={15}
        value={name}
        onChange={(e) => setName(e.target.value)}
        onKeyPress={handleKeyPress}
        autoFocus
      />
      <button className="btn-primary" onClick={handleSubmit}>
        CONTINUAR
      </button>
    </div>
  );
};

export default NameScreen;
