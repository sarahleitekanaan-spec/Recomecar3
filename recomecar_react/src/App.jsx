import React, { useState, useEffect } from 'react';
import TitleScreen from './components/TitleScreen';
import NameScreen from './components/NameScreen';
import IsometricRoom from './components/IsometricRoom';
import Character from './components/Character';
import EmotionBubble from './components/EmotionBubble';
import DialogueBox from './components/DialogueBox';
import HUD from './components/HUD';
import ChapterEnd from './components/ChapterEnd';
import { chapter1Script } from './data/chapter1';
import './App.css';

// Estados do jogo
const GAME_STATE = {
  TITLE: 'title',
  NAME: 'name',
  PLAYING: 'playing',
  END: 'end'
};

function App() {
  const [gameState, setGameState] = useState(GAME_STATE.TITLE);
  const [playerName, setPlayerName] = useState('');
  const [currentScene, setCurrentScene] = useState(0);
  const [emotion, setEmotion] = useState(70);
  const [choicesMade, setChoicesMade] = useState(0);
  const [husbandLeft, setHusbandLeft] = useState(false);
  const [showDialogue, setShowDialogue] = useState(false);
  const [isFading, setIsFading] = useState(false);

  const scene = chapter1Script[currentScene];

  // Transição com fade
  const fadeTransition = (callback) => {
    setIsFading(true);
    setTimeout(() => {
      callback();
      setTimeout(() => setIsFading(false), 300);
    }, 500);
  };

  // Iniciar jogo
  const handleStart = () => {
    fadeTransition(() => setGameState(GAME_STATE.NAME));
  };

  // Definir nome e começar
  const handleNameSubmit = (name) => {
    setPlayerName(name);
    fadeTransition(() => {
      setGameState(GAME_STATE.PLAYING);
      setTimeout(() => setShowDialogue(true), 800);
    });
  };

  // Avançar cena
  const advanceScene = () => {
    const nextIndex = currentScene + 1;
    
    if (nextIndex >= chapter1Script.length) {
      return;
    }
    
    const nextScene = chapter1Script[nextIndex];
    
    // Verificar se é uma ação
    if (nextScene.type === 'action') {
      if (nextScene.action === 'husband_leaves') {
        setHusbandLeft(true);
        setCurrentScene(nextIndex);
        // Esperar animação e avançar
        setTimeout(() => {
          setCurrentScene(nextIndex + 1);
        }, 2200);
        return;
      }
    }
    
    // Verificar se é o fim
    if (nextScene.type === 'end') {
      fadeTransition(() => {
        setGameState(GAME_STATE.END);
      });
      return;
    }
    
    setCurrentScene(nextIndex);
  };

  // Fazer escolha
  const handleChoice = (choice) => {
    setChoicesMade(prev => prev + 1);
    setEmotion(prev => Math.max(0, Math.min(100, prev + choice.emotion)));
    advanceScene();
  };

  // Continuar (próximo capítulo)
  const handleContinue = () => {
    alert('Capítulo 2 em desenvolvimento! 🏠\n\nEm breve: A nova quitinete e o começo da reconstrução.');
  };

  // Pular cena de ação automaticamente
  useEffect(() => {
    if (scene?.type === 'action') {
      // Ações são tratadas no advanceScene
    }
  }, [currentScene, scene]);

  return (
    <div className="app">
      {/* Overlay de fade */}
      <div className={`fade-overlay ${isFading ? 'active' : ''}`} />
      
      {/* Tela de título */}
      {gameState === GAME_STATE.TITLE && (
        <TitleScreen onStart={handleStart} />
      )}
      
      {/* Tela de nome */}
      {gameState === GAME_STATE.NAME && (
        <NameScreen onSubmit={handleNameSubmit} />
      )}
      
      {/* Jogo principal */}
      {gameState === GAME_STATE.PLAYING && (
        <div className="game-container">
          <HUD chapter={1} title="A Queda" emotion={emotion} />
          
          <div className="scene-container">
            <IsometricRoom>
              {/* Protagonista */}
              <Character
                spriteSheet="/female_sprites.png"
                spriteIndex={1} // Cabelo castanho, camisa social
                position="left"
              />
              
              {/* Marido */}
              {!husbandLeft && (
                <Character
                  spriteSheet="/male_sprites.png"
                  spriteIndex={1} // Camisa azul clara
                  position="right"
                  isLeaving={husbandLeft}
                />
              )}
              
              {/* Balão de emoção */}
              <EmotionBubble 
                mood={scene?.mood} 
                show={showDialogue && scene?.mood} 
              />
            </IsometricRoom>
          </div>
          
          {/* Diálogos */}
          {showDialogue && scene && scene.type !== 'action' && scene.type !== 'end' && (
            <DialogueBox
              speaker={scene.speaker}
              text={scene.text}
              choices={scene.choices}
              playerName={playerName}
              onChoice={handleChoice}
              onContinue={advanceScene}
            />
          )}
        </div>
      )}
      
      {/* Fim do capítulo */}
      {gameState === GAME_STATE.END && (
        <ChapterEnd
          playerName={playerName}
          emotion={emotion}
          choicesMade={choicesMade}
          onContinue={handleContinue}
        />
      )}
    </div>
  );
}

export default App;
