// Modelo único do estado do app. Ajuda a manter o AsyncStorage organizado.
export const rotinaPadrao = {
  aguaMeta: 2.5,
  sonoMeta: 8,
  treinoDias: ['Seg', 'Qua', 'Sex'],
  exercicios: ['Peito', 'Pernas', 'Core'],
  refeicoes: 4
};

export const estadoInicial = {
  usuario: null,
  rotina: rotinaPadrao,
  agua: {},
  tarefas: {},
  dieta: {},
  treinos: {},
  progresso: {},
  fichasAlimentares: [],
  fichasTreino: []
};
