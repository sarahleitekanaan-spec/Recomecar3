export const chapter1Script = [
  {
    type: 'narration',
    speaker: 'NARRADOR',
    text: 'Era para ser um dia normal. {name} volta do trabalho, cansada, mas feliz por estar em casa.',
    mood: '😊'
  },
  {
    type: 'narration',
    speaker: 'NARRADOR',
    text: 'Mas algo está errado. Há malas na sala. Caixas empilhadas. E ele... ele está de pé, sem olhar nos olhos dela.',
    mood: '😟'
  },
  {
    type: 'dialogue',
    speaker: 'RODRIGO',
    text: '...Precisamos conversar.',
    mood: '😟'
  },
  {
    type: 'dialogue',
    speaker: '{NAME}',
    text: 'O que está acontecendo? Por que tem malas aqui?',
    mood: '😰'
  },
  {
    type: 'dialogue',
    speaker: 'RODRIGO',
    text: 'Eu... conheci outra pessoa. Faz alguns meses já. Eu não queria que fosse assim, mas...',
    mood: '😢'
  },
  {
    type: 'choice',
    speaker: '{NAME}',
    text: 'Como você quer reagir?',
    mood: '😢',
    choices: [
      { text: '"Alguns MESES? E você não teve coragem de me contar?"', emotion: -10 },
      { text: '"...Eu sabia que algo estava errado. Só não queria acreditar."', emotion: -5 },
      { text: '*Ficar em silêncio, processando*', emotion: 0 }
    ]
  },
  {
    type: 'dialogue',
    speaker: 'RODRIGO',
    text: 'Olha, eu sei que é difícil. Mas o apartamento... está no meu nome. O carro também. Você vai precisar...',
    mood: '😢'
  },
  {
    type: 'choice',
    speaker: '{NAME}',
    text: 'O que você quer dizer a ele?',
    mood: '😢',
    choices: [
      { text: '"Você está me expulsando da MINHA casa?"', emotion: -10 },
      { text: '"Depois de 5 anos... é assim que termina?"', emotion: -15 },
      { text: '"Tudo bem. Eu vou ficar bem. Não preciso de nada seu."', emotion: +5 }
    ]
  },
  {
    type: 'dialogue',
    speaker: 'RODRIGO',
    text: 'Você tem uma semana pra encontrar outro lugar. Eu... sinto muito.',
    mood: '😢'
  },
  {
    type: 'action',
    action: 'husband_leaves'
  },
  {
    type: 'narration',
    speaker: 'NARRADOR',
    text: 'Ele pega as malas. A porta se fecha. E {name} fica sozinha, no apartamento que já não é mais dela.',
    mood: '😭'
  },
  {
    type: 'narration',
    speaker: 'NARRADOR',
    text: 'O silêncio pesa. As paredes parecem menores. O mundo parece ter parado.',
    mood: '😭'
  },
  {
    type: 'choice',
    speaker: '{NAME}',
    text: 'O que você faz agora?',
    mood: '😭',
    choices: [
      { text: '*Chorar. Só chorar.*', emotion: -10 },
      { text: '*Ligar para sua mãe/amiga*', emotion: +5 },
      { text: '*Respirar fundo. Um passo de cada vez.*', emotion: +10 }
    ]
  },
  {
    type: 'narration',
    speaker: 'NARRADOR',
    text: 'Às vezes a vida nos derruba. Mas toda queda é também o começo de uma nova história.',
    mood: '🌅'
  },
  {
    type: 'end'
  }
];
