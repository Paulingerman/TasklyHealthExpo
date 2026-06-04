// Centraliza listas usadas nas telas para evitar repetição de código.
export const metas = [
  { id: 'perdaPeso', nome: 'Perder peso' },
  { id: 'manterPeso', nome: 'Manter peso' },
  { id: 'ganharMassa', nome: 'Ganhar massa' },
  { id: 'saudeGeral', nome: 'Saúde geral' }
];

export const exercicios = [
  { id: 'flexao', nome: 'Flexão', grupo: 'Peito', series: 3, reps: '12', tempo: 60 },
  { id: 'agacho', nome: 'Agachamento', grupo: 'Pernas', series: 4, reps: '15', tempo: 75 },
  { id: 'prancha', nome: 'Prancha', grupo: 'Core', series: 3, reps: '40s', tempo: 60 },
  { id: 'burpee', nome: 'Burpee', grupo: 'Cardio', series: 3, reps: '10', tempo: 90 },
  { id: 'remada', nome: 'Remada elástica', grupo: 'Costas', series: 3, reps: '12', tempo: 70 },
  { id: 'afundo', nome: 'Afundo alternado', grupo: 'Pernas', series: 3, reps: '12', tempo: 75 },
  { id: 'abdominal', nome: 'Abdominal curto', grupo: 'Core', series: 4, reps: '20', tempo: 60 },
  { id: 'polichinelo', nome: 'Polichinelo', grupo: 'Cardio', series: 3, reps: '45s', tempo: 70 }
];

export const alimentos = [
  { id: 'ovo', nome: 'Ovo cozido', cal: 78, prot: 6, carb: 1, gord: 5 },
  { id: 'frango', nome: 'Frango grelhado', cal: 165, prot: 31, carb: 0, gord: 4 },
  { id: 'arroz', nome: 'Arroz integral', cal: 124, prot: 3, carb: 26, gord: 1 },
  { id: 'banana', nome: 'Banana', cal: 89, prot: 1, carb: 23, gord: 0 },
  { id: 'aveia', nome: 'Aveia', cal: 150, prot: 5, carb: 27, gord: 3 },
  { id: 'iogurte', nome: 'Iogurte natural', cal: 120, prot: 8, carb: 12, gord: 4 },
  { id: 'feijao', nome: 'Feijão', cal: 132, prot: 9, carb: 24, gord: 1 },
  { id: 'salada', nome: 'Salada simples', cal: 35, prot: 2, carb: 7, gord: 0 }
];

export const refeicoes = [
  { id: 'cafe', nome: 'Café da manhã' },
  { id: 'almoco', nome: 'Almoço' },
  { id: 'lanche', nome: 'Lanche' },
  { id: 'jantar', nome: 'Jantar' }
];

export const diasSemana = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab'];
