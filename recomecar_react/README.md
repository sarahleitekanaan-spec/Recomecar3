# RECOMEÇAR 🌅

Um life sim narrativo sobre reconstruir a vida após uma separação.

## Como Rodar

### Opção 1: Localmente
```bash
# Instalar dependências
npm install

# Rodar em modo desenvolvimento
npm start
```

O jogo abrirá em `http://localhost:3000`

### Opção 2: Deploy no Vercel (recomendado)
1. Crie uma conta em [vercel.com](https://vercel.com)
2. Conecte seu repositório GitHub
3. Importe o projeto
4. Deploy automático!

### Opção 3: Deploy no Netlify
1. Crie uma conta em [netlify.com](https://netlify.com)
2. Arraste a pasta `build` após rodar `npm run build`
3. Ou conecte seu repositório GitHub

## Estrutura do Projeto

```
recomecar/
├── public/
│   ├── index.html
│   ├── female_sprites.png    # Sprites da protagonista
│   └── male_sprites.png      # Sprites do marido
├── src/
│   ├── components/           # Componentes React
│   │   ├── Character.jsx     # Renderiza personagens
│   │   ├── DialogueBox.jsx   # Caixa de diálogo
│   │   ├── EmotionBubble.jsx # Balão de emoção
│   │   ├── HUD.jsx           # Interface do jogo
│   │   ├── IsometricRoom.jsx # Cenário do quarto
│   │   ├── NameScreen.jsx    # Tela de nome
│   │   ├── TitleScreen.jsx   # Tela inicial
│   │   └── ChapterEnd.jsx    # Fim de capítulo
│   ├── data/
│   │   └── chapter1.js       # Script do capítulo 1
│   ├── App.jsx               # Componente principal
│   ├── App.css
│   ├── index.js
│   └── index.css
└── package.json
```

## Sprites

Os sprites são organizados em grid 4x2 (8 personagens por sheet):
- `female_sprites.png` - 8 variações femininas
- `male_sprites.png` - 8 variações masculinas

Para trocar o personagem, altere o `spriteIndex` (0-7) em `App.jsx`.

## Capítulos Planejados

1. ✅ **A Queda** - Descoberta da traição e abandono
2. 🔲 **O Fundo do Poço** - Nova quitinete, recomeço
3. 🔲 **Primeiros Passos** - Escolha de caminho (trabalho/estudo)
4. 🔲 **A Escola da Vida** - Sistema de cursos
5. 🔲 **Ganhando o Pão** - Sistema de trabalho
6. 🔲 **Aprendendo e Crescendo** - Sistema de habilidades
7. 🔲 **Meu Cantinho** - Decoração da casa
8. 🔲 **No Topo** - Conquistas profissionais
9. 🔲 **Coração Aberto** - Sistema de romance
10. 🔲 **Felizes Para Sempre** - Final

## Tecnologias

- React 18
- CSS puro (sem frameworks)
- SVG para cenários isométricos
- Sprites PNG para personagens

## Licença

Projeto pessoal - uso livre para fins não comerciais.
