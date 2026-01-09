import React from 'react';
import './Character.css';

/**
 * Componente Character - Renderiza um personagem do sprite sheet
 * 
 * Os sprites são organizados em grid 4x2 (4 colunas, 2 linhas)
 * Cada sprite individual = 500x1000 pixels no original de 2000x2000
 * 
 * @param {string} spriteSheet - URL da sprite sheet (female_sprites.png ou male_sprites.png)
 * @param {number} spriteIndex - Índice do sprite (0-7), da esquerda para direita, cima para baixo
 * @param {string} position - 'left' ou 'right' para posicionamento
 * @param {boolean} isLeaving - Se true, anima saída do personagem
 * @param {string} className - Classes CSS adicionais
 */
const Character = ({ 
  spriteSheet, 
  spriteIndex = 0, 
  position = 'left',
  isLeaving = false,
  className = ''
}) => {
  // Calcular posição do sprite na sheet (grid 4x2)
  const col = spriteIndex % 4;
  const row = Math.floor(spriteIndex / 4);
  
  // Percentuais para background-position
  // Com 4 colunas: 0%, 33.33%, 66.66%, 100%
  // Com 2 linhas: 0%, 100%
  const xPercent = col * (100 / 3); // 0, 33.33, 66.66, 100
  const yPercent = row * 100; // 0 ou 100

  const spriteStyle = {
    backgroundImage: `url(${spriteSheet})`,
    backgroundPosition: `${xPercent}% ${yPercent}%`,
    backgroundSize: '400% 200%', // 4 colunas x 2 linhas
  };

  return (
    <div 
      className={`character character-${position} ${isLeaving ? 'leaving' : ''} ${className}`}
      style={spriteStyle}
      aria-label="Personagem"
    />
  );
};

export default Character;
