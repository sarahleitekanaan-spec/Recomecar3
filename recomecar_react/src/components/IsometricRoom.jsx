import React from 'react';
import './IsometricRoom.css';

const IsometricRoom = ({ children }) => {
  return (
    <div className="room-container">
      <svg className="room-svg" viewBox="0 0 400 300" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="floorGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#dda15e"/>
            <stop offset="50%" stopColor="#bc6c25"/>
            <stop offset="100%" stopColor="#dda15e"/>
          </linearGradient>
          <linearGradient id="wallBackGrad" x1="0%" y1="100%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#457b9d"/>
            <stop offset="100%" stopColor="#a8dadc"/>
          </linearGradient>
          <linearGradient id="wallRightGrad" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="0%" stopColor="#a8dadc"/>
            <stop offset="100%" stopColor="#357085"/>
          </linearGradient>
          <linearGradient id="windowGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#87ceeb"/>
            <stop offset="100%" stopColor="#c9e9f6"/>
          </linearGradient>
        </defs>

        {/* Chão */}
        <polygon 
          points="200,260 380,168 200,76 20,168" 
          fill="url(#floorGrad)" 
          stroke="#8b5a2b" 
          strokeWidth="1"
        />
        
        {/* Parede de trás */}
        <polygon 
          points="20,168 200,76 200,10 20,102" 
          fill="url(#wallBackGrad)" 
          stroke="#3a6a85" 
          strokeWidth="1"
        />
        
        {/* Parede da direita */}
        <polygon 
          points="200,76 380,168 380,102 200,10" 
          fill="url(#wallRightGrad)" 
          stroke="#3a6a85" 
          strokeWidth="1"
        />
        
        {/* Janela */}
        <polygon 
          points="60,125 125,92 125,45 60,78" 
          fill="url(#windowGrad)" 
          stroke="#f5f5dc" 
          strokeWidth="3"
        />
        <line x1="92.5" y1="61.5" x2="92.5" y2="108.5" stroke="#f5f5dc" strokeWidth="2"/>
        <line x1="60" y1="101.5" x2="125" y2="68.5" stroke="#f5f5dc" strokeWidth="2"/>

        {/* Sofá */}
        <g id="sofa">
          <polygon points="260,148 345,105 345,90 260,133" fill="#264653"/>
          <polygon points="260,148 260,133 220,155 220,170" fill="#1d3640"/>
          <polygon points="260,133 345,90 305,112 220,155" fill="#2a9d8f"/>
          <polygon points="265,128 335,90 335,78 265,116" fill="#264653"/>
          <ellipse cx="245" cy="150" rx="22" ry="9" fill="#2a9d8f" transform="rotate(-25 245 150)"/>
          <ellipse cx="295" cy="125" rx="22" ry="9" fill="#2a9d8f" transform="rotate(-25 295 125)"/>
        </g>

        {/* Mesa de centro */}
        <g id="coffee-table">
          <polygon points="205,195 260,167 260,160 205,188" fill="#6b3e12"/>
          <polygon points="205,195 205,188 168,208 168,215" fill="#5a3410"/>
          <polygon points="205,188 260,160 223,178 168,208" fill="#8b4513"/>
        </g>

        {/* TV */}
        <g id="tv">
          <polygon points="300,200 360,170 360,163 300,193" fill="#444"/>
          <polygon points="300,200 300,193 268,210 268,217" fill="#333"/>
          <polygon points="300,193 360,163 328,181 268,210" fill="#555"/>
          <polygon points="305,185 350,162 350,135 305,158" fill="#1a1a1a" stroke="#333" strokeWidth="1"/>
          <polygon points="310,178 342,158 342,142 310,162" fill="#2a2a3a"/>
        </g>

        {/* Cama */}
        <g id="bed">
          <polygon points="55,218 130,180 130,166 55,204" fill="#6b3e12"/>
          <polygon points="55,218 55,204 28,218 28,232" fill="#5a3410"/>
          <polygon points="55,204 130,166 103,180 28,218" fill="#8b4513"/>
          <polygon points="60,198 122,163 122,156 60,191" fill="#fff"/>
          <polygon points="60,198 60,191 36,204 36,211" fill="#e8e8e8"/>
          <polygon points="60,191 122,156 98,168 36,204" fill="#f5f5f5"/>
          <ellipse cx="72" cy="186" rx="15" ry="6" fill="#fff" transform="rotate(-25 72 186)"/>
        </g>

        {/* Malas e caixas */}
        <g id="luggage">
          <polygon points="175,212 215,192 215,173 175,193" fill="#8b4513" stroke="#5a3410" strokeWidth="1"/>
          <polygon points="175,212 175,193 160,201 160,220" fill="#6b3e12"/>
          <rect x="188" y="170" width="15" height="5" fill="#5a3410" rx="1"/>
          
          <polygon points="230,228 265,210 265,195 230,213" fill="#c4a77d" stroke="#8b7355" strokeWidth="1"/>
          <polygon points="230,228 230,213 215,221 215,236" fill="#a8956d"/>
          
          <polygon points="252,242 280,228 280,215 252,229" fill="#c4a77d" stroke="#8b7355" strokeWidth="1"/>
        </g>
      </svg>
      
      {/* Personagens são renderizados como filhos */}
      {children}
    </div>
  );
};

export default IsometricRoom;
